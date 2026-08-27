import { FREE_VIDEOS } from './content'

export const QUIZ = {
  kicker: 'Diagnóstico',
  title: 'Armá tu plan de entrenamiento',
  subtitle: 'Respondé 3 preguntas y te armo drills personalizados para tu nivel.',
  steps: ['Frecuencia', 'Nivel', 'Problema'],
}

export const QUESTIONS = [
  {
    id: 'frequency',
    question: '¿Cuántas veces por semana entrenás?',
    options: [
      { id: '1-2', label: '1-2 veces', icon: '🏋️' },
      { id: '3-4', label: '3-4 veces', icon: '💪' },
      { id: '5+', label: '5+ veces', icon: '🔥' },
    ],
  },
  {
    id: 'level',
    question: '¿Qué nivel sentís que tenés?',
    options: [
      { id: 'principiante', label: 'Principiante', desc: 'Menos de 1 año', icon: '🟢' },
      { id: 'intermedio', label: 'Intermedio', desc: '1-3 años', icon: '🟡' },
      { id: 'avanzado', label: 'Avanzado', desc: '3+ años', icon: '🔴' },
    ],
  },
  {
    id: 'problem',
    question: '¿Qué es lo que más te cuesta o te falla?',
    options: [
      { id: 'pasaje', label: 'Pasaje de guardia', icon: '➡️' },
      { id: 'guardia', label: 'Guardia / defensa desde abajo', icon: '🛡️' },
      { id: 'finalizaciones', label: 'Finalizaciones / sumisiones', icon: 'submission' },
      { id: 'pie', label: 'Juego de pie / derribos', icon: '🤼' },
      { id: 'escapes', label: 'Escapes de posiciones dominantes', icon: '🔄' },
    ],
  },
]

