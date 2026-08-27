import { createContext, useContext, useState, useCallback } from 'react'

const CheckoutContext = createContext(null)

export { CheckoutContext }

export function CheckoutProvider({ children }) {
  const [product, setProduct] = useState(null)

  const open = useCallback((key) => setProduct(key), [])
  const close = useCallback(() => setProduct(null), [])

  return (
    <CheckoutContext.Provider value={{ product, open, close }}>
      {children}
    </CheckoutContext.Provider>
  )
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext)
  if (!ctx) throw new Error('useCheckout debe usarse dentro de <CheckoutProvider>')
  return ctx
}