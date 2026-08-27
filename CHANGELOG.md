# Changelog — Jiu Jitsu en Español Landing

## [1.2.0] — 2026-08-26

### Infrastructure & SEO
- **.env / .env.example**: URLs de embeds y GA ID en variables de entorno
- **robots.txt**: Allow all, sitemap reference
- **sitemap.xml**: 5 URLs principales
- **index.html**: 
  - Preload hero image
  - DNS prefetch para Pexels y YouTube
  - `og:site_name` y `twitter:site` meta tags
  - Google Analytics placeholder (G-XXXXXXXXXX)
  - Favicon SVG

### Legal Pages
- **terminos.html**: Términos y condiciones básicos
- **privacidad.html**: Política de privacidad básica
- **content.js**: Links legales actualizados a páginas reales

### Performance
- SmartImg ya tenía lazy loading (verificado)
- Preload de imagen crítica del hero
- DNS prefetch para dominios externos

### Config
- **.gitignore**: node_modules, dist, .env, IDE files, OS files

---

## [1.1.0] — 2026-08-26

### P0 — Quick Wins (Alta prioridad)
- **App.jsx**: Reordenar secciones para mejor flujo de conversión
  - `WattersQuote` movido después de `Testimonials`
  - `LeadCapture` movido antes de `InstagramCta`
- **Hero.jsx**: Quitar precio del CTA secundario
  - Texto: "118 videos por $29,000/mes" → "Explorar la membresía"
  - Removido `<span>` con precio formateado
  - Limpiados imports no usados (`useCurrency`, `PRICES`)
- **content.js**: Mejorar copy de membership
  - Description: "8 sistemas completos" en lugar de guiones
  - Density: explicación más clara de duración y estilo
  - Benefits: "8 sistemas completos, no técnicas sueltas"

### P1 — Medium Effort (Impacto alto)
- **ComparisonSection.jsx**: Nueva sección de comparación
  - Tabla: Membresía vs Cursos (6 filas)
  - Inserta después de `TwoWays`
- **QualifyingSection.jsx**: Nueva sección de calificación
  - "Para quién es esto" (4 bullets + checkmark)
  - "Esto NO es para ti" (4 bullets + X)
- **ContentLibrary.jsx**: Nueva sección de biblioteca
  - Grid visual de 8 áreas con emoji + conteo
  - Total: 118 videos en 8 sistemas
- **content.js**: FAQ expandido
  - +4 preguntas: duración de videos, descarga, soporte, orden
  - Total: 8 preguntas

### P2 — Social Proof & Trust (Impacto medio-alto)
- **StickyCta.jsx**: Botón flotante mobile
  - Aparece al scrollear 800px
  - Precio con descuento de lanzamiento + "Empezar"
  - Solo visible en ≤640px
- **SocialProof.jsx**: Notificaciones de actividad
  - 5 notificaciones rotando cada 25s
  - Primera a los 8s
  - Animación fade-in/out
- **PaymentIcons.jsx**: Íconos de métodos de pago
  - MercadoPago, Stripe, SSL Seguro
  - Insertado en CheckoutModal

### P3 — UX & Engagement (Impacto medio)
- **ExitIntent.jsx**: Popup al salir
  - Detecta mouseleave en borde superior
  - Ofrece 3 videos gratis
  - Se descarta una vez (no vuelve a mostrar)
- **Stats.jsx**: Contadores animados
  - 118+ videos, 8 sistemas, 30+ oros IBJJF
  - IntersectionObserver para iniciar al scroll
  - Animación ease-out cúbica
- **ScrollToTop.jsx**: Botón volver arriba
  - Aparece después de 600px de scroll
  - Solo en mobile (≤640px)

---

## [1.0.0] — 2026-08-25

### Features iniciales
- Hero con video preview funcional
- Membership ($29k ARS) + cursos ($29,900-36,900 ARS)
- Training Quiz (3 pasos → 15 drills → 3 horarios)
- Email capture con preview visual
- Blog (3 posts de ejemplo)
- Instagram CTA (@ramiroleonjj)
- Checkout demo modal
- Video modal con navegación
- Countdown de precio de lanzamiento (2026-09-15)
- Toggle ARS/USD
- OG/Twitter Card meta tags

### Documentación
- Dossier de 30 secciones
- Auditoría completa 21 fases
- Roadmap P0-P3

### Stack
- React 18.3.1 + Vite 6.2.0 + Tailwind CSS 4.1.4
- Sin backend, sin routing, sin auth
- Imágenes placeholder (Pexels)
- Video embeds placeholder (YouTube)
