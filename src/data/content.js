export const RATES = { ARS: 1520 } // 1 USD = $1.520 (referencia)

// IMÁGENES PLACEHOLDER (stock Pexels). Reemplazar por fotos reales del cliente.
export const PHOTOS = {
  hero: {
    url: 'https://images.pexels.com/photos/15545735/pexels-photo-15545735.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Ramiro León entrenando jiu jitsu en Kingsway',
  },
  about: {
    main: {
      url: 'https://images.pexels.com/photos/6253172/pexels-photo-6253172.jpeg?auto=compress&cs=tinysrgb&w=900',
      alt: 'Ramiro León con kimono en Kingsway Jiu Jitsu, Austin',
    },
    gallery: [
      {
        url: 'https://images.pexels.com/photos/38759490/pexels-photo-38759490.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Entrenamiento técnico bajo John Danaher',
      },
      {
        url: 'https://images.pexels.com/photos/13808098/pexels-photo-13808098.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Preparación física en Kingsway',
      },
      {
        url: 'https://images.pexels.com/photos/32610333/pexels-photo-32610333.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Sesión de entrenamiento en el gimnasio',
      },
    ],
  },
  highlights: [
    {
      url: 'https://images.pexels.com/photos/30180713/pexels-photo-30180713.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Triángulo vs. Oton Jasse — cuartos de final, ADCC South American Trials 2026',
    },
    {
      url: 'https://images.pexels.com/photos/11391876/pexels-photo-11391876.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Pase de guardia — ADCC Open Championship',
    },
    {
      url: 'https://images.pexels.com/photos/16552800/pexels-photo-16552800.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Heelhook — IBJJF Open, categoría absoluta',
    },
  ],
  testimonials: {
    muniz: {
      url: 'https://images.pexels.com/photos/29204802/pexels-photo-29204802.jpeg?auto=compress&cs=tinysrgb&w=200',
      alt: 'Enrique Muñiz — Instructor, Southside BJJ',
    },
    liendo: {
      url: 'https://images.pexels.com/photos/34630594/pexels-photo-34630594.jpeg?auto=compress&cs=tinysrgb&w=200',
      alt: 'Lionel Liendo — GF Team, Tucumán',
    },
    watters: {
      url: 'https://images.pexels.com/photos/13357909/pexels-photo-13357909.jpeg?auto=compress&cs=tinysrgb&w=200',
      alt: 'Jonathan Watters — Juez principal, ADCC',
    },
    sosa: {
      url: 'https://images.pexels.com/photos/3297593/pexels-photo-3297593.jpeg?auto=compress&cs=tinysrgb&w=200',
      alt: 'Martín Sosa — Cinturón azul, Club BJJ Córdoba',
    },
    puentes: {
      url: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=200',
      alt: 'Carla Puentes — Cinturón morado, Garage BJJ Bogotá',
    },
  },
  freeVideos: [
    {
      url: 'https://images.pexels.com/photos/8611942/pexels-photo-8611942.jpeg?auto=compress&cs=tinysrgb&w=900',
      alt: 'Pasajes fundamentales de Bodylock — técnica en video',
    },
    {
      url: 'https://images.pexels.com/photos/6005463/pexels-photo-6005463.jpeg?auto=compress&cs=tinysrgb&w=900',
      alt: '3 opciones desde la Dog Fight con overhook',
    },
    {
      url: 'https://images.pexels.com/photos/7676548/pexels-photo-7676548.jpeg?auto=compress&cs=tinysrgb&w=900',
      alt: 'Reconociendo distancias desde la guardia',
    },
  ],
}

export const PRICES = {
  baseMonthly: { ARS: 29000, USD: 19 },
  baseAnnual: { ARS: 290000, USD: 191 },
  baseAnnualSaving: { ARS: 58000, USD: 38 },
  courseSeminario: { ARS: 29900, USD: 20 },
  courseInstruccional: { ARS: 36900, USD: 24 },
}

export const LAUNCH = {
  endDate: '2026-09-15T23:59:59',
  monthlyOriginal: { ARS: 39000, USD: 25 },
  annualOriginal: { ARS: 390000, USD: 259 },
  courseOriginal: { ARS: 39900, USD: 27 },
  badge: 'Precio de lanzamiento',
  endsIn: 'Termina en',
}

export const NAV_LINKS = [
  { label: 'Videos gratis', href: '#gratis' },
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Membresía', href: '#membresia' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
]

