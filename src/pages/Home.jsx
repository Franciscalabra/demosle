import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Users, Globe, Sparkles, Target, Zap, Star, Check } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('community');

  const services = {
    community: {
      title: 'Community Manager',
      icon: <Users size={40} />,
      description: 'Gestión profesional de redes sociales con contenido que conecta y convierte.',
      plans: [
        {
          name: 'Starter',
          price: '$150.000',
          features: [
            '3 posts por semana',
            '3 historias por semana',
            '2 anuncios mensuales',
            'Diseño gráfico incluido',
            'Calendario de contenido',
            'Reporte mensual básico',
            'Respuesta a comentarios',
            '1 red social'
          ]
        },
        {
          name: 'Professional',
          price: '$250.000',
          featured: true,
          features: [
            '5 posts por semana',
            '5 historias por semana',
            '4 anuncios mensuales',
            'Diseño gráfico ilimitado',
            'Calendario editorial',
            'Reportes detallados',
            'Gestión de mensajes',
            '2 redes sociales',
            'Stories destacadas',
            'Campañas temáticas'
          ]
        },
        {
          name: 'Business',
          price: '$450.000',
          features: [
            'Posts diarios',
            'Stories diarias',
            '8 anuncios mensuales',
            'Diseño y video',
            'Estrategia completa',
            'Analytics avanzado',
            'Community management 24/7',
            '3+ redes sociales',
            'Influencer marketing',
            'Concursos y sorteos',
            'Fotografía mensual'
          ]
        }
      ]
    },
    web: {
      title: 'Páginas Web',
      icon: <Globe size={40} />,
      description: 'Sitios web modernos y optimizados que convierten visitantes en clientes.',
      plans: [
        {
          name: 'Landing Page',
          price: '$99.990',
          features: [
            'Diseño one-page',
            'Mobile responsive',
            'Formulario de contacto',
            'Integración WhatsApp',
            'Hosting gratis 1 año',
            'Entrega en 3 días',
            'SEO básico',
            '2 revisiones incluidas'
          ]
        },
        {
          name: 'Web Profesional',
          price: '$249.990',
          featured: true,
          features: [
            'Hasta 5 páginas',
            'Diseño personalizado',
            'Blog integrado',
            'Galería de productos',
            'Chat en vivo',
            'Google Analytics',
            'SEO optimizado',
            'Entrega en 7 días',
            'Capacitación incluida',
            'Mantenimiento 3 meses'
          ]
        },
        {
          name: 'E-commerce',
          price: '$499.990',
          features: [
            'Tienda online completa',
            'Catálogo ilimitado',
            'Carrito de compras',
            'Pagos integrados',
            'Gestión de inventario',
            'Cupones y descuentos',
            'Multi-idioma',
            'App móvil PWA',
            'Marketing tools',
            'Soporte prioritario',
            'Capacitación completa'
          ]
        }
      ]
    },
    estrategia: {
      title: 'Estrategia Creativa',
      icon: <Sparkles size={40} />,
      description: 'Ideas estratégicas y creativas que hacen destacar tu marca.',
      plans: [
        {
          name: 'Branding Básico',
          price: '$199.990',
          features: [
            'Logo profesional',
            '3 propuestas de diseño',
            'Manual de marca básico',
            'Paleta de colores',
            'Tipografías',
            'Aplicaciones básicas',
            'Archivos editables'
          ]
        },
        {
          name: 'Identidad Completa',
          price: '$399.990',
          featured: true,
          features: [
            'Naming creativo',
            'Logo + variaciones',
            'Manual de marca completo',
            'Diseño de papelería',
            'Templates redes sociales',
            'Guía de voz y tono',
            'Estrategia de comunicación',
            'Presentación de marca',
            'Mockups profesionales'
          ]
        },
        {
          name: 'Consultoría Integral',
          price: 'Personalizado',
          features: [
            'Auditoría de marca',
            'Estrategia 360°',
            'Plan de marketing',
            'Customer journey',
            'Campañas creativas',
            'Dirección de arte',
            'Producción audiovisual',
            'Activaciones BTL',
            'KPIs y métricas',
            'Acompañamiento mensual'
          ]
        }
      ]
    }
  };

  const currentService = services[activeTab];

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
              Hacemos marketing que funciona. Punto. Sin chamullo, sin relleno, sin fórmulas genéricas. 
              Estrategia real + creatividad que vende = tu negocio creciendo. 
              <strong> ¿Cachái? Démosle.</strong>
            </p>
            <div className="hero-buttons">
              <Link to="/servicios" className="btn btn-primary">
                Ver servicios
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/56932252978"
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
            <h2>Lo que tu negocio necesita para <span className="highlight-yellow">vender más</span></h2>
            <p>Estrategia clara. Ejecución rápida. Resultados medibles. Así de simple.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Users size={40} />
              </div>
              <h3>Community & Contenido</h3>
              <p>Redes que venden, no que entretienen. Creamos contenido que genera clientes, no solo likes. Tu comunidad va a amar tu marca Y comprar tus productos. <strong>Le damos vida a tus redes.</strong></p>
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
              <p>Webs que cargan rápido y venden más rápido. ¿Bonitas? Sí. ¿Funcionales? También. En 3 días la tienes lista. Sin vueltas. <strong>A darle.</strong></p>
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
              <p>Creatividad que vende. No hacemos arte, hacemos negocios crecer. Tu marca va a verse pro, sonar cercana y vender como nunca.</p>
              <ul className="service-features">
                <li><Check size={16} /> Identidad de marca</li>
                <li><Check size={16} /> Redacción publicitaria</li>
                <li><Check size={16} /> Estrategias locales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs and Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Precios simples, <span className="highlight-yellow">sin sorpresas</span></h2>
            <p>Elige el servicio que necesitas. Sin letra chica, sin costos ocultos.</p>
          </div>

          {/* Service Tabs */}
          <div className="service-tabs">
            <button
              className={`service-tab ${activeTab === 'community' ? 'active' : ''}`}
              onClick={() => setActiveTab('community')}
            >
              <Users size={24} />
              Community Manager
            </button>
            <button
              className={`service-tab ${activeTab === 'web' ? 'active' : ''}`}
              onClick={() => setActiveTab('web')}
            >
              <Globe size={24} />
              Páginas Web
            </button>
            <button
              className={`service-tab ${activeTab === 'estrategia' ? 'active' : ''}`}
              onClick={() => setActiveTab('estrategia')}
            >
              <Sparkles size={24} />
              Estrategia Creativa
            </button>
          </div>

          <div className="pricing-grid">
            {currentService.plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="featured-badge">MÁS POPULAR</div>}
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  {plan.price !== 'Personalizado' && <span>/mes</span>}
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className="btn btn-pricing">
                  Comenzar ahora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results">
        <div className="container">
          <div className="section-header">
            <h2>Acá no vendemos humo. <span className="highlight">Vendemos resultados</span></h2>
            <p>Métricas reales. Ventas reales. Crecimiento real. Los números hablan solos.</p>
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
            <p>Nuestro ecosistema digital integrado trabaja 24/7. Mientras duermes, tu negocio sigue vendiendo. Automatización inteligente + estrategia humana = resultados extraordinarios.</p>
            
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
            <h2>¿Tu marca no vende como debería?</h2>
            <p>Tenemos la solución. Sin verso. <strong>Démosle.</strong></p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-primary">
                Empezar ahora
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/56932252978"
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