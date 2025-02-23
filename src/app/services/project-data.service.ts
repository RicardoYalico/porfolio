import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  private projects = [
    {
      id: 1,
      title: "E-Commerce",
      imageUrl: "https://api.screenshotmachine.com?key=ae48bd&url=ecommerce-git-master-ricardoyalicos-projects.vercel.app&dimension=1024x768",
      creationDate: "10 de Febrero, 2024",
      description: "Tienda de comercio electrónico de productos electrónicos con panel de administración en Next.js y Node.js",
      language: "JavaScript",
      websiteUrl: "https://ecommerce-git-master-ricardoyalicos-projects.vercel.app/",
      framework: "Next.JS y Prisma",
      database: "Mysql",
      hosting: "Vercel, Render.com y Clever-Cloud",
      details: "Tienda de comercio electrónico de productos electrónicos con panel de administración desarrollada en Next.js, Node.js y MySQL. La aplicación es completamente responsiva y ha sido creada desde cero con un diseño personalizado. Su objetivo es ofrecer una plataforma moderna para la venta en línea de productos electrónicos, siguiendo principios clave de la ingeniería de software. Además de la implementación, se ha elaborado una documentación detallada que describe el desarrollo y la estructura del proyecto."
    },
    {
      id: 2,
      title: "Booking",
      imageUrl: "https://api.screenshotmachine.com?key=ae48bd&url=booking-web-iumw.onrender.com&dimension=1024x768",
      creationDate: "20 de Febrero, 2024",
      description: "Sistemas de reservas para hoteles con panel de administración en Laravel y php",
      language: "Php",
      websiteUrl: "https://booking-web-iumw.onrender.com",
      framework: "Laravel",
      database: "Mysql",
      hosting: "Render.com",
      details: "Sistema de reservas para hoteles con panel de administración desarrollado en Laravel, PHP y MySQL. La aplicación es completamente responsiva y ha sido creada desde cero con un diseño personalizado. Su objetivo es ofrecer una plataforma moderna y eficiente para la gestión de reservas hoteleras, siguiendo principios clave de la ingeniería de software. Además de la implementación, se ha elaborado una documentación detallada que describe el desarrollo y la estructura del proyecto. El sistema está alojado en Render.com. Para ingresar y probar el aplicativo usar las siguiente credenciales: usuario = johndoe contraseña = secret"
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
