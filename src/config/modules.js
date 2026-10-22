/**
 * Configuración de Módulos - MG Ops (Mi Gusto Operaciones)
 * Plataforma centralizada para la supervisión y auditoría de tiendas/sucursales de empanadas.
 */

export const APP_CONFIG = {
  brandName: "Mi Gusto",
  appName: "MG OPS",
  sectionTag: "Gestión Operativa de Tiendas & Sucursales",
  title: "Centro de Operaciones",
  description: "Seleccione el área de trabajo para iniciar la carga de informes de sucursal, control de turnos, novedades de locales, planillas y auditorías comerciales.",
  descriptionHerramientas: "Seleccione la herramienta para la creación de códigos QR personalizados o la edición y optimización multimedia con inteligencia artificial.",
  copyright: "© Desarrollado por el Departamento de Sistemas de Mi Gusto | Todos los derechos reservados.",
  
  // Módulos principales para tiendas de empanadas
  modules: [
    {
      id: "auditoria",
      title: "Auditoría",
      badgeText: "CALIDAD & ESTÁNDARES",
      subtitle: "AUDITORÍA EN LOCALES, CONTROL BROMATOLÓGICO Y ESTÁNDARES DE TIENDA",
      url: "https://www.migusto.com.ar/operaciones/auditorias/",
      target: "_self", // Abre en la misma pestaña o "_blank" si se prefiere
      accentColor: "#10b981", // Esmeralda / Cian
      accentBg: "rgba(16, 185, 129, 0.15)",
      accentBorder: "rgba(16, 185, 129, 0.4)",
      image: "./auditoria.png",
      status: "ONLINE",
      type: "shield"
    },
    {
      id: "supervisoria",
      title: "Consolidado Diario",
      badgeText: "OPERACIÓN EN TIENDA",
      subtitle: "SUPERVISIÓN DE SUCURSALES, APERTURA/CIERRE Y CONTROL DE SERVICIO",
      url: "https://www.migusto.com.ar/operaciones/supervisoria/",
      target: "_self",
      accentColor: "#f59e0b", // Ámbar cálido / Dorado
      accentBg: "rgba(245, 158, 11, 0.15)",
      accentBorder: "rgba(245, 158, 11, 0.4)",
      image: "./supervisoria.png",
      status: "ONLINE",
      type: "store"
    },
    {
      id: "planificacion",
      title: "Planificación",
      badgeText: "ORGANIZACIÓN & HORARIOS",
      subtitle: "PLANIFICACIÓN SEMANAL, HORARIOS DE VISITA Y OBJETIVOS DE SUPERVISORAS",
      url: "https://migusto.com.ar/operaciones/supervisoria/planificacion",
      target: "_self",
      accentColor: "#6366f1", // Índigo moderno
      accentBg: "rgba(99, 102, 241, 0.15)",
      accentBorder: "rgba(99, 102, 241, 0.4)",
      image: "./planificacion.png",
      status: "ONLINE",
      type: "calendar"
    }
  ],

  // Herramientas operativas
  tools: [
    {
      id: "qrgenpro",
      title: "Generador de QR",
      badgeText: "GENERADOR QR",
      subtitle: "GENERADOR DE QR SIN VENCIMIENTO Y PERSONALIZADO A MEDIDA",
      url: "https://www.migusto.com.ar/tools/QR/",
      target: "_blank",
      accentColor: "#06b6d4",
      accentBg: "rgba(6, 182, 212, 0.15)",
      accentBorder: "rgba(6, 182, 212, 0.4)",
      image: "./qrgenpro.png",
      status: "ONLINE",
      type: "qr"
    },
    {
      id: "screenflow",
      title: "Editor de imagen y video",
      badgeText: "EDITOR MULTIMEDIA & IA",
      subtitle: "QUITAR FONDO CON IA, MEJORAR CALIDAD, CORTAR, ROTAR Y EXPORTAR VIDEO",
      url: "https://www.migusto.com.ar/tools/videoeditor/",
      target: "_blank",
      accentColor: "#a855f7",
      accentBg: "rgba(168, 85, 247, 0.15)",
      accentBorder: "rgba(168, 85, 247, 0.4)",
      image: "./screenflow.png",
      status: "ONLINE",
      type: "video"
    }
  ],

  // Herramientas de soporte operativo para supervisores y auditores
  quickTools: [
    {
      id: "soporte",
      title: "Mesa de Ayuda Sistemas",
      description: "Soporte técnico para POS, lectores de pedidos y terminales de sucursal.",
      icon: "headset"
    },
    {
      id: "estandares",
      title: "Manual de Estándares de Tienda",
      description: "Guía de presentación de producto, temperatura de hornos y exhibición.",
      icon: "book"
    },
    {
      id: "red",
      title: "Verificador de Conectividad DonWeb",
      description: "Diagnóstico de red entre locales y servidores centrales.",
      icon: "activity"
    }
  ]
};
