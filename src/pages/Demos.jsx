import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Dumbbell, Fish, Store, Sparkles, ExternalLink } from 'lucide-react';

const Demos = () => {
  const demos = [
    {
      id: 'sneakers',
      title: 'SneakerHub',
      description: 'E-commerce moderno para venta de zapatillas exclusivas',
      icon: <ShoppingBag size={40} />,
      color: 'from-orange-500 to-red-500',
      tags: ['E-commerce', 'Catálogo', 'Carrito', 'Responsive'],
      preview: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
    },
    {
      id: 'veterinaria',
      title: 'VetCare+',
      description: 'Portal veterinario con sistema de citas online',
      icon: <Heart size={40} />,
      color: 'from-green-500 to-teal-500',
      tags: ['Servicios', 'Reservas', 'Blog', 'Testimonios'],
      preview: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80'
    },
    {
      id: 'gimnasio',
      title: 'PowerFit Gym',
      description: 'Landing page para gimnasio con clases y membresías',
      icon: <Dumbbell size={40} />,
      color: 'from-gray-900 to-gray-700',
      tags: ['Fitness', 'Horarios', 'Planes', 'Galería'],
      preview: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'
    },
    {
      id: 'sushi',
      title: 'Sakura Sushi',
      description: 'Restaurant japonés con menú interactivo y delivery',
      icon: <Fish size={40} />,
      color: 'from-red-500 to-pink-500',
      tags: ['Restaurant', 'Menú', 'Delivery', 'Reservas'],
      preview: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80'
    },
    {
      id: 'boutique',
      title: 'Trendy Boutique',
      description: 'Tienda de moda con lookbook y colecciones',
      icon: <Store size={40} />,
      color: 'from-purple-500 to-pink-500',
      tags: ['Moda', 'Lookbook', 'Colecciones', 'Newsletter'],
      preview: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Demos <span className="highlight">en vivo</span></h1>
          <p>Explora ejemplos reales de lo que podemos crear para tu negocio</p>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="demos-section">
        <div className="container">
          <div className="section-header">
            <h2>Diseños que <span className="highlight-yellow">convierten</span></h2>
            <p>Cada demo es un ejemplo funcional de sitios web que hemos creado. 
               Navega, interactúa y visualiza cómo podría verse tu próximo sitio web.</p>
          </div>

          <div className="demos-grid">
            {demos.map((demo) => (
              <article key={demo.id} className="demo-card">
                <Link to={`/demos/${demo.id}`} className="demo-link">
                  <div className="demo-image">
                    <img src={demo.preview} alt={demo.title} />
                    <div className="demo-overlay">
                      <span className="view-demo">
                        Ver Demo <ExternalLink size={20} />
                      </span>
                    </div>
                  </div>
                  
                  <div className="demo-content">
                    <div className={`demo-icon bg-gradient-to-br ${demo.color}`}>
                      {demo.icon}
                    </div>
                    
                    <h3>{demo.title}</h3>
                    <p>{demo.description}</p>
                    
                    <div className="demo-tags">
                      {demo.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="demos-cta">
            <Sparkles size={32} className="text-purple" />
            <h3>¿Te gusta algún diseño?</h3>
            <p>Podemos personalizar cualquier demo según tus necesidades y marca.</p>
            <Link to="/contacto" className="btn btn-primary">
              Solicitar diseño similar
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .demos-section {
          padding: 5rem 0;
          background: var(--white);
        }

        .demos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .demo-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 30px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .demo-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .demo-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .demo-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .demo-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .demo-card:hover .demo-image img {
          transform: scale(1.05);
        }

        .demo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .demo-card:hover .demo-overlay {
          opacity: 1;
        }

        .view-demo {
          background: var(--purple);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .demo-card:hover .view-demo {
          transform: translateY(0);
        }

        .demo-content {
          padding: 2rem;
        }

        .demo-icon {
          width: 70px;
          height: 70px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
        }

        .demo-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--black);
        }

        .demo-content p {
          color: var(--gray);
          margin-bottom: 1.5rem;
        }

        .demo-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background: var(--light-gray);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.875rem;
          color: var(--gray);
        }

        .demos-cta {
          text-align: center;
          margin-top: 5rem;
          padding: 3rem;
          background: var(--light-gray);
          border-radius: 20px;
        }

        .demos-cta h3 {
          font-size: 2rem;
          margin: 1rem 0;
        }

        .demos-cta p {
          color: var(--gray);
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .demos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Demos;