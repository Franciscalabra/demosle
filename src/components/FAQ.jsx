import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma crear mi página web?",
      answer: "El tiempo depende del plan que elijas. Para el plan Starter, entregamos tu sitio web profesional en 7 días hábiles. Los planes Growth y Scale pueden tomar entre 10-15 días debido a las funcionalidades adicionales. Si necesitas algo urgente, ofrecemos servicio express con un cargo adicional."
    },
    {
      question: "¿Qué incluye el servicio de Community Manager?",
      answer: "Nuestro servicio de Community Manager incluye: creación de contenido original (posts, stories, reels), gestión diaria de tus redes sociales, respuesta a comentarios y mensajes, estrategia de crecimiento, calendario editorial mensual, y reportes detallados de rendimiento. Trabajamos principalmente con Instagram, Facebook y LinkedIn."
    },
    {
      question: "¿Los precios incluyen el hosting y dominio?",
      answer: "Sí, todos nuestros planes incluyen hosting premium por el primer año con SSL gratuito, backups automáticos y 99.9% de uptime. El dominio puede ser adquirido con nosotros ($9.990/año para .cl) o puedes usar uno que ya tengas. Después del primer año, el hosting tiene un costo de $39.990/año."
    },
    {
      question: "¿Puedo modificar el contenido de mi sitio web después?",
      answer: "¡Por supuesto! Todos nuestros sitios incluyen un panel de administración fácil de usar donde podrás cambiar textos, imágenes, colores y agregar nuevo contenido sin necesidad de conocimientos técnicos. Además, incluimos un tutorial personalizado y soporte continuo para ayudarte."
    },
    {
      question: "¿Qué garantías ofrecen?",
      answer: "Ofrecemos una garantía de satisfacción de 30 días. Si no estás conforme con el resultado, te devolvemos el 100% de tu dinero. Además, garantizamos que tu sitio estará optimizado para SEO, será 100% responsivo y tendrá una velocidad de carga superior al 90% según Google PageSpeed."
    },
    {
      question: "¿Cómo funciona el marketing digital?",
      answer: "Creamos una estrategia personalizada que puede incluir: Google Ads para aparecer primero en búsquedas, Facebook e Instagram Ads para llegar a tu público objetivo, SEO para mejorar tu posicionamiento orgánico, y email marketing para fidelizar clientes. Todo con métricas claras y reportes mensuales de ROI."
    },
    {
      question: "¿Trabajan con todo tipo de empresas?",
      answer: "Sí, trabajamos con emprendedores, PyMEs y grandes empresas de todos los rubros. Tenemos experiencia en e-commerce, servicios profesionales, restaurantes, salud, educación, y más. Adaptamos nuestras estrategias a las necesidades específicas de cada industria."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencias bancarias, tarjetas de crédito/débito, y pagos a través de Mercado Pago. Para los planes mensuales, puedes optar por pago automático con tarjeta. También ofrecemos la opción de pagar en 3 cuotas sin interés para proyectos sobre $500.000."
    },
    {
      question: "¿Qué pasa si necesito soporte técnico?",
      answer: "Todos nuestros clientes tienen acceso a soporte técnico prioritario. El plan Starter incluye soporte por email (respuesta en 24hrs), mientras que los planes Growth y Scale tienen soporte por WhatsApp con respuesta en menos de 2 horas. También ofrecemos videollamadas de soporte cuando es necesario."
    },
    {
      question: "¿Pueden integrar mi sitio con otros sistemas?",
      answer: "Sí, somos expertos en integraciones. Podemos conectar tu sitio con CRM (HubSpot, Salesforce), sistemas de pago (Transbank, PayPal, MercadoPago), herramientas de email marketing (Mailchimp, SendGrid), calendarios de reservas, y cualquier otro sistema que uses mediante APIs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Resolvemos tus Dudas
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre nuestros servicios. 
            Si tienes más preguntas, no dudes en contactarnos.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Aún tienes preguntas?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Contactar Ahora
              </motion.button>
              
              <motion.a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;