export const BADGES = [
  'ADCC South American Trials 2026',
  '30+ oros IBJJF',
  '2x ADCC Opens',
  '2x F2W',
]

export const HERO = {
  kicker: 'Entreno en Kingsway, Austin, bajo John Danaher. Compito en ADCC.',
  title: 'El jiu-jitsu que se enseña en Austin, explicado en tu idioma',
  subtitle:
    'Los mismos sistemas que uso para competir a nivel internacional, desarmados paso a paso en español. Sin traducciones de tercera mano, sin subtítulos automáticos.',
  primaryCta: 'Ver 3 videos gratis — sin registro',
  secondaryCta: 'Explorar la membresía',
}

export const WATTERS = {
  quote:
    'Después de aprender de cientos de instructores del mundo, considero a Ramiro uno de los mejores instructores del mundo, tanto en gi como en nogi.',
  name: 'Jonathan Watters',
  role: 'Juez principal, ADCC',
  context: 'Prueba social de tercer nivel: no es un alumno, es una autoridad externa e independiente.',
}

export const WAYS = {
  kicker: 'Dos formas de aprender',
  title: '¿Querés arreglar una cosa puntual, o mejorar todo tu juego?',
  subtitle:
    'Si tenés un agujero concreto —no sabés pasar la media guardia, se te escapan los heelhooks— comprá el seminario de ese tema y es tuyo para siempre. Si querés reconstruir tu juego completo, la membresía te da las 8 áreas.',
}

export const COURSE_CARD = {
  tag: 'Cursos individuales',
  description:
    'Seminarios de 20–40 minutos sobre un sistema puntual. Pago único, acceso de por vida.',
  priceLabel: 'desde',
  priceNote: 'acceso de por vida',
  guarantee: 'Reembolso a los 7 días si no accediste al contenido',
  cta: 'Comprar curso',
  examples: [
    'Kani Basami — Entradas a leglocks',
    'Pasajes fundamentales de Bodylock',
    '3 opciones desde la Dog Fight',
    'Reconociendo distancias desde la guardia',
  ],
  discount: 'Llevando 2 cursos, 10% off · 3 cursos, 20% off · 4+, 30% off',
}

export const MEMBERSHIP_CARD = {
  tag: 'Membresía Base',
  description:
    '118 videos organizados en 8 sistemas completos: guardia, pasaje, finalizaciones, juego de pie, escapes, posiciones dominantes, análisis de lucha y sparring.',
  density:
    'Cada video dura 4 minutos en promedio y va directo al detalle que hace que la técnica funcione. Sin relleno, sin repeticiones innecesarias.',
  benefits: [
    '8 sistemas completos, no técnicas sueltas',
    'Videos nuevos todas las semanas, incluidos sin costo extra',
    '15% de descuento en todos los cursos individuales',
    'Cancelás cuando querés, desde tu cuenta',
  ],
  annualNote: 'Pagá el año y te ahorrás ',
  guarantee: 'Cancelás cuando querés, desde tu cuenta',
  cta: 'Empezar con Base',
}

