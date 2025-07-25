import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Globe, Sparkles, Check, ArrowRight, MessageCircle, Target, Palette, PenTool, TrendingUp, Smartphone, Zap } from 'lucide-react';

const Servicios = () => {
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
      <section className="page-hero">
        <div className="container">
          <h1>Servicios que <span className="highlight">transforman</span> negocios</h1>
          <p>Elige la solución que necesitas. Nosotros nos encargamos de que funcione.</p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="service-tabs-section">
        <div className="container">
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Precios simples, <span className="highlight-yellow">sin sorpresas</span></h2>
            <p>Elige el servicio que necesitas. Sin letra chica, sin costos ocultos.</p>
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

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
                      <h2>Simple, transparente, <span className="highlight-yellow">efectivo</span></h2>
          
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Escuchamos</h3>
              <p>Entendemos tu negocio, tus desafíos, tus metas. Sin chamullo.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Estrategia</h3>
              <p>Diseñamos un plan de acción claro y medible. Cada paso con propósito.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Ejecutamos</h3>
              <p>Implementamos con agilidad y profesionalismo. Resultados desde el día 1.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Optimizamos</h3>
              <p>Medimos, aprendemos y mejoramos constantemente. Siempre hacia arriba.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section purple-bg">
        <div className="container">
          <div className="cta-content">
            <h2>¿No sabes qué servicio necesitas?</h2>
            <p>Conversemos 5 minutos y te orientamos sin compromiso</p>
            <a
              href="https://wa.me/56932252978"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              <MessageCircle size={20} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicios;