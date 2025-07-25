import React from 'react';
import { Heart, Zap, Target, Palette, Users, Coffee } from 'lucide-react';

const Nosotros = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Somos <span className="highlight">Démosle</span></h1>
          <p>La agencia que combina estrategia profesional con ejecución ágil</p>
        </div>
      </section>

      {/* About Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Marketing digital sin verso</h2>
              <p className="lead">
                Nacimos cansados de ver negocios buenos fracasar por mal marketing. De escuchar 
                promesas vacías de "influencers" improvisados. De presupuestos inflados sin resultados claros.
              </p>
              <p>
                <strong>Démosle</strong> es nuestra respuesta: una agencia boutique que piensa en grande 
                pero actúa rápido. Combinamos la experiencia de años en el mercado con la agilidad 
                de un equipo apasionado.
              </p>
              <p>
                No somos gurúes ni vendemos la pomada. Somos profesionales digitales obsesionados 
                con hacer crecer tu negocio.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <Zap size={80} className="text-purple" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Nuestra forma de <span className="highlight">trabajar</span></h2>
          
          <div className="values-grid">
            <div className="value-card">
              <Target size={40} />
              <h3>Estrategia primero</h3>
              <p>Cada acción tiene un porqué. Analizamos, planificamos y después ejecutamos. Nada al lulo.</p>
            </div>
            
            <div className="value-card">
              <Zap size={40} />
              <h3>Velocidad de startup</h3>
              <p>Mientras otros hacen reuniones, nosotros ya estamos implementando. Resultados en días, no meses.</p>
            </div>
            
            <div className="value-card">
              <Palette size={40} />
              <h3>Creatividad con datos</h3>
              <p>Creatividad bacán respaldada por datos duros. Cada decisión con métricas reales.</p>
            </div>
            
            <div className="value-card">
              <Users size={40} />
              <h3>Partners, no proveedores</h3>
              <p>Tu éxito es nuestro éxito. Trabajamos codo a codo, transparentes y comprometidos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section purple-bg">
        <div className="container">
          <div className="team-content">
            <h2>El equipo que hace <span className="highlight-yellow">la diferencia</span></h2>
            <p className="team-intro">
              Formamos un equipo que la lleva. Profesionales que piensan, creativos que venden, estrategas que ejecutan.
            </p>
            
            <div className="founder-quote">
              <blockquote>
                "Empecé Démosle porque vi demasiados negocios increíbles ahogarse en un mar de contenido genérico. 
                No creo en fórmulas mágicas ni en copiar lo que funciona para otros. 
                <br/><br/>
                Creo en entender cada negocio como único. En crear estrategias a medida que respeten tu esencia 
                pero te lleven al siguiente nivel. En medir todo, optimizar siempre, y celebrar cada venta como 
                si fuera la primera.
                <br/><br/>
                Formé un equipo que comparte esta visión: profesionales que cachán, creativos que venden, 
                estrategas que ejecutan."
              </blockquote>
              <cite>— Fran, CEO y Fundadora</cite>
            </div>
            
            <div className="team-values">
              <div className="team-value">
                <Users size={32} />
                <h4>Equipo multidisciplinario</h4>
                <p>Diseñadores, copywriters, estrategas y desarrolladores trabajando en sincronía.</p>
              </div>
              <div className="team-value">
                <Coffee size={32} />
                <h4>Cultura colaborativa</h4>
                <p>Trabajamos codo a codo contigo, como parte de tu equipo, no como proveedores externos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <h2>Nuestros principios</h2>
          
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Sin ego, con resultados</h3>
              <p>No nos importa tener la razón, nos importa que funcione. Probamos, medimos, ajustamos.</p>
            </div>
            
            <div className="philosophy-item">
              <h3>Transparencia total</h3>
              <p>Precios claros, procesos simples, comunicación directa. Sin letra chica ni sorpresas.</p>
            </div>
            
            <div className="philosophy-item">
              <h3>Obsesión por el detalle</h3>
              <p>Cuidamos cada pixel, cada palabra, cada interacción. La excelencia está en los detalles.</p>
            </div>
            
            <div className="philosophy-item">
              <h3>Mejora continua</h3>
              <p>Lo que funcionó ayer puede mejorar mañana. Siempre estamos optimizando y aprendiendo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section yellow-bg">
        <div className="container">
          <div className="cta-content">
            <h2>¿Te tinca nuestra forma de pensar?</h2>
            <p>Trabajemos juntos. Hagamos crecer tu negocio con ideas que funcionan.</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/56932252978"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-black"
              >
                Conversemos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;