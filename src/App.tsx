import { 
  Smartphone, 
  Cpu, 
  Battery, 
  Wrench, 
  ShieldCheck, 
  Zap, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Mail
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    title: 'Troca de Tela',
    description: 'Substituição de displays com tecnologia original e garantia de cores e touch.',
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: 'Reparo em Placas',
    description: 'Micro soldagem avançada para problemas críticos de inicialização e curto-circuito.',
    icon: <Cpu className="w-8 h-8" />
  },
  {
    title: 'Baterias',
    description: 'Troca imediata com células de alta performance e ciclos preservados.',
    icon: <Battery className="w-8 h-8" />
  },
  {
    title: 'Limpeza Técnica',
    description: 'Desoxidação e limpeza interna para evitar superaquecimento e corrosão.',
    icon: <Wrench className="w-8 h-8" />
  }
];

const DIFFERENTIALS = [
  {
    title: 'Garantia Estendida',
    desc: 'Certificado de garantia em todos os serviços realizados.',
    icon: <ShieldCheck className="w-6 h-6 text-brand" />
  },
  {
    title: 'Peças Premium',
    desc: 'Trabalhamos apenas com componentes de alta qualidade.',
    icon: <Zap className="w-6 h-6 text-brand" />
  },
  {
    title: 'Orçamento em 15min',
    desc: 'Agilidade no diagnóstico para você não ficar desconectado.',
    icon: <Clock className="w-6 h-6 text-brand" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand flex items-center justify-center rounded-sm">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase">FIXED <span className="text-brand">MOBILE</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['Serviços', 'Garantia', 'Unidades'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-semibold text-[#888] hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://wa.me/55000000000" 
              className="bg-brand hover:bg-brand/90 text-white px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full flex items-center gap-3 transition-colors shadow-lg"
            >
              <div className="bg-white text-brand p-1 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </div>
              Orçamento
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
            >
              {['Serviços', 'Garantia', 'Unidades'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-[#888] hover:text-white uppercase tracking-[0.2em]"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-48 pb-24 px-6 overflow-hidden bg-[#0A0A0A]"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.95)), url('https://jobway.com.br/wp-content/uploads/2023/11/post-5-assistencia-celular-1024x631.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="text-brand text-xs font-bold tracking-[0.3em] uppercase"
              >
                Assistência Especializada
              </motion.div>
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight uppercase"
              >
                AGILIDADE <br/>TÉCNICA. <br/>CONFIANÇA <span className="text-brand">TOTAL.</span>
              </motion.h1>
            </div>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-lg text-[#888] max-w-md leading-relaxed font-medium"
            >
              Reparos avançados em dispositivos móveis com precisão industrial e componentes de alta performance.
            </motion.p>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <a 
                href="#contato"
                className="bg-brand hover:bg-brand/90 text-white px-10 py-5 text-sm font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-4 uppercase rounded-full shadow-lg"
              >
                <div className="bg-white text-brand p-1.5 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </div>
                Solicitar Orçamento
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {SERVICES.map((service, idx) => (
              <div 
                key={idx}
                className="bg-[#141414] border border-[#222] p-8 flex flex-col justify-between aspect-square hover:border-brand/50 transition-colors group"
                style={{ borderRadius: '2px' }}
              >
                <div className="text-brand group-hover:scale-110 transition-transform origin-top-left">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-tighter mb-1">{service.title}</h3>
                  <p className="text-[10px] text-[#666] uppercase tracking-widest leading-tight">
                    {idx === 0 ? "Original Display" : 
                     idx === 1 ? "Microssoldagem" : 
                     idx === 2 ? "Saúde 100%" : "Ultrassônica"}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentials Horizontal */}
      <motion.section 
        id="garantia" 
        className="border-t border-[#222] py-20 px-6 bg-[#141414]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
          {DIFFERENTIALS.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="flex gap-6 items-start"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="w-12 h-12 border border-[#333] flex items-center justify-center text-brand" style={{ borderRadius: '1px' }}>
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-2">{item.title}</h4>
                <p className="text-[#666] text-[11px] uppercase tracking-widest leading-loose max-w-[200px]">
                  {idx === 0 ? "Até 12 meses" : 
                   idx === 1 ? "Peças Certificadas" : "Express Repair"}
                </p>
              </div>
            </motion.div>
          ))}
          <motion.div 
            className="flex flex-col justify-end text-right ml-auto hidden lg:flex"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
          >
            <span className="text-[10px] text-[#444] uppercase tracking-[0.4em] mb-2 font-bold">Localização</span>
            <p className="text-xs font-medium uppercase text-[#888] tracking-widest">Av. Paulista, 1000 • São Paulo, SP</p>
            <p className="text-xs font-bold text-white mt-1 uppercase tracking-[0.1em]">+55 11 98765-4321</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid (Main Features) */}
      <section id="serviços" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <div className="space-y-6">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="w-16 h-1 bg-brand" />
                <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl font-black uppercase tracking-tight leading-none">Laboratório <br/>Técnico <br/>Especializado</motion.h2>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-[#888] text-lg font-medium leading-relaxed max-w-md">
                  Utilizamos insumos industriais e equipamentos de certificação internacional para garantir a integridade total do seu dispositivo.
                </motion.p>
              </div>
              
              <div className="grid gap-10">
                {SERVICES.map((service, idx) => (
                  <motion.div key={idx} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex gap-8 group">
                    <div className="text-brand shrink-0 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold uppercase tracking-tight">{service.title}</h3>
                      <p className="text-[#666] text-sm leading-relaxed max-w-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              {/* Efeito de sombras tipo nuvens azuis */}
              <div className="absolute -inset-16 bg-brand/30 blur-[80px] rounded-full opacity-90" />
              <div className="absolute -inset-4 bg-[#0055FF]/40 blur-3xl opacity-70" />
              
              <div className="relative shadow-[0_0_60px_rgba(0,85,255,0.4)] rounded-sm">
                 <img 
                  src="https://atencell.com.br/wp-content/uploads/2021/07/conserto1.jpg" 
                  alt="Microscópio Eletrônico" 
                  className="w-full relative z-10 brightness-105 rounded-sm opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Localization & Contact */}
      <section id="unidades" className="py-32 px-6 border-t border-[#222]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4">Proximidade</div>
            <h2 className="text-5xl font-black uppercase tracking-tight mb-12">Onde Nos <br/>Encontrar</h2>
            <div className="aspect-video bg-[#141414] border border-[#222] relative overflow-hidden grayscale" style={{ borderRadius: '2px' }}>
              <div className="absolute inset-0 grid-bg opacity-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-6 bg-brand/20 animate-pulse rounded-full" />
                  <div className="w-12 h-12 bg-brand flex items-center justify-center rounded-sm">
                    <MapPin className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-sm font-bold uppercase tracking-widest">Unidade Central</p>
              <p className="text-[#888] text-sm uppercase tracking-widest leading-relaxed">Av. Paulista, 1000 • Conj 42 • São Paulo, SP</p>
            </div>
          </motion.div>

          <motion.div 
            id="contato" 
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl font-black uppercase tracking-tight mb-12">Fale com <br/>um Técnico</motion.h2>
            <div className="space-y-12">
              <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex gap-8 group">
                <div className="w-14 h-14 border border-[#333] flex items-center justify-center text-brand shrink-0 group-hover:border-brand/40 transition-colors" style={{ borderRadius: '1px' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#444] uppercase tracking-[0.4em] mb-2">WhatsApp Técnico</div>
                  <div className="text-3xl font-black tracking-tight">+55 11 99999-9999</div>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex gap-8 group">
                <div className="w-14 h-14 border border-[#333] flex items-center justify-center text-brand shrink-0 group-hover:border-brand/40 transition-colors" style={{ borderRadius: '1px' }}>
                  <Instagram size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#444] uppercase tracking-[0.4em] mb-2">Social Hub</div>
                  <div className="flex gap-6 mt-2">
                    <a href="#" className="text-[#888] hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Instagram</a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex gap-8 group">
                <div className="w-14 h-14 border border-[#333] flex items-center justify-center text-brand shrink-0 group-hover:border-brand/40 transition-colors" style={{ borderRadius: '1px' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#444] uppercase tracking-[0.4em] mb-2">E-mail Comercial</div>
                  <div className="text-xl font-bold tracking-tight text-[#888]">contato@empresa.com.br</div>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pt-4">
                <a 
                  href="https://wa.me/55000000000"
                  className="w-full bg-brand hover:bg-brand/90 text-white px-10 py-6 text-sm font-black tracking-[0.3em] transition-all flex items-center justify-center gap-4 uppercase shadow-2xl"
                  style={{ borderRadius: '2px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  Orçamento Prioritário
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-[#222] px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <Cpu className="text-black w-5 h-5" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase text-white">FIXED <span className="text-brand">MOBILE</span></span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] leading-loose max-w-sm">
              Centro de engenharia avançada em reparos de dispositivos móveis. Equipamentos calibrados e certificação técnica internacional.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-24">
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">Sitemap</h5>
              <ul className="space-y-2">
                {['Serviços', 'Unidades', 'Garantia', 'Carreiras'].map(item => (
                  <li key={item}><a href="#" className="text-[10px] uppercase tracking-widest text-[#666] hover:text-brand transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">Legal</h5>
              <ul className="space-y-2">
                {['Privacidade', 'Termos', 'Compliance'].map(item => (
                  <li key={item}><a href="#" className="text-[10px] uppercase tracking-widest text-[#666] hover:text-brand transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#222] flex justify-between items-center text-[9px] uppercase tracking-[0.5em] text-[#333]">
           <span>© 2024 Fixed Mobile Group.</span>
           <span>Precision Engineered Repairs.</span>
        </div>
      </footer>
    </div>
  );
}
