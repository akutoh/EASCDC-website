import { createContext, useContext, useState } from 'react'

const QuoteModalContext = createContext(null)

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal  = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext)
  if (!ctx) throw new Error('useQuoteModal must be used inside QuoteModalProvider')
  return ctx
}
