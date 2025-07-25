import React, { useState } from 'react';
import { Phone, Clock, MapPin, Calendar, Heart, Stethoscope, Shield, Award, User, Mail, MessageCircle, ChevronRight } from 'lucide-react';

const DemoVeterinaria = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pet: '',
    service: '',
    date: '',
    message: ''
  });

  const services = [
    {
      icon: <Stethoscope size={40} />,
      title: 'Consulta General',
      description: 'Revisión completa y diagnóstico profesional para tu mascota',
      price: 'Desde $25.000'
    },
    {
      icon: <Shield size={40} />,
      title: 'Vacunación',
      description: 'Programa completo de vacunas para cachorros y adultos',
      price: 'Desde $15.000'
    },
    {
      icon: <Heart size={40} />,
      title: 'Emergencias 24/7',
      description: 'Atención de urgencias las 24 horas del día',
      price: 'Consultar'
    },
    {
      icon: <Award size={40} />,
      title: 'Cirugías',
      description: 'Procedimientos quirúrgicos con tecnología de punta',
      price: 'Según evaluación'
    }
  ];

  const team = [
    {
      name: 'Dra. María González',
      role: 'Veterinaria Jefe',
      specialty: 'Medicina Interna',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80'
    },
    {
      name: 'Dr. Carlos Rodríguez',
      role: 'Cirujano Veterinario',
      specialty: 'Cirugía y Traumatología',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'
    },
    {
      name: 'Dra. Ana Martínez',
      role: 'Veterinaria',
      specialty: 'Dermatología',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Cita solicitada! Te contactaremos pronto para confirmar. 📞');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="demo-veterinaria">
      {/* Header */}
      <header className="vet-header">
        <div className="vet-top-bar">
          <div className="vet-container">
            <div className="top-bar-content">
              <div className="contact-info">
                <span><Phone size={16} /> +56 2 2345 6789</span>
                <span><Clock size={16} /> Lun-Vie: 9:00-20:00 | Sáb: 9:00-14:00</span>
              </div>
              <button className="emergency-btn">
                <Heart size={16} /> Emergencias 24/7
              </button>
            </div>
          </div>
        </div>
        
        <div className="vet-nav-bar">
          <div className="vet-container">
            <div className="nav-content">
              <h1 className="clinic-logo">
                <Heart size={28} fill="currentColor" />
                VetCare+
              </h1>
              
              <nav className="vet-nav">
                <a href="#inicio">Inicio</a>
                <a href="#servicios">Servicios</a>
                <a href="#equipo">Equipo</a>
                <a href="#citas">Citas Online</a>
                <a href="#contacto">Contacto</a>
              </nav>
              
              <button className="cta-appointment">
                <Calendar size={18} />
                Agendar Cita
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="vet-hero">
        <div className="vet-container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-badge">Cuidado Profesional</span>
              <h2>Tu mascota en las mejores manos</h2>
              <p>
                Más de 15 años cuidando la salud y bienestar de tus compañeros peludos. 
                Atención personalizada con amor y profesionalismo.
              </p>
              <div className="hero-actions">
                <button className="btn-primary">
                  <Calendar size={20} />
                  Agendar Consulta
                </button>
                <button className="btn-secondary">
                  <Phone size={20} />
                  Llamar Ahora
                </button>
              </div>
              <div className="trust-indicators">
                <div className="indicator">
                  <strong>10,000+</strong>
                  <span>Mascotas Atendidas</span>
                </div>
                <div className="indicator">
                  <strong>4.9/5</strong>
                  <span>Calificación</span>
                </div>
                <div className="indicator">
                  <strong>24/7</strong>
                  <span>Emergencias</span>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80" alt="Veterinaria con perro" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="servicios">
        <div className="vet-container">
          <div className="section-header">
            <span className="section-badge">Nuestros Servicios</span>
            <h2>Cuidado integral para tu mascota</h2>
            <p>Ofrecemos una amplia gama de servicios veterinarios con la mejor tecnología</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-price">{service.price}</span>
                <button className="service-btn">
                  Más información <ChevronRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="equipo">
        <div className="vet-container">
          <div className="section-header">
            <span className="section-badge">Nuestro Equipo</span>
            <h2>Profesionales dedicados</h2>
            <p>Veterinarios especializados con pasión por el cuidado animal</p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <article key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="specialty">{member.specialty}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="appointment-section" id="citas">
        <div className="vet-container">
          <div className="appointment-grid">
            <div className="form-info">
              <h2>Agenda tu cita online</h2>
              <p>Completa el formulario y te confirmaremos tu cita en menos de 24 horas</p>
              
              <div className="clinic-info">
                <h4>Horarios de Atención</h4>
                <ul>
                  <li>Lunes a Viernes: 9:00 - 20:00</li>
                  <li>Sábados: 9:00 - 14:00</li>
                  <li>Emergencias: 24/7</li>
                </ul>
                
                <h4>Ubicación</h4>
                <p>
                  <MapPin size={16} />
                  Av. Los Veterinarios 123, Las Condes, Santiago
                </p>
              </div>
            </div>
            
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label><User size={16} /> Tu Nombre</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label><Mail size={16} /> Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label><Phone size={16} /> Teléfono</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label><Heart size={16} /> Nombre Mascota</label>
                  <input 
                    type="text" 
                    name="pet"
                    value={formData.pet}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label><Stethoscope size={16} /> Servicio</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="consulta">Consulta General</option>
                    <option value="vacunacion">Vacunación</option>
                    <option value="emergencia">Emergencia</option>
                    <option value="cirugia">Cirugía</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label><Calendar size={16} /> Fecha Preferida</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label><MessageCircle size={16} /> Mensaje (Opcional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Cuéntanos sobre los síntomas o el motivo de la consulta..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Solicitar Cita
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="vet-container">
          <div className="cta-content">
            <h2>¿Emergencia veterinaria?</h2>
            <p>Estamos disponibles 24/7 para atender a tu mascota</p>
            <div className="cta-buttons">
              <button className="emergency-cta">
                <Phone size={20} />
                Llamar Emergencias: +56 9 8765 4321
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="vet-footer">
        <div className="vet-container">
          <p>© 2024 VetCare+ - Demo by Démosle.cl</p>
        </div>
      </footer>

      <style jsx>{`
        .demo-veterinaria {
          font-family: 'Inter', sans-serif;
          color: #333;
          background: #fff;
        }

        /* Header */
        .vet-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .vet-top-bar {
          background: #2c5aa0;
          color: white;
          padding: 0.5rem 0;
          font-size: 0.875rem;
        }

        .vet-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-info {
          display: flex;
          gap: 2rem;
        }

        .contact-info span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .emergency-btn {
          background: #e74c3c;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .emergency-btn:hover {
          background: #c0392b;
        }

        .vet-nav-bar {
          padding: 1rem 0;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .clinic-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.75rem;
          font-weight: 700;
          color: #2c5aa0;
          margin: 0;
        }

        .vet-nav {
          display: flex;
          gap: 2rem;
        }

        .vet-nav a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .vet-nav a:hover {
          color: #2c5aa0;
        }

        .cta-appointment {
          background: #27ae60;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .cta-appointment:hover {
          background: #229954;
        }

        /* Hero Section */
        .vet-hero {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #e3e9f3 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-block;
          background: #2c5aa0;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .hero-content h2 {
          font-size: 3rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
        }

        .hero-content p {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2rem;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .btn-primary {
          background: #27ae60;
          color: white;
        }

        .btn-primary:hover {
          background: #229954;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: white;
          color: #2c5aa0;
          border: 2px solid #2c5aa0;
        }

        .btn-secondary:hover {
          background: #2c5aa0;
          color: white;
        }

        .trust-indicators {
          display: flex;
          gap: 3rem;
        }

        .indicator {
          text-align: center;
        }

        .indicator strong {
          display: block;
          font-size: 1.5rem;
          color: #2c5aa0;
          margin-bottom: 0.25rem;
        }

        .indicator span {
          font-size: 0.875rem;
          color: #666;
        }

        .hero-image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        /* Services Section */
        .services-section {
          padding: 5rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          background: #e8f5e9;
          color: #27ae60;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .section-header p {
          font-size: 1.125rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: all 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: #e8f5e9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #27ae60;
        }

        .service-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .service-card p {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .service-price {
          display: block;
          font-size: 1.125rem;
          font-weight: 700;
          color: #2c5aa0;
          margin-bottom: 1.5rem;
        }

        .service-btn {
          background: none;
          border: 2px solid #2c5aa0;
          color: #2c5aa0;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .service-btn:hover {
          background: #2c5aa0;
          color: white;
        }

        /* Team Section */
        .team-section {
          padding: 5rem 0;
          background: #f8f9fa;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .team-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s;
        }

        .team-card:hover {
          transform: translateY(-5px);
        }

        .member-image {
          height: 300px;
          overflow: hidden;
        }

        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .team-card:hover .member-image img {
          transform: scale(1.05);
        }

        .member-info {
          padding: 1.5rem;
          text-align: center;
        }

        .member-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .role {
          color: #2c5aa0;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .specialty {
          color: #666;
          font-size: 0.875rem;
        }

        /* Appointment Section */
        .appointment-section {
          padding: 5rem 0;
        }

        .appointment-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        .form-info h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .form-info p {
          color: #666;
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }

        .clinic-info {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 15px;
        }

        .clinic-info h4 {
          margin-bottom: 1rem;
          color: #2c5aa0;
        }

        .clinic-info ul {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .clinic-info li {
          padding: 0.5rem 0;
          color: #666;
        }

        .clinic-info p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          margin: 0;
        }

        .appointment-form {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #2c5aa0;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: #27ae60;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-btn:hover {
          background: #229954;
        }

        /* CTA Section */
        .cta-section {
          padding: 4rem 0;
          background: #2c5aa0;
          color: white;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .emergency-cta {
          background: #e74c3c;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 30px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.3s;
        }

        .emergency-cta:hover {
          background: #c0392b;
        }

        /* Footer */
        .vet-footer {
          padding: 2rem 0;
          background: #f8f9fa;
          text-align: center;
          color: #666;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .vet-nav {
            display: none;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content h2 {
            font-size: 2.5rem;
          }

          .hero-actions {
            justify-content: center;
          }

          .trust-indicators {
            justify-content: center;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .appointment-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-info {
            flex-direction: column;
            gap: 0.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .hero-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default DemoVeterinaria;