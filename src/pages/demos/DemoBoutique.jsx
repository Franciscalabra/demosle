import React, { useState } from 'react';
import { Store, Heart, ShoppingBag, Search, User, Star, TrendingUp, Package, Tag, Instagram } from 'lucide-react';

const DemoBoutique = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlist, setWishlist] = useState([]);

  const collections = [
    {
      id: 1,
      name: 'Summer Vibes',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
      count: '25 items'
    },
    {
      id: 2,
      name: 'Work & Play',
      image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&q=80',
      count: '18 items'
    },
    {
      id: 3,
      name: 'Weekend Casual',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80',
      count: '32 items'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Vestido Floral Midi',
      price: 49990,
      originalPrice: 69990,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80',
      category: 'vestidos',
      new: true,
      discount: '-30%'
    },
    {
      id: 2,
      name: 'Blazer Oversized',
      price: 89990,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80',
      category: 'chaquetas',
      trending: true
    },
    {
      id: 3,
      name: 'Jeans High Waist',
      price: 39990,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
      category: 'pantalones',
      bestseller: true
    },
    {
      id: 4,
      name: 'Top Seda Natural',
      price: 34990,
      image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80',
      category: 'tops'
    },
    {
      id: 5,
      name: 'Falda Plisada',
      price: 45990,
      originalPrice: 59990,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80',
      category: 'faldas',
      discount: '-25%'
    },
    {
      id: 6,
      name: 'Sweater Cashmere',
      price: 79990,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80',
      category: 'sweaters',
      exclusive: true
    }
  ];

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="demo-boutique">
      {/* Header */}
      <header className="boutique-header">
        <div className="header-top">
          <p>Envío gratis en compras sobre $50.000 ✨</p>
        </div>
        
        <div className="boutique-container">
          <div className="header-main">
            <h1 className="boutique-logo">
              <Store size={28} />
              Trendy Boutique
            </h1>
            
            <nav className="boutique-nav">
              <a href="#new">Nuevo</a>
              <a href="#sale" className="sale">Sale</a>
              <a href="#collections">Colecciones</a>
              <a href="#about">Nosotras</a>
              <a href="#contact">Contacto</a>
            </nav>
            
            <div className="header-actions">
              <button className="icon-btn">
                <Search size={20} />
              </button>
              <button className="icon-btn">
                <User size={20} />
              </button>
              <button className="icon-btn wishlist-btn">
                <Heart size={20} />
                {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
              </button>
              <button className="icon-btn cart-btn">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="boutique-hero">
        <div className="hero-content">
          <span className="season-tag">Nueva Colección SS24</span>
          <h2>Define tu estilo</h2>
          <p>Prendas únicas que cuentan tu historia</p>
          <button className="hero-cta">
            Explorar Colección
          </button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" alt="Fashion collection" />
        </div>
      </section>

      {/* Features Bar */}
      <section className="features-bar">
        <div className="boutique-container">
          <div className="features-grid">
            <div className="feature">
              <Package size={24} />
              <div>
                <strong>Envío Gratis</strong>
                <p>En compras sobre $50.000</p>
              </div>
            </div>
            <div className="feature">
              <TrendingUp size={24} />
              <div>
                <strong>15 días</strong>
                <p>Para cambios</p>
              </div>
            </div>
            <div className="feature">
              <Tag size={24} />
              <div>
                <strong>10% OFF</strong>
                <p>Primera compra</p>
              </div>
            </div>
            <div className="feature">
              <Heart size={24} />
              <div>
                <strong>Calidad</strong>
                <p>Premium garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="collections-section">
        <div className="boutique-container">
          <div className="section-header">
            <h2>Shop by Collection</h2>
            <p>Estilos curados para cada ocasión</p>
          </div>
          
          <div className="collections-grid">
            {collections.map(collection => (
              <article key={collection.id} className="collection-card">
                <div className="collection-image">
                  <img src={collection.image} alt={collection.name} />
                  <div className="collection-overlay">
                    <h3>{collection.name}</h3>
                    <p>{collection.count}</p>
                    <button className="explore-btn">Explorar</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="boutique-container">
          <div className="section-header">
            <h2>Productos Destacados</h2>
            <div className="filter-tabs">
              <button 
                className={selectedCategory === 'all' ? 'active' : ''}
                onClick={() => setSelectedCategory('all')}
              >
                Todos
              </button>
              <button 
                className={selectedCategory === 'vestidos' ? 'active' : ''}
                onClick={() => setSelectedCategory('vestidos')}
              >
                Vestidos
              </button>
              <button 
                className={selectedCategory === 'tops' ? 'active' : ''}
                onClick={() => setSelectedCategory('tops')}
              >
                Tops
              </button>
              <button 
                className={selectedCategory === 'pantalones' ? 'active' : ''}
                onClick={() => setSelectedCategory('pantalones')}
              >
                Pantalones
              </button>
            </div>
          </div>
          
          <div className="products-grid">
            {filteredProducts.map(product => (
              <article key={product.id} className="product-card">
                {product.new && <span className="tag new">NEW</span>}
                {product.trending && <span className="tag trending">TRENDING</span>}
                {product.bestseller && <span className="tag bestseller">BESTSELLER</span>}
                {product.exclusive && <span className="tag exclusive">EXCLUSIVE</span>}
                {product.discount && <span className="tag discount">{product.discount}</span>}
                
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button className="quick-view">Vista Rápida</button>
                  </div>
                  <button 
                    className={`wishlist-toggle ${wishlist.includes(product.id) ? 'active' : ''}`}
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart size={18} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="price-info">
                    <span className="price">${product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <div className="product-actions">
                    <button className="add-to-cart">
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="lookbook-section">
        <div className="boutique-container">
          <div className="lookbook-grid">
            <div className="lookbook-content">
              <span className="section-tag">#TrendyLook</span>
              <h2>Get the Look</h2>
              <p>Inspírate con nuestros outfits curados por stylists profesionales</p>
              <button className="lookbook-btn">
                Ver Lookbook Completo
              </button>
              
              <div className="social-proof">
                <div className="rating">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p>4.9/5 basado en 2,500+ reviews</p>
              </div>
            </div>
            
            <div className="lookbook-images">
              <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&q=80" alt="Outfit 1" className="look-1" />
              <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=400&q=80" alt="Outfit 2" className="look-2" />
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" alt="Outfit 3" className="look-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="boutique-container">
          <div className="newsletter-content">
            <h2>Únete al Club Trendy</h2>
            <p>Recibe 10% OFF en tu primera compra + acceso exclusivo a preventa</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Tu email" />
              <button type="submit">Suscribirse</button>
            </form>
            <p className="privacy-note">
              Respetamos tu privacidad. Puedes desuscribirte cuando quieras.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="instagram-section">
        <div className="boutique-container">
          <div className="section-header">
            <h2>
              <Instagram size={24} />
              @trendyboutique
            </h2>
            <p>Síguenos para inspiración diaria</p>
          </div>
          
          <div className="instagram-grid">
            <div className="insta-post">
              <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&q=80" alt="Instagram 1" />
            </div>
            <div className="insta-post">
              <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&q=80" alt="Instagram 2" />
            </div>
            <div className="insta-post">
              <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&q=80" alt="Instagram 3" />
            </div>
            <div className="insta-post">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=80" alt="Instagram 4" />
            </div>
            <div className="insta-post">
              <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80" alt="Instagram 5" />
            </div>
            <div className="insta-post">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&q=80" alt="Instagram 6" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="boutique-footer">
        <div className="boutique-container">
          <p>© 2024 Trendy Boutique - Demo by Démosle.cl</p>
        </div>
      </footer>

      <style jsx>{`
        .demo-boutique {
          font-family: 'Inter', sans-serif;
          color: #1a1a1a;
          background: #fff;
        }

        /* Header */
        .header-top {
          background: #ec4899;
          color: white;
          text-align: center;
          padding: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .boutique-header {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .boutique-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .header-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .boutique-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .boutique-nav {
          display: flex;
          gap: 2rem;
        }

        .boutique-nav a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .boutique-nav a:hover {
          color: #ec4899;
        }

        .boutique-nav a.sale {
          color: #ec4899;
          font-weight: 700;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .icon-btn {
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          position: relative;
          color: #1a1a1a;
          transition: color 0.3s;
        }

        .icon-btn:hover {
          color: #ec4899;
        }

        .badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #ec4899;
          color: white;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        /* Hero Section */
        .boutique-hero {
          position: relative;
          height: 600px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          padding: 0 2rem;
          color: white;
        }

        .season-tag {
          display: inline-block;
          background: rgba(236, 72, 153, 0.9);
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .hero-content h2 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-content p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .hero-cta {
          background: white;
          color: #1a1a1a;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .hero-cta:hover {
          background: #ec4899;
          color: white;
          transform: translateY(-2px);
        }

        /* Features Bar */
        .features-bar {
          background: #f9fafb;
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
          text-align: left;
        }

        .feature svg {
          color: #ec4899;
        }

        .feature strong {
          display: block;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .feature p {
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0;
        }

        /* Collections Section */
        .collections-section {
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

        .collections-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .collection-card {
          position: relative;
          height: 400px;
          overflow: hidden;
          border-radius: 15px;
          cursor: pointer;
        }

        .collection-image {
          height: 100%;
          position: relative;
        }

        .collection-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .collection-card:hover .collection-image img {
          transform: scale(1.1);
        }

        .collection-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          color: white;
        }

        .collection-overlay h3 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .collection-overlay p {
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .explore-btn {
          background: white;
          color: #1a1a1a;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          align-self: flex-start;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s;
        }

        .collection-card:hover .explore-btn {
          opacity: 1;
          transform: translateY(0);
        }

        /* Products Section */
        .products-section {
          padding: 5rem 0;
          background: #f9fafb;
        }

        .filter-tabs {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .filter-tabs button {
          background: none;
          border: 2px solid #e5e7eb;
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }

        .filter-tabs button:hover {
          border-color: #ec4899;
          color: #ec4899;
        }

        .filter-tabs button.active {
          background: #ec4899;
          color: white;
          border-color: #ec4899;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .product-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 1;
        }

        .tag.new {
          background: #10b981;
          color: white;
        }

        .tag.trending {
          background: #f59e0b;
          color: white;
        }

        .tag.bestseller {
          background: #6366f1;
          color: white;
        }

        .tag.exclusive {
          background: #1a1a1a;
          color: white;
        }

        .tag.discount {
          background: #ef4444;
          color: white;
          left: auto;
          right: 1rem;
        }

        .product-image {
          position: relative;
          height: 350px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .quick-view {
          background: white;
          color: #1a1a1a;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transform: translateY(20px);
          transition: all 0.3s;
        }

        .product-card:hover .quick-view {
          transform: translateY(0);
        }

        .wishlist-toggle {
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
          transition: all 0.3s;
        }

        .wishlist-toggle:hover {
          transform: scale(1.1);
        }

        .wishlist-toggle.active {
          color: #ec4899;
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-info h3 {
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
        }

        .price-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .price {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .original-price {
          font-size: 1rem;
          color: #9ca3af;
          text-decoration: line-through;
        }

        .add-to-cart {
          width: 100%;
          background: #1a1a1a;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .add-to-cart:hover {
          background: #ec4899;
        }

        /* Lookbook Section */
        .lookbook-section {
          padding: 5rem 0;
        }

        .lookbook-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-tag {
          display: inline-block;
          background: #fce7f3;
          color: #ec4899;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .lookbook-content h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .lookbook-content p {
          color: #6b7280;
          font-size: 1.125rem;
          margin-bottom: 2rem;
        }

        .lookbook-btn {
          background: #ec4899;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .lookbook-btn:hover {
          background: #db2777;
          transform: translateY(-2px);
        }

        .social-proof {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .rating {
          display: flex;
          gap: 0.25rem;
          color: #fbbf24;
          margin-bottom: 0.5rem;
        }

        .social-proof p {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .lookbook-images {
          position: relative;
          height: 500px;
        }

        .lookbook-images img {
          position: absolute;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }

        .lookbook-images img:hover {
          transform: scale(1.05);
          z-index: 10;
        }

        .look-1 {
          width: 200px;
          height: 300px;
          object-fit: cover;
          top: 0;
          left: 0;
        }

        .look-2 {
          width: 250px;
          height: 350px;
          object-fit: cover;
          top: 50px;
          right: 50px;
        }

        .look-3 {
          width: 180px;
          height: 240px;
          object-fit: cover;
          bottom: 0;
          left: 100px;
        }

        /* Newsletter Section */
        .newsletter-section {
          background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
          color: white;
          padding: 5rem 0;
          text-align: center;
        }

        .newsletter-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .newsletter-content p {
          font-size: 1.125rem;
          margin-bottom: 2rem;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-form input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 30px;
          font-size: 1rem;
        }

        .newsletter-form button {
          padding: 1rem 2rem;
          background: #1a1a1a;
          color: white;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .newsletter-form button:hover {
          background: #374151;
        }

        .privacy-note {
          font-size: 0.875rem;
          margin-top: 1rem;
          opacity: 0.8;
        }

        /* Instagram Section */
        .instagram-section {
          padding: 5rem 0;
          background: #f9fafb;
        }

        .instagram-section h2 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          margin-top: 2rem;
        }

        .insta-post {
          position: relative;
          padding-top: 100%;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
        }

        .insta-post img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .insta-post:hover img {
          transform: scale(1.1);
        }

        /* Footer */
        .boutique-footer {
          background: #1a1a1a;
          color: white;
          padding: 2rem 0;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .boutique-nav {
            display: none;
          }

          .boutique-hero h2 {
            font-size: 3rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .collections-grid {
            grid-template-columns: 1fr;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .lookbook-grid {
            grid-template-columns: 1fr;
          }

          .lookbook-images {
            display: none;
          }

          .instagram-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .filter-tabs {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default DemoBoutique;