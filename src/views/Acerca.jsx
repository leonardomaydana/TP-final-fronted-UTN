const Acerca = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">TP final de fronted-UTN</h1>

      <h3 className="about-subtitle">Descripción del proyecto</h3>
      <p className="about-text">
        Esta aplicación fue desarrollada como proyecto final del curso de Desarrollo Web Frontend. Consiste en una app de mensajería inspirada en WhatsApp, cuyo objetivo principal es simular el funcionamiento básico de una plataforma de comunicación en tiempo real. La aplicación permite a los usuarios registrarse, iniciar sesión y mantener su sesión activa incluso después de recargar la página, gracias al uso de herramientas como localStorage y React Context. Una vez dentro, el usuario puede seleccionar otros usuarios y enviar mensajes generando una experiencia similar a la de una aplicación de chat.
      </p>

      <h3 className="about-subtitle">Partes principales de la aplicación</h3>
      <ul className="about-text">
        <li>Registro e inicio de sesión de usuarios</li>
        <li>Persistencia de sesión con localStorage</li>
        <li>Envío de mensajes entre usuarios</li>
        <li>Navegación protegida con React Router</li>
      </ul>

      <h3 className="about-subtitle">Tecnologías utilizadas</h3>
      <p className="about-text">
        React, Vite, JavaScript, HTML, CSS y React Router 
      </p>

      <h3 className="about-subtitle">Decisiones de desarrollo</h3>
      <p className="about-text">
        Se utilizó React Context para manejar el estado global del usuario. Además, se implementó localStorage para mantener la sesión activa. La aplicación está organizada en componentes reutilizables para facilitar el mantenimiento y futuras mejoras.
      </p>

      <h3 className="about-subtitle">Observaciones</h3>
      <p className="about-text">
          El diseño es simple y funcional, priorizando la lógica de la aplicación. Como mejora futura, se podría implementar una base de datos real y autenticación más segura.
      </p>

      <a className="about-link" href="/">
        Volver aL LOGIN
      </a>
    </div>
  )
}

export { Acerca }