import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              Démosle<span className="logo-dot">.</span>
            </h3>
            <p className="footer-tagline">
              Ideas que conectan, marcas que venden.
            </p>
            <div className="social-links">
              <a href="https://wa.me/56942740261" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href="https://instagram.com/demosle.cl" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:hola@demosle.cl" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><Link to="/servicios#community">Community & Contenido</Link></li>
              <li><Link to="/servicios#web">Páginas Web</Link></li>
              <li><Link to="/servicios#estrategia">Estrategia Creativa</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/proyectos">Proyectos</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hablemos</h4>
            <p className="contact-info">
              <Phone size={16} /> +569 4274 0261
            </p>
            <p className="contact-info">
              <Mail size={16} /> hola@demosle.cl
            </p>
            <a href="https://wa.me/56942740261" className="footer-cta">
              <MessageCircle size={18} />
              Escríbenos ahora
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Démosle.cl - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;