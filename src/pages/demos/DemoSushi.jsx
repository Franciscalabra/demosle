import React, { useState } from 'react';
import { Fish, Clock, MapPin, Phone, Star, ShoppingBag, Plus, Minus, Calendar, Users } from 'lucide-react';

const DemoSushi = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('rolls');

  const categories = [
    { id: 'rolls', name: 'Rolls', icon: '🍣' },
    { id: 'nigiri', name: 'Nigiri', icon: '🍣' },
    { id: 'sashimi', name: 'Sashimi', icon: '🐟' },
    { id: 'calientes', name: 'Calientes', icon: '🔥' },
    { id: 'bebidas', name: 'Bebidas', icon: '🥤' }
  ];

  const menuItems = {
    rolls: [
      {
        id: 1,
        name: 'California Roll',
        description: 'Kanikama, palta, pepino, envuelto en sésamo',
        price: 7990,
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80',
        popular: true
      },
      {
        id: 2,
        name: 'Spicy Tuna Roll',
        description: 'Atún picante, cebollín, pepino, salsa spicy mayo',
        price: 8990,
        image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80'
      },
      {
        id: 3,
        name: 'Dragon Roll',
        description: 'Camarón tempura, palta por fuera, salsa teriyaki',
        price: 10990,
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80',
        chef: true
      },
      {
        id: 4,
        name: 'Philadelphia Roll',
        description: 'Salmón, queso crema, palta, cebollín',
        price: 9490,
        image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80'
      }
    ],
    nigiri: [
      {
        id: 5,
        name: 'Nigiri Salmón',
        description: 'Salmón fresco sobre arroz (2 piezas)',
        price: 4990,
        image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&q=80'
      },
      {
        id: 6,
        name: 'Nigiri Atún',
        description: 'Atún rojo sobre arroz (2 piezas)',
        price: 5990,
        image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&q=80'
      }
    ]
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="demo-sushi">
      {/* Header */}
      <header className="sushi-header">
        <div className="sushi-container">
          <div className="header-content">
            <h1 className="sushi-logo">
              <Fish size={32} />
              Sakura Sushi
            </h1>
            
            <nav className="sushi-nav">
              <a href="#menu">Menú</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#reservas">Reservas</a>
              <a href="#contacto">Contacto</a>
            </nav>
            
            <button className="cart-button">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="sushi-hero">
        <div className="hero-content">
          <span className="hero-tag">Auténtico Sushi Japonés</span>
          <h2>Experiencia <span>Sakura</span></h2>
          <p>Los mejores ingredientes, la tradición más pura</p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              Ver Menú Completo
            </button>
            <button className="btn-secondary">
              <Phone size={18} />
              Pedir Ahora
            </button>
          </div>
          
          <div className="hero-info">
            <div className="info-item">
              <Clock size={16} />
              <span>Delivery 30-45 min</span>
            </div>
            <div className="info-item">
              <Star size={16} />
              <span>4.9 (500+ reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="hero-images">
          <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80" alt="Sushi premium" className="hero-img-1" />
          <img src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80" alt="Chef preparando sushi" className="hero-img-2" />
        </div>
      </section>

      {/* Features */}
      <section className="features-bar">
        <div className="sushi-container">
          <div className="features-grid">
            <div className="feature">
              <span className="feature-icon">🐟</span>
              <div>
                <strong>Pescado Fresco</strong>
                <p>Importado diariamente</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">👨‍🍳</span>
              <div>
                <strong>Chef Japonés</strong>
                <p>20 años de experiencia</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <div>
                <strong>Delivery Gratis</strong>
                <p>En pedidos sobre $25.000</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <div>
                <strong>Garantía</strong>
                <p>100% satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section" id="menu">
        <div className="sushi-container">
          <div className="section-header">
            <h2>Nuestro Menú</h2>
            <p>Preparado con los ingredientes más frescos</p>
          </div>
          
          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="tab-icon">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
          
          {/* Menu Grid */}
          <div className="menu-grid">
            {(menuItems[activeCategory] || menuItems.rolls).map(item => (
              <article key={item.id} className="menu-item">
                {item.popular && <span className="badge popular">Popular</span>}
                {item.chef && <span className="badge chef">Chef's Choice</span>}
                
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-content">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  
                  <div className="item-footer">
                    <span className="price">${item.price.toLocaleString()}</span>
                    <button className="add-btn" onClick={() => addToCart(item)}>
                      <Plus size={16} />
                      Agregar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Section */}
      {cartItems.length > 0 && (
        <div className="floating-cart">
          <div className="cart-header">
            <h4>Tu Pedido ({cartCount} items)</h4>
          </div>
          
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div>
                  <h5>{item.name}</h5>
                  <p className="item-price">${item.price.toLocaleString()}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-total">
            <span>Total:</span>
            <strong>${cartTotal.toLocaleString()}</strong>
          </div>
          
          <button className="checkout-btn">
            Finalizar Pedido
          </button>
        </div>
      )}

      {/* About Section */}
      <section className="about-section" id="nosotros">
        <div className="sushi-container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-tag">Nuestra Historia</span>
              <h2>Tradición japonesa en cada plato</h2>
              <p>
                Desde 2010, Sakura Sushi ha sido el referente del auténtico sushi japonés en Santiago. 
                Nuestro chef Takashi Yamamoto trae más de 20 años de experiencia desde Tokyo.
              </p>
              <p>
                Utilizamos solo los ingredientes más frescos, importados directamente de Japón, 
                para garantizar una experiencia gastronómica única.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <strong>10+</strong>
                  <span>Años de experiencia</span>
                </div>
                <div className="stat">
                  <strong>50K+</strong>
                  <span>Clientes felices</span>
                </div>
                <div className="stat">
                  <strong>4.9⭐</strong>
                  <span>Calificación</span>
                </div>
              </div>
            </div>
            
            <div className="about-images">
              <img src="https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&q=80" alt="Chef preparando sushi" />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="reservation-section" id="reservas">
        <div className="sushi-container">
          <div className="reservation-content">
            <h2>Reserva tu mesa</h2>
            <p>Disfruta de la experiencia completa en nuestro restaurante</p>
            
            <form className="reservation-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>
                    <Calendar size={16} />
                    Fecha
                  </label>
                  <input type="date" required />
                </div>
                
                <div className="form-group">
                  <label>
                    <Clock size={16} />
                    Hora
                  </label>
                  <select required>
                    <option value="">Selecciona hora</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>
                    <Users size={16} />
                    Personas
                  </label>
                  <select required>
                    <option value="">Selecciona</option>
                    <option value="2">2 personas</option>
                    <option value="4">4 personas</option>
                    <option value="6">6 personas</option>
                    <option value="8">8+ personas</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="reserve-btn">
                Reservar Mesa
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contacto">
        <div className="sushi-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Visítanos</h3>
              <div className="info-item">
                <MapPin size={20} />
                <div>
                  <strong>Providencia</strong>
                  <p>Av. Providencia 2124, Local 5</p>
                </div>
              </div>
              
              <div className="info-item">
                <Clock size={20} />
                <div>
                  <strong>Horarios</strong>
                  <p>Lun-Sáb: 12:00 - 23:00</p>
                  <p>Dom: 12:00 - 22:00</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone size={20} />
                <div>
                  <strong>Contacto</strong>
                  <p>+56 2 2345 6789</p>
                  <p>hola@sakurasushi.cl</p>
                </div>
              </div>
            </div>
            
            <div className="delivery-zones">
              <h3>Zonas de Delivery</h3>
              <p>Entregamos en las siguientes comunas:</p>
              <div className="zones-list">
                <span>Providencia</span>
                <span>Las Condes</span>
                <span>Vitacura</span>
                <span>La Reina</span>
                <span>Ñuñoa</span>
                <span>Santiago Centro</span>
              </div>
              <p className="delivery-note">
                <Clock size={16} />
                Tiempo estimado: 30-45 minutos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sushi-footer">
        <div className="sushi-container">
          <p>© 2024 Sakura Sushi - Demo by Démosle.cl</p>
        </div>
      </footer>

      <style jsx>{`
        .demo-sushi {
          font-family: 'Inter', sans-serif;
          color: #1a1a1a;
          background: #fff;
        }

        /* Header */
        .sushi-header {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .sushi-container {
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

        .sushi-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.75rem;
          font-weight: 700;
          color: #dc2626;
          margin: 0;
        }

        .sushi-nav {
          display: flex;
          gap: 2.5rem;
        }

        .sushi-nav a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .sushi-nav a:hover {
          color: #dc2626;
        }

        .cart-button {
          position: relative;
          background: #fee2e2;
          color: #dc2626;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .cart-button:hover {
          background: #dc2626;
          color: white;
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #dc2626;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }

        /* Hero Section */
        .sushi-hero {
          padding: 5rem 0;
          background: linear-gradient(135deg, #fef3c7 0%, #fee2e2 100%);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-tag {
          display: inline-block;
          background: #dc2626;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .hero-content h2 {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-content h2 span {
          color: #dc2626;
        }

        .hero-content p {
          font-size: 1.25rem;
          color: #6b7280;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .btn-primary {
          background: #dc2626;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #b91c1c;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: white;
          color: #dc2626;
          border: 2px solid #dc2626;
          padding: 1rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: #dc2626;
          color: white;
        }

        .hero-info {
          display: flex;
          gap: 2rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6b7280;
          font-size: 0.875rem;
        }

        .hero-images {
          position: relative;
          height: 500px;
        }

        .hero-img-1 {
          position: absolute;
          top: 0;
          right: 0;
          width: 70%;
          height: 350px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .hero-img-2 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50%;
          height: 250px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        /* Features Bar */
        .features-bar {
          background: #1f2937;
          color: white;
          padding: 2rem 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .feature-icon {
          font-size: 2rem;
        }

        .feature strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .feature p {
          font-size: 0.875rem;
          opacity: 0.8;
          margin: 0;
        }

        /* Menu Section */
        .menu-section {
          padding: 5rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: #6b7280;
          font-size: 1.125rem;
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .category-tab {
          background: white;
          border: 2px solid #e5e7eb;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .category-tab:hover {
          border-color: #dc2626;
          color: #dc2626;
        }

        .category-tab.active {
          background: #dc2626;
          color: white;
          border-color: #dc2626;
        }

        .tab-icon {
          font-size: 1.25rem;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .menu-item {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          position: relative;
          transition: transform 0.3s;
        }

        .menu-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }

        .badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 1;
        }

        .badge.popular {
          background: #fbbf24;
          color: #78350f;
        }

        .badge.chef {
          background: #dc2626;
          color: white;
        }

        .item-image {
          height: 200px;
          overflow: hidden;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .menu-item:hover .item-image img {
          transform: scale(1.05);
        }

        .item-content {
          padding: 1.5rem;
        }

        .item-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .item-description {
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .item-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #dc2626;
        }

        .add-btn {
          background: #dc2626;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.3s;
        }

        .add-btn:hover {
          background: #b91c1c;
        }

        /* Floating Cart */
        .floating-cart {
          position: fixed;
          right: 2rem;
          bottom: 2rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          width: 350px;
          max-height: 500px;
          z-index: 200;
        }

        .cart-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .cart-header h4 {
          margin: 0;
        }

        .cart-items {
          padding: 1rem;
          max-height: 300px;
          overflow-y: auto;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .cart-item h5 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
        }

        .item-price {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .quantity-controls button {
          background: #f3f4f6;
          border: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s;
        }

        .quantity-controls button:hover {
          background: #e5e7eb;
        }

        .cart-total {
          padding: 1.5rem;
          border-top: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.125rem;
        }

        .checkout-btn {
          width: calc(100% - 3rem);
          margin: 0 1.5rem 1.5rem;
          padding: 1rem;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .checkout-btn:hover {
          background: #b91c1c;
        }

        /* About Section */
        .about-section {
          padding: 5rem 0;
          background: #f9fafb;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-tag {
          display: inline-block;
          background: #fee2e2;
          color: #dc2626;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .about-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .about-content p {
          color: #6b7280;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .about-stats {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat strong {
          display: block;
          font-size: 2rem;
          color: #dc2626;
          margin-bottom: 0.25rem;
        }

        .stat span {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .about-images img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        /* Reservation Section */
        .reservation-section {
          padding: 5rem 0;
          background: #dc2626;
          color: white;
        }

        .reservation-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .reservation-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .reservation-content p {
          font-size: 1.125rem;
          margin-bottom: 3rem;
          opacity: 0.9;
        }

        .reservation-form {
          background: white;
          padding: 2rem;
          border-radius: 15px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          text-align: left;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #374151;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
        }

        .reserve-btn {
          width: 100%;
          padding: 1rem;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .reserve-btn:hover {
          background: #b91c1c;
        }

        /* Contact Section */
        .contact-section {
          padding: 5rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-info h3,
        .delivery-zones h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-info .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-info .info-item svg {
          color: #dc2626;
          flex-shrink: 0;
        }

        .contact-info strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .contact-info p {
          color: #6b7280;
          margin: 0;
        }

        .zones-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }

        .zones-list span {
          background: #fee2e2;
          color: #dc2626;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .delivery-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6b7280;
          font-size: 0.875rem;
        }

        /* Footer */
        .sushi-footer {
          background: #1f2937;
          color: white;
          padding: 2rem 0;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .sushi-nav {
            display: none;
          }

          .sushi-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content h2 {
            font-size: 2.5rem;
          }

          .hero-images {
            display: none;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .floating-cart {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .category-tabs {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            justify-content: flex-start;
          }

          .menu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default DemoSushi;