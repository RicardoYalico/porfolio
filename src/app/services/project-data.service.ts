import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  private projects = [
    {
      id: 1,
      title: "Sistema de Gestión de Tareas",
      imageUrl: "https://i.ytimg.com/vi/n7XjKLqRUt8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcft6fbR8Mn1IFeKMIG5vl3HUL9g",
      creationDate: "10 de Febrero, 2024",
      description: "Aplicación para administrar tareas con prioridades y fechas límite.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Permite a los usuarios crear, editar y eliminar tareas. Usa JWT para autenticación y WebSockets para notificaciones en tiempo real."
    },
    {
      id: 2,
      title: "Plataforma de E-learning",
      imageUrl: "https://bytelix.com/wp-content/uploads/2017/09/facilidad-uso-elearning-2.png",
      creationDate: "10 de Febrero, 2024",
      description: "Sistema de cursos en línea con gestión de usuarios y evaluaciones.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Cuenta con autenticación de usuarios, subida de videos, generación de certificados y un dashboard con analíticas de estudiantes."
    },
    {
      id: 3,
      title: "E-commerce de Electrónicos",
      imageUrl: "https://simpauldesign.com/wp-content/uploads/2019/02/sky.garden.jpg",
      creationDate: "10 de Febrero, 2024",
      description: "Tienda en línea con carrito de compras e integración de pagos.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Incluye un sistema de gestión de inventario, pasarela de pago con Stripe y una interfaz optimizada para móviles."
    },
    {
      id: 4,
      title: "Chat en Tiempo Real",
      imageUrl: "https://www.liveagent.es/wp/urlslab-download/e6864b61a2589bb97296e4b50d226108/Mockup-Real-time-chat.png",
      creationDate: "10 de Febrero, 2024",
      description: "Aplicación de mensajería instantánea con soporte para grupos.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Utiliza WebSockets para mensajes en tiempo real, permite compartir archivos y cuenta con encriptación de extremo a extremo."
    },
    {
      id: 5,
      title: "Dashboard de Finanzas",
      imageUrl: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2151322629/settings_images/HwcItIjQEueiDafwAfCZ_Dashboard_Finanzas_con_Utilidad.jpg",
      creationDate: "10 de Febrero, 2024",
      description: "Plataforma para visualizar ingresos y gastos con gráficos.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Muestra reportes interactivos con D3.js, permite exportar datos a Excel y tiene autenticación OAuth con Google."
    },
    {
      id: 6,
      title: "Red Social para Profesionales",
      imageUrl: "https://coworkingfy.com/wp-content/uploads/2022/12/redes-sociales-profesionales-13.jpg",
      creationDate: "10 de Febrero, 2024",
      description: "Plataforma similar a LinkedIn para conectar profesionales.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Permite a los usuarios crear perfiles, publicar contenido, enviar mensajes y buscar empleos según sus habilidades."
    },
    {
      id: 7,
      title: "Gestor de Eventos",
      imageUrl: "https://d57439wlqx3vo.cloudfront.net/iblock/4d1/4d11f65079e5f4635b507b93d227ca57/ed6bdaa5238aebd5320f5c5a398e47f0.jpg",
      creationDate: "10 de Febrero, 2024",
      description: "Sistema para organizar y registrar asistencia a eventos.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Incluye generación de QR para acceso, integración con calendarios y notificaciones por correo electrónico."
    },
    {
      id: 8,
      imageUrl:"https://i.ytimg.com/vi/91fdZDNgzXA/maxresdefault.jpg",
      title: "Sistema de Reservas de Hoteles",
      creationDate: "10 de Febrero, 2024",
      description: "Plataforma para buscar y reservar habitaciones de hotel.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Soporta pagos en línea, opiniones de usuarios y gestión de disponibilidad en tiempo real."
    },
    {
      id: 9,
      imageUrl: "https://i.ytimg.com/vi/Lyn7p1yHCkc/maxresdefault.jpg",
      title: "Aplicación de Gestión de Inventario",
      creationDate: "10 de Febrero, 2024",
      description: "Sistema para controlar existencias y generar reportes.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Permite registrar productos, gestionar proveedores y generar reportes de stock con alertas automatizadas."
    },
    {
      id: 10,
      title: "Sistema de Encuestas Online",
      imageUrl:"https://blog.hubspot.es/hubfs/media/LosmejoresprogramasparacrearencuestasonlineHubSpot.jpeg",
      creationDate: "10 de Febrero, 2024",
      description: "Aplicación para crear y responder encuestas personalizadas.",
      language: "JavaScript",
      framework: "Angular",
      database: "PostgreSQL",
      hosting: "AWS",
      details: "Soporta distintos tipos de preguntas, generación de gráficos en tiempo real y exportación de respuestas en CSV."
    }
  ];
  constructor() { }

  // Obtener todos los proyectos
  getProjects() {
    return this.projects;
  }

  // Obtener un proyecto por ID
  getProjectById(id: number) {
    return this.projects.find(project => project.id === id) || null;
  }
}
