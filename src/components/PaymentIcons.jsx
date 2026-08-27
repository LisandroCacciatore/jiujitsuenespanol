export default function PaymentIcons() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-ink-800/50 px-3 py-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#009ee3]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        <span className="text-xs font-semibold text-gold-400/80">MercadoPago</span>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-ink-800/50 px-3 py-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#6772e5]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        <span className="text-xs font-semibold text-gold-400/80">Stripe</span>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-ink-800/50 px-3 py-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <span className="text-xs font-semibold text-gold-400/80">SSL Seguro</span>
      </div>
    </div>
  )
}
