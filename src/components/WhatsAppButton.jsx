import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Mostrar el botón después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Mostrar tooltip después de 5 segundos (si no han interactuado)
    const tooltipTimer = setTimeout(() => {
      if (!isExpanded) {
        setShowTooltip(true);
        // Ocultar tooltip después de 5 segundos
        setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, [isExpanded]);

  const whatsappNumber = '56942740261';
  const businessHours = {
    start: 9,
    end: 19,
    timezone: 'America/Santiago'
  };

  // Verificar si estamos en horario de atención
  const isBusinessHours = () => {
    const now = new Date();
    const chileanTime = new Date(now.toLocaleString("en-US", {timeZone: businessHours.timezone}));
    const hours = chileanTime.getHours();
    const day = chileanTime.getDay();
    
    // Lunes a Viernes (1-5), 9:00 - 19:00
    return day >= 1 && day <= 5 && hours >= businessHours.start && hours < businessHours.end;
  };

  const quickMessages = [
    { text: "Quiero información sobre servicios", emoji: "📋" },
    { text: "Necesito una cotización", emoji: "💰" },
    { text: "Tengo una consulta", emoji: "❓" },
    { text: "Quiero agendar una reunión", emoji: "📅" }
  ];

  const handleQuickMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  const handleDirectChat = () => {
    const defaultMessage = '¡Hola! Me gustaría información sobre sus servicios.';
    handleQuickMessage(defaultMessage);
  };

  return (
    <>
      {/* Botón expandido con opciones */}
      {isExpanded && (
        <div className="whatsapp-expanded-menu">
          <div className="whatsapp-menu-header">
            <h4>¿Cómo podemos ayudarte?</h4>
            <button 
              onClick={() => setIsExpanded(false)}
              className="close-button"
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="whatsapp-status">
            {isBusinessHours() ? (
              <span className="status-online">🟢 Estamos en línea</span>
            ) : (
              <span className="status-offline">🔴 Responderemos pronto</span>
            )}
          </div>

          <div className="quick-messages">
            {quickMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => handleQuickMessage(msg.text)}
                className="quick-message-btn"
              >
                <span className="emoji">{msg.emoji}</span>
                <span>{msg.text}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={handleDirectChat}
            className="direct-chat-btn"
          >
            <MessageCircle size={18} />
            Chat directo
          </button>
        </div>
      )}

      {/* Botón flotante principal */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`whatsapp-float-button ${isVisible ? 'visible' : ''} ${isExpanded ? 'expanded' : ''}`}
        aria-label="Contactar por WhatsApp"
      >
        {isExpanded ? <X size={24} /> : <MessageCircle size={24} />}
        
        {showTooltip && !isExpanded && (
          <span className="whatsapp-tooltip animated">
            ¿Hablamos? 💬
          </span>
        )}
      </button>
      
      <style jsx>{`
        .whatsapp-float-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          color: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          z-index: 999;
          transform: scale(0);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .whatsapp-float-button.visible {
          transform: scale(1);
          opacity: 1;
        }

        .whatsapp-float-button.expanded {
          background-color: #128C7E;
        }

        .whatsapp-float-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(37, 211, 102, 0.5);
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          background-color: #1e1e1e;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .whatsapp-tooltip.animated {
          animation: tooltipPulse 2s ease-in-out infinite;
        }

        @keyframes tooltipPulse {
          0%, 100% {
            opacity: 1;
            transform: translateX(0);
          }
          50% {
            transform: translateX(-5px);
          }
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid #1e1e1e;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }

        .whatsapp-float-button:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateX(-10px);
        }

        /* Menú expandido */
        .whatsapp-expanded-menu {
          position: fixed;
          bottom: 100px;
          right: 30px;
          width: 320px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          z-index: 998;
          animation: slideUp 0.3s ease-out;
          overflow: hidden;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .whatsapp-menu-header {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: white;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .whatsapp-menu-header h4 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .close-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .whatsapp-status {
          padding: 12px 20px;
          background: #f5f5f5;
          border-bottom: 1px solid #e5e5e5;
          font-size: 14px;
        }

        .status-online {
          color: #25D366;
          font-weight: 500;
        }

        .status-offline {
          color: #666;
        }

        .quick-messages {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .quick-message-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: #f8f9fa;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
          text-align: left;
          width: 100%;
          color: #333;
        }

        .quick-message-btn:hover {
          background: #e8f5e9;
          border-color: #25D366;
          transform: translateX(5px);
        }

        .quick-message-btn .emoji {
          font-size: 20px;
        }

        .direct-chat-btn {
          margin: 0 20px 20px;
          width: calc(100% - 40px);
          padding: 14px;
          background: #25D366;
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 16px;
        }

        .direct-chat-btn:hover {
          background: #128C7E;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .whatsapp-float-button {
            bottom: 20px;
            right: 20px;
            width: 55px;
            height: 55px;
          }

          .whatsapp-expanded-menu {
            width: calc(100vw - 40px);
            right: 20px;
            bottom: 85px;
            max-width: 320px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .whatsapp-expanded-menu {
            width: calc(100vw - 30px);
            right: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;