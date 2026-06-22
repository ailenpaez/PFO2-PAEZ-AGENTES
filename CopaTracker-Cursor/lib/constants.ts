export const SITE = {
  name: "CopaTracker ⚽ 2026",
  description:
    "Seguí el Mundial FIFA 2026 en tiempo real con fixture actualizado, resultados en vivo y simulación de cruces hacia la gran final.",
  url: "https://copatracker-2026.vercel.app",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Fixture", href: "#fixture" },
  { label: "Simulador", href: "#simulador" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Contacto", href: "#contacto" },
  { label: "Sobre la autora", href: "/about" },
] as const;

export const AUTHOR = {
  name: "Ailen Paez",
  title: "Sobre la autora",
  bio: "Desarrolladora de software apasionada por la tecnología, la nube, la automatización y la creación de experiencias digitales.",
  profile:
    "Combino experiencia en desarrollo full stack con un enfoque centrado en el usuario, construyendo productos digitales escalables, accesibles y visualmente impactantes. Me motiva transformar datos en experiencias interactivas que conecten a las personas con lo que les apasiona.",
  photo: "/author.svg",
  github: "https://github.com/ailenpaez",
  linkedin: "https://www.linkedin.com/in/paezailenj/",
  email: "ailenaprendiendotec@gmail.com",
} as const;

export const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "AWS",
  "Git",
  "GitHub",
] as const;

export const TESTIMONIALS = [
  {
    name: "Martín R.",
    role: "Aficionado de Argentina",
    comment:
      "CopaTracker me permite seguir cada partido del Mundial sin perderme ningún detalle. El fixture en vivo es increíble.",
  },
  {
    name: "Laura S.",
    role: "Analista deportiva",
    comment:
      "La simulación de cruces eliminatorios es visualmente clara y profesional. Ideal para anticipar el camino a la final.",
  },
  {
    name: "Diego M.",
    role: "Fanático del fútbol",
    comment:
      "Diseño moderno, rápido y responsive. Puedo consultar resultados desde el celular mientras veo los partidos.",
  },
] as const;

export const FEATURES = [
  {
    title: "Resultados en tiempo real",
    description:
      "Actualización automática cada 5 minutos con estados en vivo, programados y finalizados.",
    icon: "⚡",
  },
  {
    title: "Fixture completo",
    description:
      "Todos los partidos del Mundial FIFA 2026 con búsqueda, filtros y ordenamiento por fecha.",
    icon: "📅",
  },
  {
    title: "Simulación de cruces",
    description:
      "Visualizá el cuadro eliminatorio desde octavos hasta la gran final de forma interactiva.",
    icon: "🏆",
  },
  {
    title: "Diseño responsive",
    description:
      "Experiencia optimizada para móvil y desktop con navegación accesible e intuitiva.",
    icon: "📱",
  },
] as const;

export const KNOCKOUT_STAGES = [
  { key: "LAST_16", label: "Octavos" },
  { key: "QUARTER_FINALS", label: "Cuartos" },
  { key: "SEMI_FINALS", label: "Semifinales" },
  { key: "FINAL", label: "Final" },
] as const;

export const REFRESH_INTERVAL_MS = 5 * 60 * 1000;
export const WORLD_CUP_SEASON = 2026;
