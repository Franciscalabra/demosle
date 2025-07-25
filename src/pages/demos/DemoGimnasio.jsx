import React, { useState } from 'react';
import { Dumbbell, Clock, Users, Zap, Calendar, CheckCircle, Play, MapPin, Phone, ArrowRight, Activity, Target, Flame } from 'lucide-react';

const DemoGimnasio = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'basic',
      name: 'Plan Básico',
      price: '$19.990',
      period: '/mes',
      features: [
        'Acceso al gimnasio',
        'Máquinas y pesas',
        'Vestuarios y duchas',
        'Evaluación inicial'
      ],
      notIncluded: ['Clases grupales', 'Entrenador personal']
    },
    {
      id: 'professional',
      name: 'Plan Professional',
      price: '$34.990',
      period: '/mes',
      featured: true,
      features: [
        'Todo del Plan Básico',
        'Clases grupales ilimitadas',
        'Programa personalizado',
        'App de seguimiento',
        'Nutricionista (1 sesión/mes)',
        'Estacionamiento gratis'
      ],
      notIncluded: ['Entrenador personal']
    },
    {
      id: 'premium',
      name: 'Plan Premium',
      price: '$59.990',
      period: '/mes',
      features: [
        'Todo del Plan Professional',
        'Entrenador personal (8 sesiones)',
        'Nutricionista (4 sesiones/mes)',
        'Acceso VIP',
        'Toalla y bebidas incluidas',
        'Invitados gratis (2/mes)'
      ],
      notIncluded: []
    }
  ];

  const classes = [
    {
      name: 'CrossFit',
      time: '07:00',
      duration: '60 min',
      intensity: 'Alta',
      spots: 3
    },
    {
      name: 'Yoga Flow',
      time: '09:00',
      duration: '75 min',
      intensity: 'Media',
      spots: 8
    },
    {
      name: 'HIIT Express',
      time: '18:00',
      duration: '45 min',
      intensity: 'Alta',
      spots: 5
    },
    {
      name: 'Pilates',
      time: '19:00',
      duration: '60 min',
      intensity: 'Baja',
      spots: 12
    }
  ];

  const trainers = [
    {
      name: 'Carlos Mendoza',
      specialty: 'Fuerza y Musculación',
      experience: '10 años',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80'
    },
    {
      name: 'María Fernández',
      specialty: 'CrossFit & HIIT',
      experience: '8 años',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80'
    },
    {
      name: 'Juan Silva',
      specialty: 'Nutrición Deportiva',
      experience: '12 años',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'
    }
  ];

  const handleJoinNow = () => {
    alert('¡Excelente decisión! Te contactaremos para agendar tu visita 💪');
  };

  return (
    <div className="demo-gimnasio">
      {/* Header */}
      <header className="gym-header">
        <div className="gym-container">
          <div className="header-content">
            <h1 className="gym-logo">
              <Dumbbell size={32} />
              PowerFit
            </h1>
            
            <nav className="gym-nav">
              <a href="#inicio">Inicio</a>
              <a href="#planes">Planes</a>
              <a href="#clases">Clases</a>
              <a href="#entrenadores">Entrenadores</a>
              <a href="#contacto">Contacto</a>
            </nav>
            
            <button className="join-btn" onClick={handleJoinNow}>
              Únete Ahora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gym-hero">
        <div className="hero-overlay"></div>
        <div className="hero-video">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" alt="Gimnasio" />
        </div>
        
        <div className="gym-container">
          <div className="hero-content">
            <span className="hero-tag">
              <Flame size={16} />
              Transforma tu cuerpo
            </span>
            <h2>Alcanza tus metas<br />con <span>PowerFit</span></h2>
            <p>El gimnasio más completo de Santiago. Equipamiento de última generación, 
               clases grupales y entrenadores certificados.</p>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleJoinNow}>
                <Zap size={20} />
                Prueba 7 días GRATIS
              </button>
              <button className="btn-play">
                <Play size={20} />
                Ver video
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <strong>5,000+</strong>
                <span>Miembros activos</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Clases semanales</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Abierto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="gym-container">
          <div className="features-grid">
            <div className="feature-card">
              <Activity size={40} />
              <h3>Equipamiento Premium</h3>
              <p>Máquinas de última generación y amplia variedad de pesas</p>
            </div>
            <div className="feature-card">
              <Users size={40} />
              <h3>Clases Grupales</h3>
              <p>Más de 20 tipos de clases con instructores certificados</p>
            </div>
            <div className="feature-card">
              <Target size={40} />
              <h3>Entrenamiento Personal</h3>
              <p>Planes personalizados según tus objetivos</p>
            </div>
            <div className="feature-card">
              <Clock size={40} />
              <h3>Abierto 24/7</h3>
              <p>Entrena cuando quieras, a la hora que prefieras</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans-section" id="planes">
        <div className="gym-container">
          <div className="section-header">
            <h2>Elige tu plan perfecto</h2>
            <p>Sin matrícula. Cancela cuando quieras.</p>
          </div>
          
          <div className="plans-grid">
            {plans.map(plan => (
              <div 
                key={plan.id} 
                className={`plan-card ${plan.featured ? 'featured' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.featured && <span className="featured-badge">MÁS POPULAR</span>}
                
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {plan.notIncluded.length > 0 && (
                  <ul className="not-included">
                    {plan.notIncluded.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                
                <button 
                  className={`select-plan-btn ${selectedPlan === plan.id ? 'selected' : ''}`}
                  onClick={handleJoinNow}
                >
                  {selectedPlan === plan.id ? 'Plan Seleccionado' : 'Seleccionar Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="classes-section" id="clases">
        <div className="gym-container">
          <div className="section-header">
            <h2>Clases de hoy</h2>
            <p>Reserva tu lugar en las mejores clases</p>
          </div>
          
          <div className="classes-grid">
            {classes.map((cls, index) => (
              <div key={index} className="class-card">
                <div className="class-header">
                  <h4>{cls.name}</h4>
                  <span className={`intensity ${cls.intensity.toLowerCase()}`}>
                    {cls.intensity}
                  </span>
                </div>
                
                <div className="class-info">
                  <div className="info-item">
                    <Clock size={16} />
                    <span>{cls.time} - {cls.duration}</span>
                  </div>
                  <div className="info-item">
                    <Users size={16} />
                    <span>{cls.spots} lugares disponibles</span>
                  </div>
                </div>
                
                <button className="reserve-btn">
                  Reservar <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="classes-cta">
            <button className="view-all-btn">
              Ver horario completo
            </button>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="trainers-section" id="entrenadores">
        <div className="gym-container">
          <div className="section-header">
            <h2>Nuestros entrenadores</h2>
            <p>Profesionales certificados listos para ayudarte</p>
          </div>
          
          <div className="trainers-grid">
            {trainers.map((trainer, index) => (
              <div key={index} className="trainer-card">
                <div className="trainer-image">
                  <img src={trainer.image} alt={trainer.name} />
                </div>
                <div className="trainer-info">
                  <h3>{trainer.name}</h3>
                  <p className="specialty">{trainer.specialty}</p>
                  <p className="experience">{trainer.experience} de experiencia</p>
                  <button className="book-trainer">
                    Agendar sesión
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gym-cta-section">
        <div className="gym-container">
          <div className="cta-content">
            <h2>Comienza tu transformación hoy</h2>
            <p>Primera semana completamente gratis. Sin compromisos.</p>
            <div className="cta-form">
              <input type="email" placeholder="Tu email" />
              <button onClick={handleJoinNow}>
                Empezar ahora
              </button>
            </div>
            <p className="cta-note">
              <CheckCircle size={16} />
              Cancela cuando quieras. Sin letra chica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contacto">
        <div className="gym-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>PowerFit Las Condes</h3>
              <div className="info-item">
                <MapPin size={20} />
                <span>Av. Apoquindo 3500, Las Condes</span>
              </div>
              <div className="info-item">
                <Phone size={20} />
                <span>+56 2 2345 6789</span>
              </div>
              <div className="info-item">
                <Clock size={20} />
                <span>Abierto 24/7</span>
              </div>
            </div>
            
            <div className="map-placeholder">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Gimnasio interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gym-footer">
        <div className="gym-container">
          <p>© 2024 PowerFit Gym - Demo by Démosle.cl</p>
        </div>
      </footer>

      <style jsx>{`
        .demo-gimnasio {
          font-family: 'Inter', sans-serif;
          color: #fff;
          background: #0a0a0a;
        }

        /* Header */
        .gym-header {
          background: #0a0a0a;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .gym-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .gym-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.75rem;
          font-weight: 800;
          color: #fff;
          margin: 0;
        }

        .gym-nav {
          display: flex;
          gap: 2.5rem;
        }

        .gym-nav a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .gym-nav a:hover {
          color: #ff6b6b;
        }

        .join-btn {
          background: #ff6b6b;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .join-btn:hover {
          background: #ff5252;
          transform: translateY(-2px);
        }

        /* Hero Section */
        .gym-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%);
          z-index: 1;
        }

        .hero-video {
          position: absolute;
          inset: 0;
        }

        .hero-video img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,107,107,0.2);
          color: #ff6b6b;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero-content h2 {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-content h2 span {
          color: #ff6b6b;
        }

        .hero-content p {
          font-size: 1.25rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-primary {
          background: #ff6b6b;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #ff5252;
          transform: translateY(-2px);
        }

        .btn-play {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 1rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .btn-play:hover {
          background: rgba(255,255,255,0.2);
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
        }

        .stat {
          text-align: center;
        }

        .stat strong {
          display: block;
          font-size: 2rem;
          color: #ff6b6b;
          margin-bottom: 0.25rem;
        }

        .stat span {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
        }

        /* Features Section */
        .features-section {
          padding: 5rem 0;
          background: #111;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .feature-card {
          background: rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s;
        }

        .feature-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-5px);
        }

        .feature-card svg {
          color: #ff6b6b;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .feature-card p {
          color: rgba(255,255,255,0.7);
          font-size: 0.875rem;
        }

        /* Plans Section */
        .plans-section {
          padding: 5rem 0;
          background: #0a0a0a;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.25rem;
          color: rgba(255,255,255,0.7);
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .plan-card {
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          padding: 2.5rem;
          border-radius: 20px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s;
        }

        .plan-card:hover {
          border-color: rgba(255,107,107,0.5);
          transform: translateY(-5px);
        }

        .plan-card.featured {
          background: rgba(255,107,107,0.1);
          border-color: #ff6b6b;
        }

        .featured-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #ff6b6b;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .plan-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .price {
          text-align: center;
          margin-bottom: 2rem;
        }

        .amount {
          font-size: 3rem;
          font-weight: 700;
          color: #ff6b6b;
        }

        .period {
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .features-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          color: rgba(255,255,255,0.9);
        }

        .features-list svg {
          color: #4caf50;
          flex-shrink: 0;
        }

        .not-included {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
          opacity: 0.5;
        }

        .not-included li {
          text-decoration: line-through;
          padding: 0.5rem 0;
        }

        .select-plan-btn {
          width: 100%;
          padding: 1rem;
          background: rgba(255,255,255,0.1);
          color: white;
          border: 2px solid rgba(255,255,255,0.2);
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .select-plan-btn:hover {
          background: #ff6b6b;
          border-color: #ff6b6b;
        }

        .select-plan-btn.selected {
          background: #ff6b6b;
          border-color: #ff6b6b;
        }

        /* Classes Section */
        .classes-section {
          padding: 5rem 0;
          background: #111;
        }

        .classes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .class-card {
          background: rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 15px;
          transition: all 0.3s;
        }

        .class-card:hover {
          background: rgba(255,255,255,0.08);
        }

        .class-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .class-header h4 {
          font-size: 1.5rem;
          margin: 0;
        }

        .intensity {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .intensity.alta {
          background: rgba(255,107,107,0.2);
          color: #ff6b6b;
        }

        .intensity.media {
          background: rgba(255,193,7,0.2);
          color: #ffc107;
        }

        .intensity.baja {
          background: rgba(76,175,80,0.2);
          color: #4caf50;
        }

        .class-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255,255,255,0.7);
          font-size: 0.875rem;
        }

        .reserve-btn {
          background: none;
          color: #ff6b6b;
          border: 2px solid #ff6b6b;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .reserve-btn:hover {
          background: #ff6b6b;
          color: white;
        }

        .classes-cta {
          text-align: center;
        }

        .view-all-btn {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 1rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-all-btn:hover {
          background: rgba(255,255,255,0.2);
        }

        /* Trainers Section */
        .trainers-section {
          padding: 5rem 0;
          background: #0a0a0a;
        }

        .trainers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .trainer-card {
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .trainer-card:hover {
          transform: translateY(-5px);
        }

        .trainer-image {
          height: 300px;
          overflow: hidden;
        }

        .trainer-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .trainer-card:hover .trainer-image img {
          transform: scale(1.05);
        }

        .trainer-info {
          padding: 1.5rem;
          text-align: center;
        }

        .trainer-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .specialty {
          color: #ff6b6b;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .experience {
          color: rgba(255,255,255,0.6);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .book-trainer {
          background: rgba(255,107,107,0.2);
          color: #ff6b6b;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .book-trainer:hover {
          background: #ff6b6b;
          color: white;
        }

        /* CTA Section */
        .gym-cta-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%);
          text-align: center;
        }

        .cta-content h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .cta-form {
          display: flex;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto 1rem;
        }

        .cta-form input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 30px;
          font-size: 1rem;
          background: rgba(255,255,255,0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .cta-form input::placeholder {
          color: rgba(255,255,255,0.7);
        }

        .cta-form button {
          padding: 1rem 2rem;
          background: #0a0a0a;
          color: white;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .cta-form button:hover {
          background: #1a1a1a;
        }

        .cta-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }

        /* Contact Section */
        .contact-section {
          padding: 5rem 0;
          background: #111;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .contact-info .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: rgba(255,255,255,0.8);
        }

        .contact-info svg {
          color: #ff6b6b;
        }

        .map-placeholder {
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
        }

        .map-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Footer */
        .gym-footer {
          padding: 2rem 0;
          background: #0a0a0a;
          text-align: center;
          color: rgba(255,255,255,0.5);
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        /* Responsive */
        @media (max-width: 968px) {
          .gym-nav {
            display: none;
          }

          .hero-content h2 {
            font-size: 3rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .plans-grid {
            grid-template-columns: 1fr;
          }

          .classes-grid {
            grid-template-columns: 1fr;
          }

          .trainers-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
          }

          .hero-stats {
            justify-content: center;
          }

          .cta-form {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default DemoGimnasio;