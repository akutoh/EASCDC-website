/**
 * POST /api/quote — Vercel serverless function.
 *
 * Receives a "Get a Quote" submission and emails it via Resend.
 * Runs server-side, so RESEND_API_KEY is never exposed to the browser.
 *
 * Required env vars (set in Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY   — your Resend API key (starts with "re_")
 *   QUOTE_TO_EMAIL   — inbox that should receive quote requests
 *   QUOTE_FROM_EMAIL — verified sender, e.g. "E.A. Sitchon Construction <noreply@easitchonconstruction.com>"
 *                      (falls back to Resend's onboarding sender if unset, for testing)
 */

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

/* Escape user input before dropping it into the HTML email body. */
function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req, res) {
  // CORS — allows the request to succeed even if the browser follows a
  // non-www → www redirect (which turns the POST into a cross-origin request).
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.QUOTE_TO_EMAIL
  const fromEmail =
    process.env.QUOTE_FROM_EMAIL ||
    'E.A. Sitchon Construction <onboarding@resend.dev>'

  if (!apiKey || !toEmail) {
    console.error('Missing RESEND_API_KEY or QUOTE_TO_EMAIL env var')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  // Vercel parses JSON bodies automatically; guard for string bodies just in case.
  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  body = body || {}

  const fullName    = (body.fullName    || '').trim()
  const email       = (body.email       || '').trim()
  const phone       = (body.phone       || '').trim()
  const location    = (body.location    || '').trim()
  const projectType = (body.projectType || '').trim()
  const services    = Array.isArray(body.services)
    ? body.services.join(', ')
    : (body.services || '').trim()
  const description = (body.description || '').trim()

  // Optional appointment
  const wantsAppointment = body.wantsAppointment === true
  const appointmentLabel = (body.appointmentLabel || '').trim() // readable date
  const appointmentDate  = (body.appointmentDate  || '').trim() // YYYY-MM-DD fallback
  const appointmentTime  = (body.appointmentTime  || '').trim()
  const hasAppointment   = wantsAppointment && (appointmentLabel || appointmentDate) && appointmentTime

  // Server-side validation mirrors the form's required fields.
  if (!fullName || !email || !phone || !location || !projectType) {
    return res.status(400).json({ error: 'Please fill in all required fields.' })
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  const rows = [
    ['Full Name',    fullName],
    ['Email',        email],
    ['Mobile',       phone],
    ['Location',     location],
    ['Project Type', projectType],
    ['Services',     services || 'None specified'],
    ['Description',  description || 'None provided'],
  ]

  if (hasAppointment) {
    rows.push(['Appointment', `${appointmentLabel || appointmentDate} at ${appointmentTime}`])
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#E21B1B;margin:0 0 4px;">New Quote Request</h2>
      <p style="color:#555;margin:0 0 20px;font-size:14px;">via easitchonconstruction.com</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#111;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;width:130px;vertical-align:top;">${esc(label)}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${esc(value)}</td>
          </tr>`
          )
          .join('')}
      </table>
    </div>
  `

  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n')

  try {
    const resendRes = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,          // reply goes straight to the customer
        subject: `Quote Request — ${fullName} (${projectType})${hasAppointment ? ' 📅 Appointment' : ''}`,
        html,
        text,
      }),
    })

    if (!resendRes.ok) {
      const detail = await resendRes.text()
      console.error('Resend API error:', resendRes.status, detail)
      return res.status(502).json({ error: 'Could not send your request. Please try again.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Quote send failed:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
