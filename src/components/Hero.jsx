import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Users, Shield, ChevronRight } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: '500+', label: 'Clientes Felices' },
    { value: '98%', label: 'Satisfacción' },
    { value: '24/7', label: 'Soporte' },
    { value: '5⭐', label: 'Calificación' }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white -z-10" />
      
      {/* Animated Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute top-40 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Potencia tu Negocio Digital
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tu Web Profesional
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                + Marketing Digital
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Diseñamos páginas web que venden, estrategias de marketing que convierten 
              y gestionamos tus redes sociales para hacer crecer tu negocio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#planes').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Ver Planes y Precios
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-purple-200"
              >
                Solicitar Cotización
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>100% Garantizado</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>Soporte Dedicado</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <span>Resultados Medibles</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-white text-2xl font-bold mb-8 text-center">
                Resultados que Hablan por Sí Solos
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-white/90 text-center italic">
                  "Aumentamos nuestras ventas en un 250% en solo 3 meses"
                </p>
                <p className="text-white/70 text-center text-sm mt-2">
                  - María González, CEO TechStore
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg"
            >
              ¡Oferta Limitada!
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;