export const FREE_VIDEOS = {
  kicker: 'Primero, la prueba',
  title: 'Mirá tres videos completos antes de decidir nada',
  subtitle: 'Sin cuenta, sin tarjeta, sin email. Si te sirven, ya sabés dónde está el resto.',
  cta: 'Ver los 3 videos gratis',
  videos: [
    {
      title: 'Pasajes fundamentales de Bodylock',
      duration: '4:22',
      category: 'Pasaje de guardia',
      embedUrl: import.meta.env.VITE_VIDEO_1 || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: '3 opciones desde la Dog Fight con overhook',
      duration: '2:36',
      category: 'Finalizaciones',
      embedUrl: import.meta.env.VITE_VIDEO_2 || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Reconociendo las distintas distancias desde la guardia',
      duration: '4:24',
      category: 'Guardia',
      embedUrl: import.meta.env.VITE_VIDEO_3 || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ],
}

export const HIGHLIGHTS = {
  kicker: 'Competencia',
  title: 'No enseño lo que leí. Enseño lo que uso.',
  subtitle:
    'Ramiro León compite en ADCC con estos mismos sistemas. Cada video de la biblioteca es material probado en el nivel más alto.',
  items: [
    {
      title: 'Triángulo vs. Oton Jasse',
      event: 'Cuartos de final — 1er ADCC South American Trials 2026, -99kg',
      result: 'Finalización por triángulo',
    },
    {
      title: 'Pase de guardia + espalda',
      event: 'ADCC Open Championship',
      result: 'Victoria por puntos',
    },
    {
      title: 'Finalización por heelhook',
      event: 'IBJJF Open — categoría absoluta',
      result: 'Victoria por sumisión',
    },
  ],
}

export const ABOUT = {
  kicker: 'Sobre mí',
  title: 'Ramiro León — cinturón negro, Kingsway Jiujitsu, Austin',
  credentials: [
    'Cinturón negro 1er grado · 12+ años de práctica',
    'Entreno en Kingsway bajo John Danaher',
    'Bronce en -99kg — ADCC South American Trials 2026',
    '30+ oros IBJJF · 2x ADCC Opens · 2x F2W',
  ],
  story:
    'Cuando empecé a entrenar en Kingsway me di cuenta de algo: el mejor jiu-jitsu del mundo se explica en inglés. Todo lo que aprendo acá —de Danaher, de los entrenamientos, de competir en ADCC— lo grabo y lo explico en español. Sin intermediarios, sin traducciones, sin perder el detalle que hace que la técnica funcione.',
}

export const TESTIMONIALS = {
  kicker: 'Testimonios',
  title: 'Lo que dicen quienes entrenan conmigo',
  items: [
    {
      quote:
        'La técnica es de primer nivel, pero lo que más valoro es la atención al alumno. Este contenido me ayudó a enseñar mejor a mis propios alumnos.',
      name: 'Enrique Muñiz',
      role: 'Instructor — Southside BJJ, Minneapolis',
      photoKey: 'muniz',
    },
    {
      quote:
        'La didáctica y el nivel de detalle son únicos en español. Se nota que sabe exactamente qué hace que una técnica funcione.',
      name: 'Lionel Liendo',
      role: 'GF Team — Tucumán, Argentina',
      photoKey: 'liendo',
    },
    {
      quote:
        'Compré pensando que era solo para competidores, pero le sirve a cualquier persona que quiera entender el porqué de cada movimiento. Ahora entreno con más confianza.',
      name: 'Martín Sosa',
      role: 'Cinturón azul — Club BJJ Córdoba',
      photoKey: 'sosa',
    },
    {
      quote:
        'Los videos son cortos pero están llenos de detalle. En 4 minutos aprendí más que en clases enteras de otros lados.',
      name: 'Carla Puentes',
      role: 'Cinturón morado — Garage BJJ, Bogotá',
      photoKey: 'puentes',
    },
  ],
}

export const LEAD_CAPTURE = {
  kicker: 'Técnica de la semana',
  title: 'Te mando una técnica nueva cada semana, gratis',
  subtitle:
    'Un video completo a tu email cada semana, igual a los que publico en la biblioteca. Sin spam, cancelás cuando quieras.',
  placeholder: 'Tu email',
  button: 'Quiero mi técnica semanal',
  privacy: 'Sin spam. Sin compartir tu email. Cancelás cuando quieras.',
  success: 'Listo. Revisá tu bandeja de entrada: te acaba de llegar el primer video.',
}

export const COMPARISON = {
  kicker: 'Elegí según tu objetivo',
  title: 'Membresía vs. Cursos',
  subtitle: 'Los dos te dan acceso de por vida. La diferencia es cuánto querés cubrir.',
  rows: [
    { feature: 'Videos incluidos', membership: '118 videos (8 sistemas)', course: '1 video (1 tema)' },
    { feature: 'Cobertura', membership: 'Todo tu juego de pie a guardia', course: 'Un punto puntual' },
    { feature: 'Actualizaciones', membership: 'Videos nuevos cada semana', course: 'No incluidos' },
    { feature: 'Descuento en cursos', membership: '15% off permanente', course: 'N/A' },
    { feature: 'Precio', membership: '$29,000/mes', course: 'Desde $29,900 pago único' },
    { feature: 'Ideal para', membership: 'Mejora continua', course: 'Necesitás algo específico HOY' },
  ],
}

export const QUALIFYING = {
  kicker: 'Para quién es esto',
  title: 'Esto es para vos si...',
  yes: [
    'Querés entender el porqué de cada movimiento, no solo copiar',
    'Entrenás nogi o querés empezar con seriedad',
    'Tu español es tu idioma principal y aprendés mejor así',
    'Querés contenido probado en competencia de alto nivel',
  ],
  noTitle: 'Esto NO es para vos si...',
  no: [
    'Buscás videos largos de 30+ minutos sin edición',
    'Querés entrenar solo con gi (el foco es nogi)',
    'No te gusta invertir en tu entrenamiento',
    'Querés contenido sin estructura ni progresión',
  ],
}

export const CONTENT_LIBRARY = {
  kicker: 'Biblioteca completa',
  title: '8 sistemas, 118 videos',
  subtitle: 'Cada área tiene un sistema completo, no técnicas sueltas.',
  areas: [
    { icon: '🛡️', name: 'Guardia', count: 18 },
    { icon: '⚔️', name: 'Pasaje de guardia', count: 16 },
    { icon: '🔒', name: 'Finalizaciones', count: 22 },
    { icon: '🥊', name: 'Juego de pie', count: 12 },
    { icon: '🏃', name: 'Escapes', count: 14 },
    { icon: '👑', name: 'Posiciones dominantes', count: 15 },
    { icon: '🤼', name: 'Análisis de lucha', count: 10 },
    { icon: '🔥', name: 'Sparring', count: 11 },
  ],
}

export const FAQ_ITEMS = [
  {
    q: '¿Hay reembolso?',
    a: 'Sí. Los cursos individuales tienen reembolso a los 7 días si no accediste al contenido. La membresía la cancelás cuando querés, desde tu cuenta, y seguís teniendo acceso hasta el fin del período pagado.',
  },
  {
    q: '¿Esto sirve con gi o solo nogi?',
    a: 'El contenido está orientado a nogi y competencia, que es donde entreno y compito. La mayoría de los sistemas aplican también con gi, pero el foco es nogi.',
  },
  {
    q: '¿Desde qué países puedo acceder y con qué pagos?',
    a: 'Desde cualquier país. En pesos argentinos pagás con MercadoPago; en dólares, con Stripe. El sitio además te deja elegir la moneda.',
  },
  {
    q: '¿En qué dispositivos puedo ver los videos?',
    a: 'En todos: celular, tablet y computadora. Los videos están protegidos y solo los ves con tu cuenta.',
  },
  {
    q: '¿Cuánto duran los videos?',
    a: 'En promedio 4 minutos. Van directo al punto, sin relleno. Cada video explica un concepto o técnica con todo el detalle necesario para que lo puedas aplicar en tu entrenamiento.',
  },
  {
    q: '¿Puedo descargar los videos?',
    a: 'No, los videos se ven streaming desde la plataforma. Esto protege el contenido y nos permite agregar videos nuevos sin costo extra para vos.',
  },
  {
    q: '¿Qué pasa si tengo un problema técnico?',
    a: 'Respondemos por email en menos de 24 horas. Si algo no funciona con tu cuenta o tu acceso, lo resolvemos rápido.',
  },
  {
    q: '¿Puedo saltarme clases o ver en cualquier orden?',
    a: 'Sí. Los 8 sistemas son independientes. Podés empezar por el que más te interese y avanzar a tu ritmo. No hay orden obligatorio.',
  },
]

export const FINAL_CTA = {
  title: 'Mirá tres videos completos antes de decidir nada',
  subtitle:
    'Sin cuenta, sin tarjeta, sin email. Si te sirven, ya sabés dónde está el resto.',
  cta: 'Ver los 3 videos gratis',
}

export const CHECKOUT = {
  title: 'Finalizá tu compra',
  subtitle: 'Demo de checkout — la integración real se conecta acá.',
  payTitle: 'Métodos de pago',
  payMethods: ['MercadoPago (ARS)', 'Stripe (USD)'],
  cta: 'Finalizar (demo)',
  guaranteeLabel: 'Garantía',
  closeLabel: 'Cerrar',
  note: 'Demo visual sin cobro real. En producción, este modal se reemplaza por el checkout de MercadoPago/Stripe.',
}

export const FOOTER = {
  brand: 'Jiu Jitsu en Español',
  tagline: 'El jiu-jitsu de élite, explicado en tu idioma.',
  social: [
    { label: 'Instagram', value: '@ramiroleonjj', href: 'https://instagram.com/ramiroleonjj' },
    { label: 'Email', value: 'hola@jiujitsuenespanol.com', href: 'mailto:hola@jiujitsuenespanol.com' },
  ],
  links: [
    { label: 'Videos gratis', href: '#gratis' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Membresía', href: '#membresia' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Términos y condiciones', href: `${import.meta.env.BASE_URL}terminos.html` },
    { label: 'Política de privacidad', href: `${import.meta.env.BASE_URL}privacidad.html` },
    { label: 'Defensa del Consumidor', href: 'https://www.argentina.gob.ar/produccion/defensadelconsumidor' },
  ],
}