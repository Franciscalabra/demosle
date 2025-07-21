import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Users, Globe, Sparkles, Target, Zap, Star, Check } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Ideas que <span className="highlight">conectan</span>,
              <br />
              marcas que <span className="highlight">venden</span>
            </h1>
            <p className="hero-subtitle">
              Somos tu equipo de estrategia digital. Transformamos negocios con creatividad 
              que funciona y resultados que se miden en ventas. ¿Listo para crecer de verdad? 
              <strong> Démosle</strong>.
            </p>
            <div className="hero-buttons">
              <Link to="/servicios" className="btn btn-primary">
                Ver servicios
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/56942740261"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle size={20} />
                Cotiza rápido
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2>Todo lo que necesitas para <span className="highlight-yellow">crecer online</span></h2>
            <p>Soluciones integrales que trabajan en sincronía. Sin egos, sin humo, solo resultados.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Users size={40} />
              </div>
              <h3>Community & Contenido</h3>
              <p>Estrategia digital con visión comercial. Creamos contenido que conecta, campañas que convierten y comunidades que compran. Cada post tiene un objetivo: hacer crecer tu negocio.</p>
              <ul className="service-features">
                <li><Check size={16} /> Gestión de redes sociales</li>
                <li><Check size={16} /> Promociones creativas</li>
                <li><Check size={16} /> Difusión por WhatsApp</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Globe size={40} />
              </div>
              <h3>Páginas Web que Venden</h3>
              <p>Tu nueva máquina de ventas 24/7. Diseños que enamoran, código que vuela y conversiones que celebrás. En 3 días tenés tu sitio vendiendo.</p>
              <ul className="service-features">
                <li><Check size={16} /> Diseño responsivo</li>
                <li><Check size={16} /> Optimizado para ventas</li>
                <li><Check size={16} /> Entrega en 3-7 días</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Sparkles size={40} />
              </div>
              <h3>Estrategia & Creatividad</h3>
              <p>Ideas con cerebro y corazón. Construimos marcas memorables con identidad auténtica, mensajes potentes y estrategias que mueven la aguja donde importa: tus ventas.</p>
              <ul className="service-features">
                <li><Check size={16} /> Identidad de marca</li>
                <li><Check size={16} /> Redacción publicitaria</li>
                <li><Check size={16} /> Estrategias locales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results">
        <div className="container">
          <div className="section-header">
            <h2>Resultados que <span className="highlight">hablan</span> por sí solos</h2>
            <p>No prometemos milagros. Entregamos métricas reales desde el día uno.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <Target size={32} />
              <h3>+250%</h3>
              <p>Aumento en ventas</p>
            </div>
            <div className="stat-card">
              <MessageCircle size={32} />
              <h3>24/7</h3>
              <p>Atención automática</p>
            </div>
            <div className="stat-card">
              <Zap size={32} />
              <h3>3 días</h3>
              <p>Entrega web express</p>
            </div>
            <div className="stat-card">
              <Star size={32} />
              <h3>98%</h3>
              <p>Clientes satisfechos</p>
            </div>
          </div>

          <div className="conversion-section">
            <h3>Convierte cada <span className="highlight">interacción</span> en una oportunidad</h3>
            <p>Nuestro ecosistema digital integrado trabaja 24/7. Mientras dormís, tu negocio sigue vendiendo. Automatización inteligente + estrategia humana = resultados extraordinarios.</p>
            
            <div className="conversion-bars">
              <div className="conversion-item">
                <div className="conversion-label">
                  <span>WhatsApp</span>
                  <span>89%</span>
                </div>
                <div className="conversion-bar">
                  <div className="conversion-fill" style={{width: '89%'}}></div>
                </div>
              </div>
              <div className="conversion-item">
                <div className="conversion-label">
                  <span>Instagram</span>
                  <span>76%</span>
                </div>
                <div className="conversion-bar">
                  <div className="conversion-fill purple" style={{width: '76%'}}></div>
                </div>
              </div>
              <div className="conversion-item">
                <div className="conversion-label">
                  <span>Web</span>
                  <span>92%</span>
                </div>
                <div className="conversion-bar">
                  <div className="conversion-fill yellow" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para hacer crecer tu negocio?</h2>
            <p>Hablemos de tu proyecto. Respuesta garantizada en menos de 24 horas.</p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-primary">
                Empezar ahora
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/56942740261"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
              >
                <MessageCircle size={20} />
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;