const DRILL_IMAGES = {
  pasaje: [
    'https://images.pexels.com/photos/8611942/pexels-photo-8611942.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/11391876/pexels-photo-11391876.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/15545735/pexels-photo-15545735.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  guardia: [
    'https://images.pexels.com/photos/7676548/pexels-photo-7676548.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6005463/pexels-photo-6005463.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/38759490/pexels-photo-38759490.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  finalizaciones: [
    'https://images.pexels.com/photos/16552800/pexels-photo-16552800.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6005463/pexels-photo-6005463.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/11391876/pexels-photo-11391876.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  pie: [
    'https://images.pexels.com/photos/32610333/pexels-photo-32610333.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/13808098/pexels-photo-13808098.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/30180713/pexels-photo-30180713.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  escapes: [
    'https://images.pexels.com/photos/6253172/pexels-photo-6253172.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/32610333/pexels-photo-32610333.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/38759490/pexels-photo-38759490.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
}

const FREE_EMBED = FREE_VIDEOS.videos[0].embedUrl

export const DRILLS = {
  pasaje: {
    principiante: [
      { title: 'Bodylock desde laѲ half guard', description: 'El sistema fundamental para pasar con presión. Dominá el control del cinturón antes de intentar cualquier pase.', duration: '4:22', embedUrl: FREE_EMBED, image: DRILL_IMAGES.pasaje[0], free: true },
      { title: 'Pasaje por underhook', description: 'El underhook es la herramienta más versátil para pasar. Aprendé a crear ángulos y controlar la cadera.', duration: '5:10', embedUrl: null, image: DRILL_IMAGES.pasaje[1], free: false },
      { title: 'Torreando con control de muñeca', description: 'Pase rápido que funciona cuando tu oponente busca grips. Controlá las muñecas y dirige las piernas.', duration: '3:48', embedUrl: null, image: DRILL_IMAGES.pasaje[2], free: false },
    ],
    intermedio: [
      { title: 'Bodylock desde laѲ half guard', description: 'El sistema fundamental para pasar con presión. Dominá el control del cinturón antes de intentar cualquier pase.', duration: '4:22', embedUrl: FREE_EMBED, image: DRILL_IMAGES.pasaje[0], free: true },
      { title: 'Pase Knee Cut con adjuste', description: 'El knee cut es un pase de alto porcentaje. Aprendé los ajustes que lo hacen funcionar contra defensa activa.', duration: '5:30', embedUrl: null, image: DRILL_IMAGES.pasaje[1], free: false },
      { title: 'Back take desde side control', description: 'Cuando tu oponente se gira para escapar, tomale la espalda. Transiciones fluidas de control dominante.', duration: '4:55', embedUrl: null, image: DRILL_IMAGES.pasaje[2], free: false },
    ],
    avanzado: [
      { title: 'Bodylock desde laѲ half guard', description: 'El sistema fundamental para pasar con presión. Dominá el control del cinturón antes de intentar cualquier pase.', duration: '4:22', embedUrl: FREE_EMBED, image: DRILL_IMAGES.pasaje[0], free: true },
      { title: 'Pase stacking con finish', description: 'Contra guardia invertida y guardia de rodilla. Presión vertical que termina en side control o mount.', duration: '6:15', embedUrl: null, image: DRILL_IMAGES.pasaje[1], free: false },
      { title: 'Leg drag al back take', description: 'Secuencia avanzada: leg drag → back take. El mismo sistema que uso en ADCC contra oponentes de élite.', duration: '5:40', embedUrl: null, image: DRILL_IMAGES.pasaje[2], free: false },
    ],
  },
  guardia: {
    principiante: [
      { title: 'Reconociendo distancias desde la guardia', description: 'La base de todo juego de guardia: entender las 3 distancias y cuándo atacar o defender.', duration: '4:24', embedUrl: FREE_EMBED, image: DRILL_IMAGES.guardia[0], free: true },
      { title: 'Hooks básicos desde closed guard', description: 'Los grips y hooks que necesitás para controlar a tu oponente desde guardia cerrada.', duration: '4:10', embedUrl: null, image: DRILL_IMAGES.guardia[1], free: false },
      { title: 'Sweep básico de cadera', description: 'El sweep más fundamental del jiu-jitsu. Funciona contra oponentes que presionan hacia adelante.', duration: '3:55', embedUrl: null, image: DRILL_IMAGES.guardia[2], free: false },
    ],
    intermedio: [
      { title: 'Reconociendo distancias desde la guardia', description: 'La base de todo juego de guardia: entender las 3 distancias y cuándo atacar o defender.', duration: '4:24', embedUrl: FREE_EMBED, image: DRILL_IMAGES.guardia[0], free: true },
      { title: 'Guardia de mariposa activa', description: 'Hooks activos, ángulos y ofensiva desde guardia de mariposa. El sistema que usan los mejores del mundo.', duration: '5:20', embedUrl: null, image: DRILL_IMAGES.guardia[1], free: false },
      { title: 'X-guard entry desde half', description: 'Transición de half guard a X-guard para sweeps de alto porcentaje.', duration: '4:45', embedUrl: null, image: DRILL_IMAGES.guardia[2], free: false },
    ],
    avanzado: [
      { title: 'Reconociendo distancias desde la guardia', description: 'La base de todo juego de guardia: entender las 3 distancias y cuándo atacar o defender.', duration: '4:24', embedUrl: FREE_EMBED, image: DRILL_IMAGES.guardia[0], free: true },
      { title: 'Guardia invertida + kiss of the dragon', description: 'Sistema de guardia invertida para back takes y sweeps. Nivel de competencia.', duration: '5:50', embedUrl: null, image: DRILL_IMAGES.guardia[1], free: false },
      { title: 'Berimbolo desde De La Riva', description: 'La secuencia completa: DLR → berimbolo → back take. El sistema que revolucionó el deporte.', duration: '6:30', embedUrl: null, image: DRILL_IMAGES.guardia[2], free: false },
    ],
  },
  finalizaciones: {
    principiante: [
      { title: '3 opciones desde la Dog Fight con overhook', description: 'Desde la posición de Dog Fight, tenés 3 caminos para finalizar. Elegí según la reacción de tu oponente.', duration: '2:36', embedUrl: FREE_EMBED, image: DRILL_IMAGES.finalizaciones[0], free: true },
      { title: 'Rear naked choke desde back', description: 'La finalización más básica y efectiva desde la espalda. Posición, control y squeeze.', duration: '4:00', embedUrl: null, image: DRILL_IMAGES.finalizaciones[1], free: false },
      { title: 'Armbar desde guardia', description: 'El armbar clásico desde guardia cerrada. Grips, ángulo y ejecución paso a paso.', duration: '4:30', embedUrl: null, image: DRILL_IMAGES.finalizaciones[2], free: false },
    ],
    intermedio: [
      { title: '3 opciones desde la Dog Fight con overhook', description: 'Desde la posición de Dog Fight, tenés 3 caminos para finalizar. Elegí según la reacción de tu oponente.', duration: '2:36', embedUrl: FREE_EMBED, image: DRILL_IMAGES.finalizaciones[0], free: true },
      { title: 'Guillotina desde front headlock', description: 'La guillotina es la sumisión más versátil nogi. Aprendé las variantes que funcionan en sparring.', duration: '5:15', embedUrl: null, image: DRILL_IMAGES.finalizaciones[1], free: false },
      { title: 'Kimura desde side control', description: 'Control → kimura → finish. La secuencia que abre puertas a otros ataques.', duration: '4:40', embedUrl: null, image: DRILL_IMAGES.finalizaciones[2], free: false },
    ],
    avanzado: [
      { title: '3 opciones desde la Dog Fight con overhook', description: 'Desde la posición de Dog Fight, tenés 3 caminos para finalizar. Elegí según la reacción de tu oponente.', duration: '2:36', embedUrl: FREE_EMBED, image: DRILL_IMAGES.finalizaciones[0], free: true },
      { title: 'Heelhook desde ashi garami', description: 'El heelhook es la sumisión más peligrosa del nogi. Entrada, control y finish con seguridad.', duration: '5:45', embedUrl: null, image: DRILL_IMAGES.finalizaciones[1], free: false },
      { title: 'Triangle desde arm drag', description: 'Secuencia avanzada: arm drag → triangle. El mismo sistema que uso en ADCC.', duration: '5:20', embedUrl: null, image: DRILL_IMAGES.finalizaciones[2], free: false },
    ],
  },
  pie: {
    principiante: [
      { title: 'Postura y base en standing', description: 'La base de todo juego de pie: postura correcta, base firme y balance.', duration: '4:15', embedUrl: FREE_EMBED, image: DRILL_IMAGES.pie[0], free: true },
      { title: 'Single leg básico', description: 'El derribo más fundamental. Nivel de cadera, drive y finish.', duration: '4:30', embedUrl: null, image: DRILL_IMAGES.pie[1], free: false },
      { title: 'Defensa de tackle y sprawl', description: 'Si no podés defender, no podés atacar. Sprawl y defensa de piernas.', duration: '3:50', embedUrl: null, image: DRILL_IMAGES.pie[2], free: false },
    ],
    intermedio: [
      { title: 'Postura y base en standing', description: 'La base de todo juego de pie: postura correcta, base firme y balance.', duration: '4:15', embedUrl: FREE_EMBED, image: DRILL_IMAGES.pie[0], free: true },
      { title: 'Arm drag a back take standing', description: 'El arm drag desde pie es devastador. Creá ángulo y tomale la espalda.', duration: '5:10', embedUrl: null, image: DRILL_IMAGES.pie[1], free: false },
      { title: 'Body lock takedown', description: 'El mismo body lock que uso para pasar, pero desde pie. Presión y control.', duration: '5:25', embedUrl: null, image: DRILL_IMAGES.pie[2], free: false },
    ],
    avanzado: [
      { title: 'Postura y base en standing', description: 'La base de todo juego de pie: postura correcta, base firme y balance.', duration: '4:15', embedUrl: FREE_EMBED, image: DRILL_IMAGES.pie[0], free: true },
      { title: 'Peekout y arm drag combinado', description: 'Secuencias de wrestling adaptadas al nogi. Nivel de competencia.', duration: '6:00', embedUrl: null, image: DRILL_IMAGES.pie[1], free: false },
      { title: 'Foot sweep timing', description: 'El foot sweep es subestimado. Timing, ángulo y ejecución.', duration: '5:35', embedUrl: null, image: DRILL_IMAGES.pie[2], free: false },
    ],
  },
  escapes: {
    principiante: [
      { title: 'Escape de mount básico', description: 'El escape de mount más fundamental:frame, cadera y regain de guardia.', duration: '4:05', embedUrl: FREE_EMBED, image: DRILL_IMAGES.escapes[0], free: true },
      { title: 'Escape de side control con underhook', description: 'Creá espacio con el underhook y recuperá posición. Base de todo escape.', duration: '4:20', embedUrl: null, image: DRILL_IMAGES.escapes[1], free: false },
      { title: 'Regain de guardia desde背部', description: 'Cuando tu oponente tiene tu espalda, hay formas de escapar. Fundamentos.', duration: '4:45', embedUrl: null, image: DRILL_IMAGES.escapes[2], free: false },
    ],
    intermedio: [
      { title: 'Escape de mount básico', description: 'El escape de mount más fundamental: frame, cadera y regain de guardia.', duration: '4:05', embedUrl: FREE_EMBED, image: DRILL_IMAGES.escapes[0], free: true },
      { title: 'Escape de back con trap', description: 'El escape de espalda más efectivo: trap una mano y girá.', duration: '5:10', embedUrl: null, image: DRILL_IMAGES.escapes[1], free: false },
      { title: 'Escapes de turtle', description: 'La turtle position no es segura. Aprendé a escapar y recuperar guardia.', duration: '4:55', embedUrl: null, image: DRILL_IMAGES.escapes[2], free: false },
    ],
    avanzado: [
      { title: 'Escape de mount básico', description: 'El escape de mount más fundamental: frame, cadera y regain de guardia.', duration: '4:05', embedUrl: FREE_EMBED, image: DRILL_IMAGES.escapes[0], free: true },
      { title: 'Escape de back avanzado', description: 'Sistemas de escape de espalda contra oponentes de nivel alto.', duration: '5:40', embedUrl: null, image: DRILL_IMAGES.escapes[1], free: false },
      { title: 'Scramble desde posiciones perdidas', description: 'El scramble es un arte. Cómo recuperar posición desde situaciones complicadas.', duration: '5:25', embedUrl: null, image: DRILL_IMAGES.escapes[2], free: false },
    ],
  },
}

export const SCHEDULES = {
  '1-2': {
    label: '2 sesiones por semana',
    days: [
      { day: 'Lunes', focus: 'Técnica', drills: [0, 1] },
      { day: 'Jueves', focus: 'Aplicación', drills: [2, -1] },
    ],
    note: 'En 2 sesiones, enfocá en los drills 1 y 2. El 3 es para aplicar en sparring.',
  },
  '3-4': {
    label: '3-4 sesiones por semana',
    days: [
      { day: 'Lunes', focus: 'Drill 1 + Drill 2', drills: [0, 1] },
      { day: 'Miércoles', focus: 'Drill 3 + Repaso', drills: [2, 0] },
      { day: 'Viernes', focus: 'Drills + Sparring', drills: [1, 2, -1] },
    ],
    note: 'Con 3+ sesiones, rotá los 3 drills y aplicá en sparring.',
  },
  '5+': {
    label: '5 sesiones por semana',
    days: [
      { day: 'Lunes', focus: 'Drill 1 + Drill 2', drills: [0, 1] },
      { day: 'Martes', focus: 'Drill 3 + Guardia', drills: [2, -2] },
      { day: 'Miércoles', focus: 'Drill 1 + Sparring', drills: [0, -1] },
      { day: 'Jueves', focus: 'Drill 2 + Drill 3', drills: [1, 2] },
      { day: 'Viernes', focus: 'Todos + Sparring', drills: [0, 1, 2, -1] },
    ],
    note: 'Con 5+ sesiones, podés rotar todos los drills y tener sparring dedicado.',
  },
}

export const AREA_LABELS = {
  pasaje: 'Pasaje de guardia',
  guardia: 'Guardia / defensa desde abajo',
  finalizaciones: 'Finalizaciones / sumisiones',
  pie: 'Juego de pie / derribos',
  escapes: 'Escapes de posiciones dominantes',
}

export function getDrillsForAnswers(answers) {
  const { problem, level } = answers
  const area = DRILLS[problem]
  if (!area) return []
  return area[level] || area.principiante
}

export function getScheduleForAnswers(answers) {
  return SCHEDULES[answers.frequency] || SCHEDULES['3-4']
}
