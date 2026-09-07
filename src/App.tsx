import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Phone, MapPin, Clock, Star, ChevronRight, 
  Shield, Cpu, Heart, CreditCard, MessageCircle,
  Sparkles, Award, Users, Zap, CheckCircle, ArrowRight,
  Calendar, Mail, Send, ChevronDown, ChevronUp, Play,
  Stethoscope, Smile, Baby, AlertTriangle, Scissors, Activity
} from 'lucide-react'

// =========================================
// DATA
// =========================================

const servicios = [
  { icon: Stethoscope, titulo: 'Odontología General', desc: 'Chequeos completos, limpiezas profilácticas y diagnóstico digital para mantener tu sonrisa saludable.', color: 'from-blue-500 to-cyan-500' },
  { icon: Smile, titulo: 'Ortodoncia', desc: 'Brackets tradicionales y alineadores invisibles para alinear tu sonrisa con la última tecnología.', color: 'from-emerald-500 to-teal-500' },
  { icon: Sparkles, titulo: 'Estética Dental', desc: 'Blanqueamiento profesional y carillas de porcelana/resina para una sonrisa deslumbrante.', color: 'from-amber-500 to-orange-500' },
  { icon: Zap, titulo: 'Implantología', desc: 'Implantes de titanio de carga inmediata con planificación 3D para rehabilitación completa.', color: 'from-purple-500 to-pink-500' },
  { icon: Activity, titulo: 'Endodoncia', desc: 'Tratamiento de conducto indoloro con microscopio operatorio y limas rotatorias de níquel-titanio.', color: 'from-red-500 to-rose-500' },
  { icon: Baby, titulo: 'Odontopediatría', desc: 'Atención infantil especializada en ambiente lúdico. Primera visita sin miedo, ¡diversión garantizada!', color: 'from-pink-500 to-fuchsia-500' },
  { icon: Heart, titulo: 'Periodoncia', desc: 'Cuidado avanzado de encías con láser diodo y raspado ultrasónico. Adiós al sangrado y la inflamación.', color: 'from-indigo-500 to-blue-500' },
  { icon: AlertTriangle, titulo: 'Urgencias 24/7', desc: 'Atención de emergencias dentales las 24 horas. Dolor, fractura, avulsión — estamos cuando nos necesitas.', color: 'from-yellow-500 to-amber-500' },
  { icon: Scissors, titulo: 'Cirugía Maxilofacial', desc: 'Extracción de cordales, quistes y cirugía oral menor con sedación consciente disponible.', color: 'from-cyan-500 to-blue-500' },
]

const pilares = [
  { icon: Cpu, titulo: 'Tecnología Avanzada', desc: 'Radiografía digital, escáner 3D intraoral y planificación computarizada para tratamientos precisos.' },
  { icon: Award, titulo: 'Equipo Especialista', desc: 'Odontólogos con +15 años de experiencia y formación continua en las técnicas más modernas.' },
  { icon: Heart, titulo: 'Atención Sin Dolor', desc: 'Técnicas mínimamente invasivas, sedación consciente y protocolos de confort para cero ansiedad.' },
  { icon: CreditCard, titulo: 'Financiamiento', desc: 'Planes de pago flexibles, aceptamos todas las tarjetas, seguros y convenios empresariales.' },
]

