import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, TrendingUp, Users, ShoppingBag, 
  Award, Filter, ArrowUpRight, Star
} from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'services', name: 'Servicios' },
    { id: 'restaurant', name: 'Restaurantes' },
    { id: 'health', name: 'Salud' }
  ];

  const projects = [
    {
      id: 1,
      title: "TechStore Chile",
      category: "ecommerce",
      description: "Tienda online de tecnología con +500 productos",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      results: [
        { metric: "+250%", label: "Aumento en ventas" },
        { metric: "3x", label: "ROI en 6 meses" }
      ],
      services: ["E-commerce", "SEO", "Google Ads"],
      testimonial: "Triplicamos nuestras ventas online en solo 6 meses",
      client: "Carlos Mendoza, CEO"
    },
    {
      id: 2,
      title: "Clínica Sonrisa",
      category: "health",
      description: "Portal de salud dental con sistema de reservas online",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      results: [
        { metric: "+180%", label: "Nuevos pacientes" },
        { metric: "45%", label: "Menos no-shows" }
      ],
      services: ["Web Design", "Booking System", "SEO Local"],
      testimonial: "El sistema de reservas cambió completamente nuestro negocio",
      client: "Dra. María González"
    },
    {
      id: 3,
      title: "Sabores del Sur",
      category: "restaurant",
      description: "Restaurant gourmet con delivery integrado",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      results: [
        { metric: "+300%", label: "Pedidos online" },
        { metric: "5⭐", label: "Rating promedio" }
      ],
      services: ["Web Design", "Delivery System", "Social Media"],
      testimonial: "Ahora el 60% de nuestras ventas son digitales",
      client: "Chef Roberto Silva"
    },
    {
      id: 4,
      title: "ConsultPro",
      category: "services",
      description: "Consultora empresarial B2B con generación de leads",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
      results: [
        { metric: "120", label: "Leads mensuales" },
        { metric: "$2M", label: "En contratos" }
      ],
      services: ["Landing Page", "LinkedIn Ads", "CRM"],
      testimonial: "La estrategia digital transformó nuestro modelo de negocio",
      client: "Juan Pérez, Director"
    },
    {
      id: 5,
      title: "FitLife Gym",
      category: "health",
      description: "Cadena de gimnasios con membresías online",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      results: [
        { metric: "+400", label: "Nuevos socios" },
        { metric: "85%", label: "Retención" }
      ],
      services: ["Web App", "Email Marketing", "Community Manager"],
      testimonial: "Duplicamos nuestros miembros en 4 meses",
      client: "Andrea López, Gerente"
    },
    {
      id: 6,
      title: "DecorHome",
      category: "ecommerce",
      description: "Muebles y decoración con showroom virtual",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      results: [
        { metric: "+220%", label: "Conversión" },
        { metric: "$500K", label: "Ventas/mes" }
      ],
      services: ["E-commerce", "3D Showroom", "Instagram Ads"],
      testimonial: "El showroom virtual revolucionó nuestras ventas",
      client: "Patricia Muñoz, Fundadora"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Casos de Éxito Comprobados
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos que
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Generan Resultados
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a empresas chilenas a multiplicar 
            sus ventas y hacer crecer su negocio online.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-600">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 italic mb-2">
                      "{project.testimonial}"
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3.5x</div>
              <div className="text-white/80">ROI Promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Soporte Continuo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;