import React, { useEffect } from 'react';
// PASO 1: Cambiar la importación a HashRouter
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Páginas
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Demos from './pages/Demos';

// Demos
import DemoSneakers from './pages/demos/DemoSneakers';
import DemoVeterinaria from './pages/demos/DemoVeterinaria';
import DemoGimnasio from './pages/demos/DemoGimnasio';
import DemoSushi from './pages/demos/DemoSushi';
import DemoBoutique from './pages/demos/DemoBoutique';

// Estilos
import './styles/main.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  // PASO 2: El componente <Router> ahora es un HashRouter gracias a la importación
  return (
    <Router> 
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/demos/sneakers" element={<DemoSneakers />} />
            <Route path="/demos/veterinaria" element={<DemoVeterinaria />} />
            <Route path="/demos/gimnasio" element={<DemoGimnasio />} />
            <Route path="/demos/sushi" element={<DemoSushi />} />
            <Route path="/demos/boutique" element={<DemoBoutique />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;