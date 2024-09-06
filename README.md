# Mimic E-Commerce

Este proyecto de E-commerce con React fue creado con el objetivo de presentarlo como trabajo final para la certificación de "React" en "CoderHouse".

## Descripción:

Este proyecto de React permite a los usuarios acceder a una tienda virtual en la que podrán realizar compras de manera fácil y segura.

El proyecto cuenta con tres colecciones en Firebase: "orders" y "items", y en el futuro se plantea la posibilidad de implementar un sistema de administración que permita la carga, modificación y eliminación de productos y/o categorías. Además, se espera añadir la gestión de usuarios con diferentes roles: cliente (para almacenar sus datos de envío y el historial de compras) y administrador (para la gestión de productos y pedidos). 


## Tecnologías
* **React**: Biblioteca para el desarrollo de interfaces de usuario.
* **React-router-dom**: Enrutador para aplicaciones React.
* **Firebase**: Plataforma de desarrollo de aplicaciones móviles y web.
* **Formik**: Biblioteca para la gestión de formularios en React.
* **Yup**: Biblioteca para la validación de esquemas.
* **React-spinners**: Biblioteca para agregar animaciones de carga a una aplicación React.

## Instalación
**1. Clona el repositorio:**

`git clone https://github.com/DarkEngelBlood/Mimic.git`

**2. Ingresa al directorio del proyecto:**

`cd Mimic`

**3. Instala las dependencias del proyecto:**

`npm install`

**4. Crea una cuenta en Firebase y configura las credenciales en el archivo .main.jsx:**

```
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```

**5. Ejecuta el proyecto:**

`npm run dev`

**6. Abre la aplicación en tu navegador:**

`http://localhost:5173`