// utils/emailService.js
// Servicio de email usando WordPress REST API con SMTP

/**
 * Envía un email usando el endpoint de WordPress
 * WordPress debe tener configurado un plugin SMTP como WP Mail SMTP
 */
export const sendEmail = async (formData) => {
  try {
    // Obtener nonce para autenticación (en producción)
    // El nonce debe ser proporcionado por WordPress
    const wpNonce = window.wpApiSettings?.nonce || '';
    
    const response = await fetch('/wp-json/demosle/v1/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': wpNonce // Para autenticación si es necesario
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        whatsapp: formData.whatsapp,
        servicio: formData.servicio,
        mensaje: formData.mensaje,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error en el servidor');
    }

    const data = await response.json();
    
    return { 
      success: true, 
      message: data.message || '¡Mensaje enviado exitosamente! Te contactaremos pronto.' 
    };
    
  } catch (error) {
    console.error('Error al enviar email:', error);
    
    // Fallback: intentar enviar por WhatsApp si falla el email
    if (formData.whatsapp) {
      const whatsappMessage = encodeURIComponent(
        `Hola! Soy ${formData.nombre}. Me interesa el servicio: ${formData.servicio}. ${formData.mensaje}`
      );
      window.open(`https://wa.me/56942740261?text=${whatsappMessage}`, '_blank');
    }
    
    return { 
      success: false, 
      message: 'Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.' 
    };
  }
};

/**
 * Valida los datos del formulario
 */
export const validateForm = (formData) => {
  const errors = {};

  // Validar nombre
  if (!formData.nombre || formData.nombre.trim().length < 2) {
    errors.nombre = 'Por favor ingresá tu nombre';
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Por favor ingresá un email válido';
  }

  // Validar WhatsApp (formato chileno)
  const phoneRegex = /^(\+?56)?9[0-9]{8}$/;
  const cleanPhone = formData.whatsapp.replace(/[\s\-\(\)]/g, '');
  if (!formData.whatsapp || !phoneRegex.test(cleanPhone)) {
    errors.whatsapp = 'Por favor ingresá un número válido (ej: 912345678)';
  }

  // Validar servicio
  if (!formData.servicio) {
    errors.servicio = 'Por favor seleccioná un servicio';
  }

  // Validar mensaje
  if (!formData.mensaje || formData.mensaje.trim().length < 10) {
    errors.mensaje = 'Por favor contanos un poco más sobre tu proyecto (mínimo 10 caracteres)';
  }

  return errors;
};

/**
 * Formatea el número de WhatsApp al formato internacional
 */
export const formatWhatsAppNumber = (phone) => {
  // Eliminar caracteres no numéricos
  let cleaned = phone.replace(/\D/g, '');
  
  // Si empieza con 56, está bien
  if (cleaned.startsWith('56')) {
    return cleaned;
  }
  
  // Si empieza con 9, agregar 56
  if (cleaned.startsWith('9') && cleaned.length === 9) {
    return '56' + cleaned;
  }
  
  // Si no, devolver como está (el validador se encargará)
  return cleaned;
};

/**
 * Construye el template de email HTML
 */
export const buildEmailTemplate = (formData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #7529c6;">Nueva consulta desde Démosle.cl</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Datos de contacto:</h3>
        <p><strong>Nombre:</strong> ${formData.nombre}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/${formatWhatsAppNumber(formData.whatsapp)}">${formData.whatsapp}</a></p>
        <p><strong>Servicio de interés:</strong> ${formData.servicio}</p>
      </div>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px;">
        <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
        <p style="line-height: 1.6;">${formData.mensaje.replace(/\n/g, '<br>')}</p>
      </div>
      
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
      
      <p style="color: #666; font-size: 12px;">
        Este mensaje fue enviado desde el formulario de contacto de demosle.cl<br>
        Fecha: ${new Date().toLocaleString('es-CL')}
      </p>
    </div>
  `;
};