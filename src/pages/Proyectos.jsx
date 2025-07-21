import React, { useState } from 'react';
import { ExternalLink, Users, Globe, Sparkles } from 'lucide-react';

const Proyectos = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Pizzería Escandalosos',
      category: 'web',
      description: 'Sitio web y sistema de pedidos online que aumentó las ventas en 180%',
      image: '/api/placeholder/600/400',
      tags: ['Diseño Web', 'E-commerce', 'UX/UI'],
      results: '+180% en ventas online',
      link: 'https://escandalosos.cl'
    },
    {
      id: 2,
      title: 'Boutique María Elena',
      category: 'community',
      description: 'Estrategia de redes sociales que triplicó el engagement y duplicó las ventas',
      image: '/api/placeholder/600/400',
      tags: ['Instagram', 'Facebook', 'Contenido'],
      results: '15K seguidores en 3 meses',
      link: '#'
    },
    {
      id: 3,
      title: 'Clínica Dental Sonrisas',
      category: 'estrategia',
      description: 'Rebranding completo y campaña digital que posicionó la marca como líder local',
      image: '/api/placeholder/600/400',
      tags: ['Branding', 'Estrategia', 'Publicidad'],
      results: '250% más pacientes nuevos',
      link: '#'
    },
    {
      id: 4,
      title: 'Gimnasio PowerFit',
      category: 'web',
      description: 'Landing page con sistema de reservas que automatizó el 90% de las inscripciones',
      image: '/api/placeholder/600/400',
      tags: ['Landing Page', 'Automatización', 'Conversión'],
      results: '90% procesos automatizados',
      link: '#'
    },
    {
      id: 5,
      title: 'Café del Barrio',
      category: 'community',
      description: 'Community management que creó una comunidad fiel de +5000 clientes activos',
      image: '/api/placeholder/600/400',
      tags: ['Community', 'WhatsApp', 'Fidelización'],
      results: '5000 clientes en WhatsApp',
      link: '#'
    },
    {
      id: 6,
      title: 'Tienda Verde Vida',
      category: 'estrategia',
      description: 'Identidad de marca y estrategia eco-friendly que conectó con el público objetivo',
      image: '/api/placeholder/600/400',
      tags: ['Identidad', 'Sostenibilidad', 'Marketing'],
      results: 'Top 3 tiendas eco en Santiago',
      link: '#'
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
            No mostramos todos nuestros trabajos. Solo los que nos enorgullecen. 
            Cada proyecto aquí representa un negocio que confió en nosotros y hoy celebra resultados extraordinarios.
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
              <article key={project.id} className="project-card">
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
                  {project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Ver proyecto <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                <strong>María González</strong>
                <span>Boutique María Elena</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p>"No son los típicos millennials que prometen likes. Son profesionales que entienden de negocios y entregan resultados. Inversión 100% recuperada."</p>
              <div className="testimonial-author">
                <strong>Carlos Ruiz</strong>
                <span>CEO TechStartup</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p>"Me cansé de 'expertos' de Instagram. Démosle me trajo estrategia real, métricas claras y ventas constantes. Son mi equipo de marketing permanente."</p>
              <div className="testimonial-author">
                <strong>Ana Martínez</strong>
                <span>Fundadora GreenLife</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyectos;