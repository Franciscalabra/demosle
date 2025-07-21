import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Clock, Send, MapPin, Loader2 } from 'lucide-react';
import { sendEmail, validateForm, formatWhatsAppNumber } from '../utils/emailService';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    servicio: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Formatear número de WhatsApp mientras escribe
    if (name === 'whatsapp') {
      // Permitir solo números y algunos caracteres de formato
      const cleanValue = value.replace(/[^\d\+\-\(\)\s]/g, '');
      setFormData({ ...formData, [name]: cleanValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Limpiar mensajes anteriores
    setSubmitMessage(null);
    setIsSubmitting(true);
    
    // Validar formulario
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      // Scroll al primer error
      const firstError = document.querySelector('.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    // Enviar email
    const result = await sendEmail(formData);
    
    if (result.success) {
      setSubmitMessage({ 
        type: 'success', 
        text: result.message 
      });
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        whatsapp: '',
        servicio: '',
        mensaje: ''
      });
      setFormErrors({});
      
      // Scroll al mensaje de éxito
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Track conversión si tienes Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
          'event_category': 'engagement',
          'event_label': formData.servicio
        });
      }
    } else {
      setSubmitMessage({ 
        type: 'error', 
        text: result.message 
      });
    }
    
    setIsSubmitting(false);
  };

  // WhatsApp directo con mensaje predefinido
  const handleWhatsAppClick = () => {
    const message = `Hola! Vi su sitio web y me gustaría información sobre sus servicios.`;
    const whatsappUrl = `https://wa.me/56942740261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Hablemos de hacer <span className="highlight">crecer tu negocio</span></h1>
          <p>Sin compromiso, sin chamuyo. Solo una charla honesta sobre tu potencial digital.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Contanos tu desafío</h2>
              <p className="form-intro">
                Completá el form o escribinos directo al WhatsApp. Lo que te sea más cómodo. 
                Respondemos en menos de 24hs (en general, mucho menos 😉).
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {submitMessage && (
                  <div className={`submit-message ${submitMessage.type}`}>
                    {submitMessage.text}
                  </div>
                )}
                
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre *"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className={formErrors.nombre ? 'error' : ''}
                      disabled={isSubmitting}
                    />
                    {formErrors.nombre && <span className="error-text">{formErrors.nombre}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={formErrors.email ? 'error' : ''}
                      disabled={isSubmitting}
                    />
                    {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp (9 1234 5678) *"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      className={formErrors.whatsapp ? 'error' : ''}
                      disabled={isSubmitting}
                    />
                    {formErrors.whatsapp && <span className="error-text">{formErrors.whatsapp}</span>}
                  </div>
                  <div className="form-group">
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      required
                      className={formErrors.servicio ? 'error' : ''}
                      disabled={isSubmitting}
                    >
                      <option value="">Servicio de interés *</option>
                      <option value="Community Manager">Community Manager</option>
                      <option value="Página Web">Página Web</option>
                      <option value="Estrategia Creativa">Estrategia Creativa</option>
                      <option value="Combo de servicios">Combo de servicios</option>
                      <option value="No estoy seguro">No estoy seguro</option>
                    </select>
                    {formErrors.servicio && <span className="error-text">{formErrors.servicio}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <textarea
                    name="mensaje"
                    placeholder="Contanos sobre tu proyecto... *"
                    rows="6"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className={formErrors.mensaje ? 'error' : ''}
                    disabled={isSubmitting}
                  ></textarea>
                  {formErrors.mensaje && <span className="error-text">{formErrors.mensaje}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <h3>Preferís WhatsApp? Dale! 💬</h3>
                <p>Para respuestas rápidas y consultas urgentes. Estamos online de Lun-Vie 9-19hs.</p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="whatsapp-button"
                >
                  <MessageCircle size={20} />
                  +569 4274 0261
                </button>
              </div>

              <div className="info-card purple-card">
                <h3>Por qué elegirnos 🚀</h3>
                <ul className="benefits-list">
                  <li>Sin contratos forzosos - Mes a mes, seguís si ves resultados</li>
                  <li>Reuniones que valen la pena - Directo al grano, sin perder tiempo</li>
                  <li>Reportes que entendés - Métricas claras, sin palabrerío técnico</li>
                  <li>Equipo senior - Trabajás con profesionales, no pasantes</li>
                  <li>Resultados garantizados - Si no funciona, pivotamos hasta que funcione</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Información de contacto</h3>
                <div className="contact-methods">
                  <div className="contact-method">
                    <Mail size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:hola@demosle.cl">hola@demosle.cl</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <Phone size={20} />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <a href="tel:+56942740261">+569 4274 0261</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <MapPin size={20} />
                    <div>
                      <p className="font-semibold">Ubicación</p>
                      <p>Santiago, Chile</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <Clock size={20} />
                    <div>
                      <p className="font-semibold">Horario</p>
                      <p>Lun-Vie 9:00 - 19:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Preguntas <span className="highlight">frecuentes</span></h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>¿Cuánto tiempo hasta ver resultados?</h3>
              <p>Cambios visibles desde la primera semana. Resultados medibles al mes. 
              Transformación completa a los 90 días. Todo documentado 📊</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Trabajan con negocios chicos?</h3>
              <p>Nuestro cliente ideal factura entre 100k y 10M al mes. Si estás abajo de eso, 
              tenemos planes starter. Si estás arriba, tenemos equipo senior dedicado.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Qué los diferencia de otros CM?</h3>
              <p>Experiencia real + certificaciones + obsesión por vender. No somos los que 
              aprendieron en YouTube. Somos los que enseñan en YouTube 💪</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Puedo cancelar cuando quiera?</h3>
              <p>Por supuesto. Sin letra chica, sin penalizaciones. Si no sumamos, 
              mejor separarnos como amigos 🤝</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Cómo funciona el proceso?</h3>
              <p>1. Charla inicial gratis 2. Propuesta personalizada 3. Aprobación 
              4. Kickoff meeting 5. Manos a la obra 6. Resultados y optimización continua</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Incluyen capacitación?</h3>
              <p>Sí! Te enseñamos a usar todas las herramientas. Queremos que entiendas 
              lo que hacemos y por qué funciona. Transparencia total 🎯</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;