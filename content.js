window.CONTENT = {
  meta: {
    name: "Sebastián Bravo",
    fullName: "Sebastián Alejandro Bravo Veloso",
    role: { es: "Estudiante de Ingeniería en Informática", en: "Computer Engineering student" },
    institution: "INACAP, Los Ángeles",
    year: { es: "Tercer año", en: "Third year" },
    email: "sebastian.25.bravoo@gmail.com",
    phone: "+56 9 5629 1545",
    phoneHref: "+56956291545",
    github: "github.com/sebravo80",
    githubUrl: "https://github.com/sebravo80",
    instagram: "@_seba_bravo_",
    instagramUrl: "https://instagram.com/_seba_bravo_"
  },

  nav: {
    intro:    { es: "Inicio",   en: "Start" },
    about:    { es: "Sobre mí", en: "About" },
    work:     { es: "Proyectos", en: "Work" },
    personal: { es: "Lo que me mueve", en: "What drives me" },
    contact:  { es: "Contacto", en: "Contact" }
  },

  hero: {
    kicker: { es: "Ingeniería en Informática - Tercer año - INACAP Los Ángeles",
              en: "Computer Engineering - Third year - INACAP Los Ángeles" },
    headline: { es: "Construyo herramientas web que ponen orden donde no lo hay.",
                en: "I build web tools that bring order where there isn't any." },
    sub: { es: "Frontend y backend, con un pie en la ciberseguridad. Aprendo construyendo cosas que funcionan de verdad.",
           en: "Frontend and backend, with one foot in security. I learn by building things that actually work." }
  },

  about: {
    title: { es: "Sobre mí", en: "About me" },
    p1: { es: "Estudio Ingeniería en Informática en INACAP, Los Ángeles, y me interesa cómo el software resuelve problemas concretos: organizar, automatizar, proteger. Me muevo entre el frontend y el backend, y estoy dando mis primeros pasos en ciberseguridad.",
          en: "I'm studying Computer Engineering at INACAP in Los Ángeles, Chile. I care about how software solves concrete problems: organizing, automating, protecting. I work across frontend and backend, and I'm taking my first steps into security." },
    p2: { es: "Aprendo construyendo. Cada proyecto es una excusa para entender algo nuevo y dejarlo funcionando de verdad, no solo en la teoría.",
          en: "I learn by building. Every project is an excuse to understand something new and actually ship it — not just leave it in theory." },
    highlights: [
      { es: "Interfaces web accesibles y responsivas", en: "Accessible, responsive web interfaces" },
      { es: "Automatización con JavaScript y Python", en: "Automation with JavaScript and Python" },
      { es: "Buenas prácticas de código y trabajo con Git", en: "Clean-code practices and Git workflows" },
      { es: "Fundamentos de ciberseguridad web", en: "Web security fundamentals" }
    ]
  },

  stack: {
    title: { es: "Con qué trabajo", en: "What I work with" },
    groups: [
      { label: { es: "Frontend", en: "Frontend" }, items: ["HTML", "CSS", "JavaScript", "React"] },
      { label: { es: "Backend", en: "Backend" }, items: ["Node.js", "Express", "Python", "MongoDB", "SQL"] },
      { label: { es: "Herramientas", en: "Tooling" }, items: ["Git", "GitHub", "Terminal", "VS Code"] }
    ]
  },

  projects: {
    title: { es: "Proyectos", en: "Work" },
    items: [
      {
        name: "Organizador Universitario de la Diatomea",
        flagship: true,
        tagline: { es: "Una app para que estudiantes organicen su vida universitaria",
                   en: "An app that helps students organize their university life" },
        desc: { es: "Nació de un problema real: mi novia necesitaba ordenar sus ramos, plazos y tareas, y un Excel se quedaba corto. Muchas universidades no dan una herramienta así, así que la construí. Reúne horarios, ramos, evaluaciones y pendientes en un solo lugar.",
                 en: "It came from a real problem: my girlfriend needed to keep track of her courses, deadlines and tasks, and a spreadsheet fell short. Many universities don't offer a tool like this, so I built one. It brings schedules, courses, assessments and to-dos into one place." },
        tags: ["React", "Node.js", "JavaScript", "CSS"],
        link: "https://diatomea-universitaria.vercel.app",
        linkLabel: { es: "Ver en vivo", en: "View live" },
        img: "assets/img/diatomea.webp",
        imgW: 1000, imgH: 1000,
        alt: { es: "Isotipo del Organizador Universitario de la Diatomea",
               en: "Logo of the Diatomea university organizer" }
      },
      {
        name: { es: "Este portafolio", en: "This portfolio" },
        flagship: false,
        tagline: { es: "Un proyecto en evolución", en: "An evolving project" },
        desc: { es: "El sitio que estás viendo. Lo trato como algo vivo: un lugar donde ir sumando lo que construyo.",
                en: "The site you're looking at. I treat it as something alive: a place to keep adding what I build." },
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/sebravo80/portfolio",
        linkLabel: { es: "Código", en: "Code" },
        img: "assets/img/portfolio.webp",
        imgW: 853, imgH: 1280,
        alt: { es: "Captura de este portafolio", en: "Screenshot of this portfolio" }
      }
    ],
    note: { es: "También he desarrollado landing pages para negocios locales.",
            en: "I've also built landing pages for local businesses." }
  },

  personal: {
    title: { es: "Lo que me mueve", en: "What drives me" },
    sub: { es: "Las razones detrás de lo que hago.", en: "The reasons behind what I do." },
    items: [
      {
        name: "Camila",
        role: { es: "Mi novia", en: "My girlfriend" },
        desc: { es: "Y quien inspiró mi primera aplicación. La Diatomea existe por ella.",
                en: "And the reason my first app exists. Diatomea was built for her." },
        quote: "Juntos por siempre",
        img: "assets/img/camila.webp",
        imgW: 825, imgH: 1100,
        alt: { es: "Fotografía de Camila", en: "Photograph of Camila" }
      },
      {
        name: "Yuumi",
        role: { es: "Mi gata", en: "My cat" },
        desc: { es: "El nombre viene del LoL — fue el único que le gustó a mi madre. No sé qué haría sin ella.",
                en: "The name comes from League of Legends — the only one my mom liked. I don't know what I'd do without her." },
        quote: "Mi gata watona",
        img: "assets/img/yuumi.webp",
        imgW: 824, imgH: 1100,
        alt: { es: "Fotografía de Yuumi, la gata", en: "Photograph of Yuumi the cat" }
      },
      {
        name: { es: "La fotografía", en: "Photography" },
        role: { es: "Mi manera de mirar", en: "How I look at things" },
        desc: { es: "Ando siempre buscando qué escena, qué luz o qué detalle quedaría bien en una foto. Las que más me gustan terminan en mi Instagram.",
                en: "I'm always looking for the scene, the light or the detail that would make a good photo. My favorites end up on my Instagram." },
        quote: "Encuadrar antes de disparar",
        icon: "aperture",
        link: "https://instagram.com/_seba_bravo_",
        linkLabel: { es: "Ver en Instagram", en: "See on Instagram" }
      },
      {
        name: { es: "Los videojuegos", en: "Video games" },
        role: { es: "Donde desconecto", en: "Where I switch off" },
        desc: { es: "Juego desde siempre; de ahí salió el nombre de Yuumi. Es lo que hago cuando cierro el editor.",
                en: "I've been playing forever — that's where Yuumi's name came from. It's what I do when I close the editor." },
        quote: "Partida rápida",
        icon: "controller"
      }
    ]
  },

  contact: {
    title: { es: "Hablemos", en: "Let's talk" },
    sub: { es: "¿Tienes una idea, una oportunidad o solo quieres conversar? Escríbeme.",
           en: "Got an idea, an opportunity, or just want to chat? Get in touch." }
  },

  ui: {
    langLabel: { es: "EN", en: "ES" },
    flagship: { es: "Proyecto principal", en: "Flagship project" },
    scrollHint: { es: "Desplázate", en: "Scroll" },
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." }
  }
};
