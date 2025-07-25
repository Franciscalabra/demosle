import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Clock, Send, MapPin } from 'lucide-react';
import { sendEmail, validateForm } from '../utils/emailService';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    // Validar formulario
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }
    
    // Enviar email
    const result = await sendEmail(formData);
    
    if (result.success) {
      setSubmitMessage({ type: 'success', text: '¡Mensaje enviado! 🎉 Te contactaremos pronto.' });
      setFormData({
        nombre: '',
        email: '',
        whatsapp: '',
        servicio: '',
        mensaje: ''
      });
      setFormErrors({});
    } else {
      setSubmitMessage({ type: 'error', text: '¡Chuta! Algo salió mal. Intenta de nuevo o escríbenos al WhatsApp 🤔' });
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Hablemos de hacer <span className="highlight">crecer tu negocio</span></h1>
          <p>Sin compromiso, sin chamullo. Solo una conversación honesta sobre tu potencial digital.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Cuéntanos tu desafío</h2>
              <p className="form-intro">
                Completa el formulario o escríbenos directo al WhatsApp. Lo que te sea más cómodo. 
                Respondemos en menos de 24hs (en general, mucho menos 😉).
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
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
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className={formErrors.nombre ? 'error' : ''}
                    />
                    {formErrors.nombre && <span className="error-text">{formErrors.nombre}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      className={formErrors.whatsapp ? 'error' : ''}
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
                    >
                      <option value="">Servicio de interés</option>
                      <option value="community">Community Manager</option>
                      <option value="web">Página Web</option>
                      <option value="estrategia">Estrategia Creativa</option>
                      <option value="combo">Combo de servicios</option>
                      <option value="otro">No estoy seguro</option>
                    </select>
                    {formErrors.servicio && <span className="error-text">{formErrors.servicio}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <textarea
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows="6"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className={formErrors.mensaje ? 'error' : ''}
                  ></textarea>
                  {formErrors.mensaje && <span className="error-text">{formErrors.mensaje}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : (
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
                <h3>Contacto Inmediato 💬</h3>
                <p>Para respuestas rápidas y consultas urgentes.</p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <Mail size={24} />
                    <div>
                      <p className="contact-label">Email</p>
                      <a href="mailto:hola@demosle.cl" className="contact-link">
                        hola@demosle.cl
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <Phone size={24} />
                    <div>
                      <p className="contact-label">Teléfono</p>
                      <a href="tel:+56942740261" className="contact-link">
                        +569 4274 0261
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <MapPin size={24} />
                    <div>
                      <p className="contact-label">Ubicación</p>
                      <p className="contact-text">Santiago, Chile</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <Clock size={24} />
                    <div>
                      <p className="contact-label">Horario</p>
                      <p className="contact-text">Lun-Vie 9-19hs</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/56932252978" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <MessageCircle size={20} />
                  WhatsApp Directo
                </a>
              </div>

              <div className="info-card purple-card">
                <h3>Por qué elegirnos 🚀</h3>
                <ul className="benefits-list">
                  <li><strong>Sin contratos amarrados</strong> - Mes a mes, sigues si ves resultados</li>
                  <li><strong>Reuniones que valen la pena</strong> - Al grano, sin perder tiempo</li>
                  <li><strong>Reportes que entiendes</strong> - Métricas claras, sin palabrería técnica</li>
                  <li><strong>Equipo senior</strong> - Trabajas con profesionales, no con practicantes</li>
                  <li><strong>Resultados garantizados</strong> - Si no funciona, cambiamos de estrategia hasta que funcione</li>
                </ul>
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
              <h3>¿Trabajan con negocios pequeños?</h3>
              <p>Nuestro cliente ideal factura entre 100 mil y 10 millones al mes. Si estás bajo eso, 
              tenemos planes starter. Si estás arriba, tenemos equipo senior dedicado.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Qué los diferencia de otros CM?</h3>
              <p>Experiencia real + certificaciones + obsesión por vender. No somos los que 
              aprendieron en YouTube. Somos los que enseñan en YouTube 💪</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Puedo cancelar cuando quiera?</h3>
              <p>Por supuesto. Sin letra chica, sin multas. Si no sumamos, 
              mejor separarnos como amigos 🤝</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;