import React, { useState } from 'react';
import { ExternalLink, Users, Globe, Sparkles, X, Star, TrendingUp, MessageCircle, Instagram } from 'lucide-react';

const Proyectos = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Escandalosos Pizza',
      category: 'estrategia',
      featured: true,
      description: 'Dark kitchen que se convirtió en referente gastronómico local gracias a una estrategia digital integral',
      image: 'http://demosle.cl/wp-content/uploads/2025/07/Diseno-sin-titulo.jpg',
      tags: ['Estrategia Digital', 'E-commerce', 'Branding', 'Community Manager'],
      results: '+300% ventas en 6 meses',
      link: 'https://escandalosospizza.cl',
      instagram: 'https://www.instagram.com/escandalosos.pizza',
      details: {
        client: 'Escandalosos Pizza',
        year: '2023-2024',
        duration: '8 meses',
        services: ['Diseño Web', 'Community Manager', 'Identidad Visual', 'SEO Local', 'Google Ads'],
        challenge: 'Transformar una dark kitchen sin presencia digital en la pizzería más reconocida de la zona, compitiendo con grandes cadenas establecidas.',
        solution: 'Desarrollamos una estrategia integral que incluyó identidad de marca disruptiva, sitio web con pedidos online, gestión profesional de redes sociales y campañas de marketing local.',
        achievements: [
          { metric: '+300%', description: 'Incremento en ventas' },
          { metric: '4.9⭐', description: 'Rating en Google (200+ reseñas)' },
          { metric: '#1', description: 'Posición en búsquedas locales' },
          { metric: '9K', description: 'Seguidores en Instagram' },
          { metric: '45min', description: 'Tiempo promedio de entrega' }
        ],
        testimonial: {
          quote: "Démosle no solo creó nuestra presencia digital, transformó completamente nuestro negocio. Pasamos de ser desconocidos a tener lista de espera los fines de semana.",
          author: "Javier Honorato",
          position: "Fundador, Escandalosos Pizza"
        }
      }
    },
    {
      id: 2,
      title: 'Pizzas El Ranchito',
      category: 'estrategia',
      featured: true,
      description: 'Transformación digital completa que multiplicó el alcance y las ventas de esta pizzería tradicional',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
      tags: ['Community Manager', 'Branding', 'Fotografía', 'Página Web'],
      results: '+72K visualizaciones/mes',
      instagram: 'https://www.instagram.com/pizzaselranchito',
      details: {
        client: 'Pizzas El Ranchito',
        year: '2024',
        duration: 'Ongoing',
        services: ['Community Manager', 'Cambio de Identidad', 'Paleta de Colores', 'Fotografía Profesional', 'Página Web + Fudo'],
        challenge: 'Modernizar la imagen de una pizzería tradicional y aumentar su presencia digital para competir con cadenas modernas.',
        solution: 'Renovación completa de identidad visual, gestión profesional de redes sociales, fotografía gastronómica de alta calidad y desarrollo de página web con integración Fudo para pedidos online.',
        achievements: [
          { metric: '72.3K', description: 'Visualizaciones mensuales' },
          { metric: '35K', description: 'Alcance mensual' },
          { metric: '+239%', description: 'Aumento en interacciones' },
          { metric: '1,527', description: 'Clics en enlaces/mes' },
          { metric: '+38%', description: 'Crecimiento mensual' }
        ],
        testimonial: {
          quote: "Estamos muy felices, el cambio ha sido muy notorio, las ventas aumentaron y la presencia en instagram mejoró un 1000%, lo recomiendo totalmente!",
          author: "Andres",
          position: "Pizzas El Ranchito"
        }
      }
    },
    {
      id: 3,
      title: 'Sol del Maipo',
      category: 'web',
      description: 'Landing page moderna para empresa de instalación de paneles fotovoltaicos',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      tags: ['Landing Page', 'UX/UI', 'Formulario de Contacto'],
      results: '+200% en consultas',
      link: 'https://soldelmaipo.cl',
      details: {
        client: 'Sol del Maipo - Energía Solar',
        year: '2024',
        duration: '2 semanas',
        services: ['Diseño Web', 'Landing Page', 'Copywriting', 'SEO'],
        challenge: 'Crear una presencia digital profesional para una empresa de paneles solares que transmitiera confianza y sustentabilidad.',
        solution: 'Diseñamos una landing page limpia y moderna con formulario de contacto optimizado, información clara sobre servicios y beneficios de la energía solar.',
        achievements: [
          { metric: '+200%', description: 'Aumento en consultas' },
          { metric: '3.2s', description: 'Tiempo de carga' },
          { metric: '85%', description: 'Usuarios móviles' },
          { metric: '45%', description: 'Tasa de conversión' }
        ],
        testimonial: {
          quote: "La página web nos posicionó como líderes en instalación de paneles solares en la comuna. Las consultas no paran de llegar.",
          author: "Gerente Comercial",
          position: "Sol del Maipo"
        }
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: null },
    { id: 'web', name: 'Páginas Web', icon: <Globe size={16} /> },
    { id: 'community', name: 'Community', icon: <Users size={16} /> },
    { id: 'estrategia', name: 'Estrategia', icon: <Sparkles size={16} /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Proyectos que inspiran, <span className="highlight">resultados que enamoran</span></h1>
          <p>Mirá cómo transformamos negocios como el tuyo en máquinas de vender</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <p className="portfolio-intro">
            Casos de éxito reales con métricas comprobables. 
            Cada proyecto representa un negocio que confió en nosotros y hoy celebra resultados extraordinarios.
          </p>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <article 
                key={project.id} 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                onClick={() => handleProjectClick(project)}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={16} />
                    Proyecto Destacado
                  </div>
                )}
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-result">{project.results}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button className="project-link">
                      Ver detalles <ExternalLink size={16} />
                    </button>
                    {project.instagram && (
                      <a 
                        href={project.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-content">
              {/* Project Details */}
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="project-meta">
                  <span>{selectedProject.details.client}</span>
                  <span>•</span>
                  <span>{selectedProject.details.year}</span>
                  <span>•</span>
                  <span>{selectedProject.details.duration}</span>
                </div>
              </div>

              <div className="services-list">
                {selectedProject.details.services.map((service, index) => (
                  <span key={index} className="service-tag">{service}</span>
                ))}
              </div>

              <div className="project-sections">
                <div className="section">
                  <h3>El Desafío</h3>
                  <p>{selectedProject.details.challenge}</p>
                </div>

                <div className="section">
                  <h3>Nuestra Solución</h3>
                  <p>{selectedProject.details.solution}</p>
                </div>

                <div className="section">
                  <h3>Resultados Obtenidos</h3>
                  <div className="achievements-grid">
                    {selectedProject.details.achievements.map((achievement, index) => (
                      <div key={index} className="achievement">
                        <div className="achievement-metric">{achievement.metric}</div>
                        <div className="achievement-desc">{achievement.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedProject.details.testimonial && (
                  <div className="section testimonial">
                    <MessageCircle size={32} className="quote-icon" />
                    <blockquote>"{selectedProject.details.testimonial.quote}"</blockquote>
                    <cite>
                      <strong>{selectedProject.details.testimonial.author}</strong>
                      <span>{selectedProject.details.testimonial.position}</span>
                    </cite>
                  </div>
                )}
              </div>

              <div className="modal-actions">
                {selectedProject.link && (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visitar sitio web <ExternalLink size={18} />
                  </a>
                )}
                {selectedProject.instagram && (
                  <a 
                    href={selectedProject.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Ver Instagram <Instagram size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="stats-section yellow-bg">
        <div className="container">
          <h2>Números que importan</h2>
          <div className="stats-grid large">
            <div className="stat-item">
              <h3>+50</h3>
              <p>Proyectos completados</p>
            </div>
            <div className="stat-item">
              <h3>+200%</h3>
              <p>Crecimiento promedio</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Clientes satisfechos</p>
            </div>
            <div className="stat-item">
              <h3>24hrs</h3>
              <p>Respuesta garantizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Palabras de <span className="highlight">clientes reales</span></h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Contraté muchas agencias antes. Démosle fue la primera que entendió mi negocio y lo trató como propio. En 6 meses duplicamos ventas."</p>
              <div className="testimonial-author">
                <strong>Francisco Morales</strong>
                <span>Escandalosos Pizza</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p>"Los números no mienten. 72 mil visualizaciones al mes y ventas que no paran de crecer. La mejor inversión que hice para mi pizzería."</p>
              <div className="testimonial-author">
                <strong>Propietario</strong>
                <span>Pizzas El Ranchito</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p>"Necesitaba una web profesional que transmitiera confianza. La obtuve en tiempo récord y las consultas aumentaron 200% el primer mes."</p>
              <div className="testimonial-author">
                <strong>Gerente Comercial</strong>
                <span>Sol del Maipo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estilos adicionales */}
      <style jsx>{`
        /* Featured Project */
        .project-card.featured {
          position: relative;
        }

        .featured-badge {
          position: absolute;
          top: -10px;
          left: 20px;
          background: var(--yellow);
          color: var(--black);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 3;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Project Card */
        .project-card {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        /* Imagen principal - 600x400px ratio 3:2 */
        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .project-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-link {
          background: none;
          border: none;
          color: var(--purple);
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          padding: 0;
        }

        .instagram-link {
          color: var(--purple);
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .instagram-link:hover {
          color: #E4405F;
          transform: scale(1.2);
        }

        /* Modal Styles */
        .project-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow-y: auto;
        }

        .project-modal {
          background: white;
          border-radius: 20px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--light-gray);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          transform: scale(1.1);
          background: var(--gray);
          color: white;
        }

        .modal-content {
          padding: 3rem;
        }

        @media (max-width: 768px) {
          .modal-content {
            padding: 2rem;
          }
        }

        /* Modal Header */
        .modal-header {
          margin-bottom: 2rem;
        }

        .modal-header h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: var(--black);
        }

        .project-meta {
          color: var(--gray);
          display: flex;
          gap: 0.5rem;
          font-size: 0.875rem;
          flex-wrap: wrap;
        }

        .services-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .service-tag {
          background: var(--purple);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
        }

        .project-sections {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .section h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--black);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
        }

        .achievement {
          text-align: center;
          padding: 1.5rem 1rem;
          background: var(--light-gray);
          border-radius: 10px;
        }

        .achievement-metric {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--purple);
          margin-bottom: 0.5rem;
        }

        .achievement-desc {
          font-size: 0.875rem;
          color: var(--gray);
          line-height: 1.4;
        }

        /* Testimonial */
        .testimonial {
          background: var(--light-gray);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
        }

        .quote-icon {
          color: var(--purple);
          margin-bottom: 1rem;
        }

        .testimonial blockquote {
          font-size: 1.125rem;
          font-style: italic;
          margin-bottom: 1rem;
          color: var(--black);
          line-height: 1.6;
        }

        .testimonial cite {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-style: normal;
        }

        .testimonial cite strong {
          color: var(--purple);
        }

        .testimonial cite span {
          color: var(--gray);
          font-size: 0.875rem;
        }

        /* Modal Actions */
        .modal-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .modal-actions .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--purple);
          border: 2px solid var(--purple);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }

        .btn-secondary:hover {
          background-color: var(--purple);
          color: white;
        }
      `}</style>
    </>
  );
};

export default Proyectos;