const testimonios = [
  { nombre: 'Carolina M.', tratamiento: 'Ortodoncia Invisible', texto: 'En 8 meses mi sonrisa cambió completamente. El proceso fue indoloro y el equipo siempre atento. ¡100% recomendado!', estrellas: 5, foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
  { nombre: 'Roberto S.', tratamiento: 'Implantes', texto: 'Tenía miedo de los implantes pero fue más simple que un empaste. Tecnología de otro nivel. Volvería sin dudar.', estrellas: 5, foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { nombre: 'María P.', tratamiento: 'Blanqueamiento', texto: 'Resultados visibles desde la primera sesión. Mis dientes se veen naturales y brillantes. La mejor inversión en mí.', estrellas: 5, foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
]

const faqs = [
  { q: '¿Aceptan seguros dentales y obras sociales?', a: 'Sí, trabajamos con los principales seguros y obras sociales. Consultá tu cobertura sin compromiso — muchas veces es mayor de lo que pensás.' },
  { q: '¿Qué hago en caso de urgencia dental fuera de horario?', a: 'Tenemos guardia 24/7. Llamá al +56 9 5061 7042 y te atenderemos de inmediato. Dolor, fractura, avulsión — estamos preparados.' },
  { q: '¿Los tratamientos duelen? Tengo mucho miedo al dentista', a: 'Entendemos tu miedo. Usamos técnicas mínimamente invasivas, anestesia tópica de última generación y ofrecemos sedación consciente. La mayoría de los pacientes dicen: "¿Ya terminó?"' },
  { q: '¿Cuánto cuesta una consulta y qué métodos de pago aceptan?', a: 'La primera consulta tiene valor desde $25.000 CLP. Aceptamos efectivo, todas las tarjetas, transferencia y ofrecemos planes de financiamiento en cuotas sin interés.' },
  { q: '¿Atienden niños? Mi hijo tiene pánico al dentista', a: '¡Claro! Nuestra área de odontopediatría está diseñada para que los niños se sientan seguros. Ambiente lúdico, premios y técnicas de adaptación gradual. La primera visita es una aventura.' },
]

// =========================================
// COMPONENTES
// =========================================

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Inicio', 'Nosotros', 'Servicios', 'Testimonios', 'Contacto']

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
            <Smile className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">DentalPro</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-slate-300 hover:text-white transition-colors relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+56950617042" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
            <Phone className="w-4 h-4" /> +56 9 5061 7042
          </a>
          <a href="#contacto" className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold text-white flex items-center gap-2">
            Agendar Cita <Calendar className="w-4 h-4" />
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="text-slate-300 hover:text-white py-2">{l}</a>
              ))}
              <a href="#contacto" className="btn-primary px-5 py-3 rounded-full text-sm font-semibold text-white text-center mt-2">Agendar Cita</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-slate-300">+500 pacientes satisfechos</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-shadow">
              Tu sonrisa merece{' '}
              <span className="gradient-text">lo mejor</span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              Tecnología de vanguardia, especialistas con +15 años de experiencia y un enfoque sin dolor. 
              Recuperá la confianza en tu sonrisa con los expertos.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://wa.me/56950617042" className="btn-whatsapp px-8 py-4 rounded-full font-semibold text-white flex items-center gap-3">
                <MessageCircle className="w-5 h-5" /> WhatsApp Directo
              </a>
              <a href="#servicios" className="px-8 py-4 rounded-full font-semibold text-white glass-light hover:bg-white/10 transition-all flex items-center gap-2">
                Ver Servicios <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-400">Atención sin dolor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-400">Tecnología 3D</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-400">Financiamiento</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glow-blue">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop" 
                alt="Clínica Dental Premium" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 glass rounded-2xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">100% Seguro</p>
                <p className="text-xs text-slate-400">Protocolos COVID</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Certificados</p>
                <p className="text-xs text-slate-400">+15 años exp.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function Nosotros() {
  return (
    <section id="nosotros" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">¿Por qué elegirnos?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Excelencia dental con <span className="gradient-text">calidez humana</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Desde 2009, combinamos tecnología de punta con un trato cercano y personalizado. 
            Nuestra misión: que cada paciente salga con una sonrisa y cero estrés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <p.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{p.titulo}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Servicios() {
  return (
    <section id="servicios" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Soluciones completas para tu <span className="gradient-text">salud dental</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Desde una limpieza hasta implantes complejos, tenemos la solución perfecta para vos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden card-hover group"
            >
              <div className={`h-2 bg-gradient-to-r ${s.color}`} />
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{s.desc}</p>
                <a href="https://wa.me/56950617042" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Agendar consulta <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Galeria() {
  const imagenes = [
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop', alt: 'Consultorio moderno' },
    { src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop', alt: 'Tecnología dental' },
    { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop', alt: 'Equipo especializado' },
    { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop', alt: 'Instalaciones premium' },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Nuestras Instalaciones</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Un espacio diseñado para tu <span className="gradient-text">confort</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {imagenes.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonios() {
  return (
    <section id="testimonios" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Testimonios</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Lo que dicen nuestros <span className="gradient-text">pacientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.estrellas)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed italic">"{t.texto}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img src={t.foto} alt={t.nombre} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-white">{t.nombre}</p>
                  <p className="text-sm text-slate-400">{t.tratamiento}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Preguntas Frecuentes</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Resolvemos tus <span className="gradient-text">dudas</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                {open === i ? <ChevronUp className="w-5 h-5 text-blue-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-slate-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contacto() {
  return (
    <section id="contacto" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Contacto</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Agenda tu <span className="gradient-text">cita hoy</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Primera consulta con evaluación digital incluida. Sin compromiso, sin presión.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre completo" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
                <input type="tel" placeholder="Teléfono" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <input type="email" placeholder="Correo electrónico" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 focus:outline-none focus:border-blue-500 transition-colors">
                <option value="">Servicio de interés</option>
                {servicios.map(s => <option key={s.titulo} value={s.titulo}>{s.titulo}</option>)}
              </select>
              <input type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 focus:outline-none focus:border-blue-500 transition-colors" />
              <textarea placeholder="Mensaje (opcional)" rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none" />
              <button type="submit" className="w-full btn-primary py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Enviar Solicitud
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Ubicación</h4>
                <p className="text-slate-400">Av. Providencia 1234, Of. 56, Providencia, Santiago</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Teléfono</h4>
                <p className="text-slate-400">+56 9 5061 7042</p>
                <p className="text-slate-400">+56 2 2345 6789</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Horario</h4>
                <p className="text-slate-400">Lun - Vie: 9:00 - 19:00</p>
                <p className="text-slate-400">Sáb: 9:00 - 14:00</p>
                <p className="text-emerald-400 font-medium mt-1">Urgencias 24/7: +56 9 5061 7042</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold text-white mb-4">Encontranos en el mapa</h4>
              <div className="rounded-xl overflow-hidden h-48 bg-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-400">Providencia, Santiago</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
              <Smile className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold gradient-text">DentalPro</span>
          </div>
          <p className="text-sm text-slate-500">© 2024 DentalPro. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacidad</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Términos</a>
            <a href="https://wa.me/56950617042" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// =========================================
// APP
// =========================================

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Galeria />
      <Testimonios />
      <FAQ />
      <Contacto />
      <Footer />
    </div>
  )
}
