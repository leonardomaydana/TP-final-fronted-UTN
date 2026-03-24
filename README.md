# Aplicacion de mensajeria– Proyecto Final Frontend UTN

## Descripción

Esta aplicación fue desarrollada como trabajo final del curso de Desarrollo Web Frontend.  
Se trata de una app de mensajería inspirada en WhatsApp, donde los usuarios pueden registrarse, iniciar sesión y comunicarse entre sí.

El objetivo del proyecto es aplicar conceptos clave de React como el manejo de estado global, navegación entre rutas y persistencia de datos en el navegador.

Funcionalidades principales:

- Registro de usuarios con validaciones.
- Inicio de sesión y mantenimiento de la sesión activa.
- Persistencia de datos utilizando Context y localStorage.
- Envío de mensajes entre usuarios.
- Navegación entre distintas vistas con React Router.
- Página pública de información del proyecto (`/acerca`).

---

## Tecnologías utilizadas

- React
- React Router DOM
- Vite
- JavaScript (ES6+)
- HTML5 y CSS3

---

## Organización del proyecto

src/
├─ context/
│ └─ ChatContext.jsx // Manejo global del usuario y mensajes
├─ views/
│ ├─ Register.jsx // Vista de registro de usuario
│ └─ Acerca.jsx // Página de documentación
├─ router/
│ └─ RouterApp.jsx // Definición de rutas
├─ services/
│ └─ mockApi.js // Simulación de datos

## Como ejecutar el proyecto de manera local

### 1. Clonar el repositorio

```bash
git https://github.com/leonardomaydana/TP-final-fronted-UTN.git
cd TP-final-fronted-UTN
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm run dev
```

### 4. Abrir en el navegador

```
http://localhost:5173
```

---

## Rutas principales

- `/registro` → Permite crear un nuevo usuario con validaciones.
- `/acerca` → Página informativa sobre el proyecto.
- `/` → Pantalla principal (login o inicio).
---

## Decisiones de desarrollo

Para este proyecto se decidió utilizar React Context como solución para manejar el estado global del usuario, evitando el uso de props en múltiples niveles.

Además, se implementó localStorage para guardar la sesión del usuario, permitiendo que permanezca logueado incluso al recargar la página.

Se optó por una estructura organizada en carpetas (views, context, services, etc.) para facilitar la lectura del código y su mantenimiento.

## Validaciones implementadas

El formulario de registro incluye validaciones básicas:

Nombre: obligatorio y con un mínimo de 3 caracteres.
Email: formato válido requerido.
Contraseña: mínimo 6 caracteres.

Los errores se muestran de forma dinámica al interactuar con el formulario.

## Observaciones

La interfaz fue diseñada de manera simple, priorizando la funcionalidad y la experiencia del usuario.

Como posibles mejoras futuras, se podría integrar una base de datos real, autenticación más avanzada y nuevas funcionalidades como edición de perfil o notificaciones.

## Deploy

El proyecto puede ser desplegado fácilmente utilizando Vercel:

Ingresar a https://vercel.com
Iniciar sesión con GitHub
Importar el repositorio del proyecto: 
Realizar el deploy automático

https://tp-final-fronted-utn.vercel.app/

Autor

Maydana Leonardo Agustín
Proyecto final – Desarrollo Web Frontend
UTN