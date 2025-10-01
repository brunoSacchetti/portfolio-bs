import { X, Menu} from 'lucide-react';
import './styles.css'
import { Proyecto } from './interfaces/Proyecto';
import { Tecnologia } from './interfaces/Tecnologias';
import { useState } from 'react';


function App() {

  // Proyectos personales
  const proyectos: Proyecto[] = [
    {
    titulo: "Portfolio Web",
    descripcion: "Portfolio Web moderno y responsivo realizado con React, HTML, CSS y Typescript.",
    imagen: "/images/projects/portfolio.webp",
    link: "https://githuprojectsunoSacchetti/portfolio-bs"
    },
    {
    titulo: "Sistema Contable",
    descripcion: "Sistema de registracion de Libro diario y Libro mayor utilizando Blockchain para el almacenamiento de datos con MongoDB y realizado en C#.",
    imagen: "/images/projects/count.webp",
    link: "https://github.com/brunoSacchetti/SistemaContableV1-Aplicacion"
    },
    {
    titulo: "E-Commerce El Buen Sabor",
    descripcion: "El Buen Sabor es una plataforma de e-commerce que ofrece una experiencia culinaria excepcional. Los usuarios pueden explorar el menú, hacer pedidos con facilidad y elegir entre entrega a domicilio o recogida en el local. Contamos con opciones de pago seguras, como Mercado Pago y efectivo. Nuestro enfoque combina tecnología y calidad para garantizar una experiencia satisfactoria desde el pedido hasta el primer bocado.",
    imagen: "/images/projects/ecommerce1.webp",
    link: "https://github.com/brunoSacchetti/Ecommerce-ElBuenSabor-V1"
    },
    {
    titulo: "Backend El Buen Sabor",
    descripcion: "Utilizamos Spring Boot para construir un backend eficiente y escalable, con Auth0 para una gestión segura de autenticaciones y autorizaciones. Implementamos Envers para el control de versiones de datos. Además, el sistema genera facturas PDF automáticas y envía correos electrónicos para confirmar pedidos y mantener informados a los clientes. Todo esto garantiza una experiencia confiable, segura y eficiente para el e-commerce.",
    imagen: "/images/projects/backend-buensabor.webp",
    link: "https://github.com/brunoSacchetti/elBuenSaborBackend"
    },
    {
    titulo: "Dashboard Administrativo para El Buen Sabor",
    descripcion: "Plataforma integral que permite a los administradores gestionar de manera eficiente las operaciones del negocio. Incluye la administración de empresas asociadas, sucursales, categorías de productos, insumos, y productos. Además, permite gestionar roles de usuarios y autenticación mediante Auth0 para una seguridad óptima en el inicio de sesión.",
    imagen: "/images/projects/dashboard.webp",
    link: "https://github.com/brunoSacchetti/ElBuenSabor-Crud-DashBoard"
    },
    {
    titulo: "Tienda Online de Instrumentos Musicales",
    descripcion: "Es un e-commerce de instrumentos musicales con un backend en Java/Spring Boot y MySQL, y un frontend en React con TypeScript, HTML y CSS. Permite a los usuarios explorar productos, agregarlos al carrito y pagar con Mercado Pago. Además, cuenta con un sistema de inicio de sesión que define la experiencia del usuario, mostrando pedidos, reportes y gráficos según el rol",
    imagen: "/images/projects/tiendains.webp",
    link: "https://github.com/brunoSacchetti/TiendaMusicaFrontend"
    },
    {
    titulo: "Calculadora de Ecuaciones Matematicas",
    descripcion: "Aplicación desarrollada en C# que permite ingresar ecuaciones matemáticas, ya sean simples o complejas, y las resuelve automáticamente según las reglas matemáticas. La herramienta está diseñada para procesar operaciones como sumas, restas, multiplicaciones, divisiones y más, proporcionando resultados precisos y rápidos.",
    imagen: "/images/projects/ecuacion.webp",
    link: "https://github.com/brunoSacchetti/CalculadoraEcuaciones"
    },
    {
    titulo: "API desarrollada en SpringBoot",
    descripcion: "API desarrollada en Spring Boot simulando un CRUD de productos, ventas, clientes. También se incluyen pedidos especiales como por ejemplo: Obtener la lista de productos de una determinada venta u obtener los productos cuya cantidad sea menor a 5.",
    imagen: "/images/projects/api.webp",
    link: "https://github.com/brunoSacchetti/ProyectoFinal-Api-TodoCode"
    }
  ]

  // Tecnologias que he utilizado
  const tecnologias : Tecnologia[] = [
    { nombre: "React", logo: "/images/react.webp", link: "https://reactjs.org" },
    { nombre: "TypeScript", logo: "/images/ts.webp", link: "https://www.typescriptlang.org" },
    { nombre: "Java", logo: "/images/java.webp", link: "https://www.java.com/es/" },
    { nombre: "CSS", logo: "/images/css.webp", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { nombre: "HTML", logo: "/images/html.webp", link: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { nombre: "Spring Boot", logo: "/images/springboot.webp", link: "https://spring.io/projects/spring-boot" },
    { nombre: "JavaScript", logo: "/images/js.webp", link: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { nombre: "SQL", logo: "/images/sql.webp", link: "https://aws.amazon.com/es/what-is/sql/" },
    { nombre: "MongoDB", logo: "/images/mongodb.webp", link: "https://www.mongodb.com/" },
    { nombre: "Postman", logo: "/images/postman.webp", link: "https://www.postman.com/" },
    { nombre: "C#", logo: "/images/csharp.webp", link: "https://dotnet.microsoft.com/es-es/languages/csharp" },
    { nombre: "Figma", logo: "/images/figma.webp", link: "https://www.figma.com/" },
    { nombre: "Git/Github", logo: "/images/github-min.webp", link: "https://github.com/" },
    { nombre: "Docker", logo: "/images/docker.webp", link: "https://www.docker.com/" }
  ];

    
  // Formulario de contacto
 
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");
    
  // Enviamos el mensaje al email personal 
  const handleSubmit = async (e : React.FormEvent) => {

      // Para evitar que se recargue la pagina
      e.preventDefault();

      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('email', email);
      formData.append('mensaje', mensaje);

      try {
        const response = await fetch("https://formspree.io/f/xbldqjdq", {
          method: "POST",
          body: formData,
        });
  
        if (response.ok) {
          setEnviado(true);
          setNombre("");
          setEmail("");
          setMensaje("");
        } else {
          setError("Hubo un error al enviar el formulario. Intenta de nuevo.");
        }
      } catch (err) {
        setError("Hubo un error al enviar el formulario. Intenta de nuevo.");
      }
    };

    // Para manejar el menu hamburguesa para mobile
    const [menuAbierto, setMenuAbierto] = useState(false);


  return (
    <>
      <header className='header'>
        <img src="/images/logo-bs-sbg.webp" alt="bs-logo" height={90} />
        
        {/* Boton Hamburguesa Mobile */}

        <button className='menu-toggle' onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? <X size={30}/> : <Menu size={30}/>}
        </button>  

        {/* Menu Desktop */}
        <nav className={`menu ${menuAbierto ? "menu-abierto" : ""}`}>
          <a href="#quiensoy" onClick={() => setMenuAbierto(false)}>Quien Soy</a>
          <a href="#proyectos" onClick={() => setMenuAbierto(false)}>Proyectos</a>
          <a href="#tecnologias" onClick={() => setMenuAbierto(false)}>Tecnologias</a>
          <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
        </nav>
      </header>
      <div className='container-descripcion'>
        <h1 className='texto-flotante'>Bruno Sacchetti</h1>
        <p>Desarrollador Web enfocado en construir soluciones digitales dinámicas utilizando las últimas tecnologías web.</p>
        {/* <img src="bs-logo.png" alt="" height={300} /> */}
        <div className='container-descripcion-redes'>
          <a href="https://github.com/brunoSacchetti" target='_blank'>
            <img src='/images/github-min.webp' alt='github' height={20}></img>
          </a>
          <a href="https://www.linkedin.com/in/bruno-sacchetti/" target='_blank'>
            <img src='/images/linkedin-min.webp' alt='linkedin' height={20}></img>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=sacchettibruno03@gmail.com" target='_blank'>
            <img src='/images/email-min.png' alt='Enviar correo' height={20}></img>
          </a>
        </div>
        <div className="divider">
          <div className="arrow"></div>
      </div>
      </div>

      

    {/* SECCION QUIEN SOY */}
    <section id='quiensoy' className='section-about-me'>
        <h2>Sobre mí</h2>
        <div className='about-me-content'>
          <img src='/images/bs-profile.jpg' alt='Bruno Sacchetti' loading='lazy'/>
          <div className="about-me-text">
            <p>
              Técnico Superior en Programación con formación en la <strong>Tecnicatura Superior en Programación de la UTN FRM</strong>. 
              Cuento con más de <strong>1 año de experiencia</strong> en desarrollo <strong>Backend/Frontend</strong>.
            </p>
            <p>
              He trabajado con <strong>Spring Boot, React, TypeScript, Java, HTML, CSS, JavaScript, SQL y NoSQL, C#</strong>, contribuyendo a soluciones escalables.
            </p>
            <p>
              Soy un <strong>profesional integral</strong> que destaca por el análisis crítico y la capacidad para <strong>elaborar estrategias fundamentadas</strong>, resolver problemas y <strong>gestionar proyectos con precisión</strong>. Mi <strong>comunicación efectiva</strong>, adaptabilidad y compromiso con el <strong>aprendizaje constante</strong> me preparan para enfrentar desafíos en entornos dinámicos y aportar significativamente a cualquier equipo o proyecto.
            </p>
            <p>Busco seguir creciendo en entornos dinámicos e innovadores.</p>
          </div>
        </div>
        <a href="/cv/CV-BRUNO SACCHETTI-2025.pdf" download className="btn-cv">
          Descargar CV
        </a>
    <div className="divider">
          <div className="arrow"></div>
      </div>      
    </section>
         

      {/* SECCION PROYECTOS */}
      <section id='proyectos' className='section-projects'>
      <div className="container-proyectos">
        <h1 className="h1-proyectos">Proyectos</h1>
        <h4>En esta sección encontraras algunos de los proyectos que he realizado</h4>       
      </div>
      <div className='container-cards-proyectos'>
        {proyectos.map((proyecto, index) => (
          <article key={index} className="proyecto">
            <img src={proyecto.imagen} alt={proyecto.titulo} loading='lazy'/>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer"><img src="/images/github-project.webp" alt=""/>Github</a>
          </article>
        ))}
        </div>
      <div className="divider">
          <div className="arrow"></div>
      </div>
      </section>
                
       {/* SECCION TECNOLOGIAS */}
       <section id='tecnologias' className='section-tecnologias'>
        <h1>Tecnologías</h1>
        <h4>Estas son algunas de las tecnologías que he utilizado en mis proyectos</h4> 
        <div className="container-tecnologias">
          {tecnologias.map((tecnologia, index) => (
          <a 
            href={tecnologia.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="tecnologia" 
            key={index}
          >
            <img src={tecnologia.logo} alt={tecnologia.nombre} className="logo-tecnologia" height={50} />
            <p>{tecnologia.nombre}</p>
          </a>
        ))}
        </div>
  
      <div className="divider">
          <div className="arrow"></div>
      </div>
      </section>
      

    {/* SECCION CONTACTO */}
    <section id='contacto' className='section-contacto'>
    <div className="container-contacto">
      <h2>¡Contáctame!</h2>
      {enviado && <p className="mensaje-exito">¡Mensaje enviado exitosamente!</p>}
      {error && <p className="mensaje-error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
    </div>
    </section>
    


    {/* SECCION FOOTER */}
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
          <img src="/images/logo-bs-sbg.webp" alt="Logo" className="footer-logo-img" />
      </div>

      {/* Derechos de autor */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Bruno Sacchetti. Todos los derechos reservados.</p>
      </div>
    </footer>
    

    </>
  );
}


export default App;