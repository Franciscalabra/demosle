import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, Star, TrendingUp, Shield, Truck, RefreshCw } from 'lucide-react';

const DemoSneakers = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Nike Air Max 270',
      price: '$89.990',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      rating: 4.8,
      hot: true
    },
    {
      id: 2,
      name: 'Adidas Ultraboost 22',
      price: '$94.990',
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Jordan 1 Retro High',
      price: '$129.990',
      image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=800&q=80',
      rating: 5.0,
      new: true
    },
    {
      id: 4,
      name: 'Puma RS-X³',
      price: '$74.990',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80',
      rating: 4.7
    }
  ];

  const sizes = [38, 39, 40, 41, 42, 43, 44];

  const addToCart = () => {
    setCartCount(cartCount + 1);
    alert('¡Producto agregado al carrito! 🛒');
  };

  return (
    <div className="demo-sneakers">
      {/* Header */}
      <header className="demo-header">
        <div className="demo-container">
          <div className="header-content">
            <h1 className="brand-logo">SneakerHub</h1>
            
            <nav className="demo-nav">
              <a href="#new">Nuevos</a>
              <a href="#men">Hombre</a>
              <a href="#women">Mujer</a>
              <a href="#sale" className="sale-link">SALE</a>
            </nav>

            <div className="header-actions">
              <button className="icon-btn">
                <Search size={20} />
              </button>
              <button className="icon-btn">
                <Heart size={20} />
              </button>
              <button className="cart-btn">
                <ShoppingCart size={20} />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-tag">Nueva Colección 2024</span>
          <h2>AIR MAX REVOLUTION</h2>
          <p>Descubre la comodidad del futuro con tecnología Air Max</p>
          <button className="hero-cta">Explorar Colección</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&q=80" alt="Nike Air Max" />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="demo-container">
          <div className="features-grid">
            <div className="feature">
              <Truck size={32} />
              <h4>Envío Gratis</h4>
              <p>En compras sobre $50.000</p>
            </div>
            <div className="feature">
              <RefreshCw size={32} />
              <h4>30 Días</h4>
              <p>Para cambios y devoluciones</p>
            </div>
            <div className="feature">
              <Shield size={32} />
              <h4>Garantía</h4>
              <p>Productos 100% originales</p>
            </div>
            <div className="feature">
              <TrendingUp size={32} />
              <h4>Tendencias</h4>
              <p>Los modelos más exclusivos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="demo-container">
          <div className="section-header">
            <h2>Productos Destacados</h2>
            <div className="filter-buttons">
              <button className="filter-btn active">Todos</button>
              <button className="filter-btn">Nike</button>
              <button className="filter-btn">Adidas</button>
              <button className="filter-btn">Jordan</button>
            </div>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <article key={product.id} className="product-card">
                {product.hot && <span className="badge hot">HOT</span>}
                {product.new && <span className="badge new">NEW</span>}
                
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <button className="wishlist-btn">
                    <Heart size={18} />
                  </button>
                </div>
                
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="rating">
                    <Star size={16} fill="currentColor" />
                    <span>{product.rating}</span>
                  </div>
                  <p className="price">{product.price}</p>
                  <button className="add-to-cart-btn" onClick={addToCart}>
                    Agregar al Carrito
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal Example */}
      <section className="product-detail">
        <div className="demo-container">
          <div className="detail-grid">
            <div className="product-gallery">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" alt="Nike Air Max 270" />
            </div>
            
            <div className="product-details">
              <h2>Nike Air Max 270</h2>
              <div className="rating-row">
                <div className="rating">
                  <Star size={20} fill="currentColor" />
                  <span>4.8 (234 reviews)</span>
                </div>
              </div>
              
              <p className="detail-price">$89.990</p>
              
              <div className="size-selector">
                <h4>Selecciona tu talla:</h4>
                <div className="sizes-grid">
                  {sizes.map(size => (
                    <button 
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="action-buttons">
                <button className="btn-primary" onClick={addToCart}>
                  <ShoppingCart size={20} />
                  Agregar al Carrito
                </button>
                <button className="btn-secondary">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="product-description">
                <h4>Descripción</h4>
                <p>
                  Las Nike Air Max 270 cuentan con la unidad Air más alta hasta la fecha 
                  para una comodidad sin precedentes. El diseño asimétrico ofrece un look 
                  moderno y llamativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="demo-container">
          <div className="newsletter-content">
            <h2>Únete al Club SneakerHub</h2>
            <p>Recibe 10% OFF en tu primera compra y acceso exclusivo a lanzamientos</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Tu email" />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
        </div>
      </section>

      {/* Demo Footer */}
      <footer className="demo-footer">
        <div className="demo-container">
          <p>© 2024 SneakerHub - Demo by Démosle.cl</p>
        </div>
      </footer>

      <style jsx>{`
        .demo-sneakers {
          font-family: 'Inter', sans-serif;
          color: #111;
          background: #fff;
        }

        /* Header */
        .demo-header {
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .brand-logo {
          font-size: 1.75rem;
          font-weight: 800;
          color: #111;
          margin: 0;
        }

        .demo-nav {
          display: flex;
          gap: 2rem;
        }

        .demo-nav a {
          color: #111;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .demo-nav a:hover {
          color: #ff4500;
        }

        .sale-link {
          color: #ff4500 !important;
          font-weight: 700;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .icon-btn, .cart-btn {
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          position: relative;
          color: #111;
        }

        .cart-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #ff4500;
          color: white;
          font-size: 0.75rem;
          padding: 2px 6px;
          border-radius: 10px;
          font-weight: 600;
        }

        /* Hero Banner */
        .hero-banner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 500px;
          background: #f5f5f5;
          overflow: hidden;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem;
        }

        .hero-tag {
          color: #ff4500;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .hero-content h2 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .hero-content p {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 2rem;
        }

        .hero-cta {
          background: #111;
          color: white;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          width: fit-content;
          transition: transform 0.3s;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
        }

        .hero-image {
          position: relative;
          overflow: hidden;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Features */
        .features-section {
          padding: 4rem 0;
          background: #fafafa;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .feature svg {
          color: #ff4500;
          margin-bottom: 1rem;
        }

        .feature h4 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }

        .feature p {
          color: #666;
          font-size: 0.875rem;
        }

        /* Products Section */
        .products-section {
          padding: 5rem 0;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
        }

        .filter-buttons {
          display: flex;
          gap: 1rem;
        }

        .filter-btn {
          padding: 0.5rem 1.5rem;
          border: 1px solid #ddd;
          background: white;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
        }

        .filter-btn.active, .filter-btn:hover {
          background: #111;
          color: white;
          border-color: #111;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .product-card {
          position: relative;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          z-index: 1;
        }

        .badge.hot {
          background: #ff4500;
          color: white;
        }

        .badge.new {
          background: #4caf50;
          color: white;
        }

        .product-image {
          position: relative;
          padding-top: 100%;
          background: #f5f5f5;
        }

        .product-image img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .wishlist-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }

        .wishlist-btn:hover {
          transform: scale(1.1);
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-info h3 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #ffa500;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 1rem;
        }

        .add-to-cart-btn {
          width: 100%;
          padding: 0.75rem;
          background: #111;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .add-to-cart-btn:hover {
          background: #ff4500;
        }

        /* Product Detail */
        .product-detail {
          padding: 5rem 0;
          background: #fafafa;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .product-gallery img {
          width: 100%;
          border-radius: 12px;
        }

        .product-details h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .rating-row {
          margin-bottom: 2rem;
        }

        .detail-price {
          font-size: 2rem;
          font-weight: 700;
          color: #ff4500;
          margin-bottom: 2rem;
        }

        .size-selector {
          margin-bottom: 2rem;
        }

        .size-selector h4 {
          margin-bottom: 1rem;
        }

        .sizes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
          gap: 0.75rem;
        }

        .size-btn {
          padding: 0.75rem;
          border: 2px solid #ddd;
          background: white;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .size-btn:hover, .size-btn.selected {
          border-color: #111;
          background: #111;
          color: white;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .btn-primary {
          flex: 1;
          padding: 1rem;
          background: #ff4500;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background 0.3s;
        }

        .btn-primary:hover {
          background: #e63e00;
        }

        .btn-secondary {
          padding: 1rem;
          background: white;
          border: 2px solid #ddd;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          border-color: #ff4500;
          color: #ff4500;
        }

        .product-description h4 {
          margin-bottom: 1rem;
        }

        .product-description p {
          color: #666;
          line-height: 1.6;
        }

        /* Newsletter */
        .newsletter {
          padding: 5rem 0;
          background: #111;
          color: white;
        }

        .newsletter-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .newsletter p {
          margin-bottom: 2rem;
          opacity: 0.8;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .newsletter-form input {
          flex: 1;
          padding: 1rem;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          color: white;
          border-radius: 8px;
        }

        .newsletter-form input::placeholder {
          color: rgba(255,255,255,0.5);
        }

        .newsletter-form button {
          padding: 1rem 2rem;
          background: #ff4500;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        /* Footer */
        .demo-footer {
          padding: 2rem 0;
          background: #fafafa;
          text-align: center;
          color: #666;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .demo-nav {
            display: none;
          }

          .hero-banner {
            grid-template-columns: 1fr;
          }

          .hero-content {
            padding: 3rem;
          }

          .hero-content h2 {
            font-size: 2.5rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .detail-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .section-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .filter-buttons {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default DemoSneakers;