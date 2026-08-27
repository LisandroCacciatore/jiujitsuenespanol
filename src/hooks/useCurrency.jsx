import { createContext, useContext, useState, useCallback } from 'react'

const CurrencyContext = createContext(null)

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('ARS')
  const toggle = useCallback(
    () => setCurrency((c) => (c === 'ARS' ? 'USD' : 'ARS')),
    [],
  )

  const format = useCallback(
    (price) => {
      if (currency === 'ARS') {
        return `$${price.ARS.toLocaleString('es-AR')}`
      }
      return `US$${price.USD}`
    },
    [currency],
  )

  return (
    <CurrencyContext.Provider value={{ currency, toggle, format }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency debe usarse dentro de <CurrencyProvider>')
  return ctx
}