import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Megaphone, Users, Search, Mail, BarChart, 
  Palette, Code, Smartphone, ShoppingCart, Calendar, MessageCircle,
  TrendingUp, Target, Award, Zap
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Diseño Web Profesional",
      description: "Páginas web modernas y optimizadas que convierten visitantes en clientes",
      features: [
        "Diseño responsivo y adaptable",
        "Optimización SEO incluida",
        "Velocidad de carga ultrarrápida",
        "Integración con WordPress"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Marketing Digital Integral",
      description: "Estrategias completas para aumentar tu visibilidad y ventas online",
      features: [
        "Google Ads y Facebook Ads",
        "Email Marketing automatizado",
        "SEO y posicionamiento web",
        "Analítica y reportes mensuales"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Manager",
      description: "Gestión profesional de tus redes sociales para construir una comunidad activa",
      features: [
        "Contenido creativo diario",
        "Gestión de Instagram y Facebook",
        "Respuesta a comentarios y mensajes",
        "Reportes de crecimiento"
      ],
      color: "from-pink-500 to-rose-500",
      popular: false
    }
  ];

  const additionalServices = [
    { icon: <Search />, name: "SEO Avanzado", description: "Posicionamiento en Google" },
    { icon: <Mail />, name: "Email Marketing", description: "Campañas automatizadas" },
    { icon: <BarChart />, name: "Analytics", description: "Métricas y reportes" },
    { icon: <Palette />, name: "Branding", description: "Identidad visual completa" },
    { icon: <ShoppingCart />, name: "E-commerce", description: "Tiendas online" },
    { icon: <MessageCircle />, name: "Chatbots", description: "Atención 24/7" }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Servicios que Impulsan tu Negocio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soluciones Digitales
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              que Generan Resultados
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios integrales de marketing digital adaptados a las necesidades 
            y presupuesto de tu empresa. Todo lo que necesitas para triunfar online.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                  Más Popular
                </div>
              )}
              
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 h-full ${
                service.popular ? 'border-2 border-purple-200' : ''
              }`}>
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('#planes').scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all`}
                >
                  Ver Planes y Precios
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Servicios Complementarios
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mx-auto mb-3">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {service.name}
                </h4>
                <p className="text-xs text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                ¿Por qué elegirnos?
              </h3>
              <p className="text-white/90 mb-6">
                Somos la agencia digital que entiende las necesidades de las empresas chilenas. 
                Combinamos creatividad, tecnología y estrategia para impulsar tu crecimiento.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  <span>Resultados Medibles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  <span>Equipo Certificado</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6" />
                  <span>ROI Garantizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-5xl font-bold mb-2">+250%</div>
                <div className="text-xl">Aumento promedio en ventas</div>
                <div className="text-sm opacity-80 mt-2">en los primeros 6 meses</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;