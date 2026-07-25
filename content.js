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
    ],
    note: { es: "La lista no está cerrada: sigo sumando lo que aprendo en cada proyecto.",
            en: "The list isn't closed: I keep adding whatever I learn on each project." }
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
        quote: { es: "Juntos por siempre", en: "Together forever" },
        imgW: 675, imgH: 900,
        imgs: [
          { src: "assets/img/web/camila.webp",
            alt: { es: "Fotografía de Camila", en: "Photograph of Camila" } },
          { src: "assets/img/web/camila2.webp",
            alt: { es: "Camila junto a una ventana", en: "Camila beside a window" } },
          { src: "assets/img/web/camila3.webp",
            alt: { es: "Camila riendo en un parque", en: "Camila laughing at a park" } }
        ]
      },
      {
        name: "Yuumi",
        role: { es: "Mi gata", en: "My cat" },
        desc: { es: "El nombre viene del LoL — fue el único que le gustó a mi madre. No sé qué haría sin ella.",
                en: "The name comes from League of Legends — the only one my mom liked. I don't know what I'd do without her." },
        quote: {es: "Mi gata watona", en: "My chubby cat" },
        img: "assets/img/yuumi.webp",
        imgW: 824, imgH: 1100,
        alt: { es: "Fotografía de Yuumi, la gata", en: "Photograph of Yuumi the cat" }
      },
      {
        name: { es: "La fotografía", en: "Photography" },
        role: { es: "Mi manera de mirar", en: "How I look at things" },
        desc: { es: "Ando siempre buscando qué escena, qué luz o qué detalle quedaría bien en una foto. Las que más me gustan terminan en mi Instagram.",
                en: "I'm always looking for the scene, the light or the detail that would make a good photo. My favorites end up on my Instagram." },
        quote: { es: "Encuadrar antes de disparar", en: "Compose before shooting" },
        link: "https://instagram.com/_seba_bravo_",
        linkLabel: { es: "Ver en Instagram", en: "See on Instagram" },
        /* Miniatura en la ficha, versión grande al ampliar */
        imgW: 600, imgH: 800,
        fullW: 1200, fullH: 1600,
        imgs: [
          { src: "assets/img/web/foto1.webp", full: "assets/img/web/foto1-lg.webp",
            alt: { es: "Siesta de gato en el galpón", en: "Cat asleep in the shed" } },
          { src: "assets/img/web/foto7.webp", full: "assets/img/web/foto7-lg.webp",
            alt: { es: "Paradero rojo entre los árboles", en: "A red bus stop among the trees" } },
          { src: "assets/img/web/foto5.webp", full: "assets/img/web/foto5-lg.webp",
            alt: { es: "Atardecer entre torres de alta tensión", en: "Sunset between power towers" } },
          { src: "assets/img/web/foto6.webp", full: "assets/img/web/foto6-lg.webp",
            alt: { es: "Flor iluminada sobre el fondo oscuro", en: "A lit flower against the dark" } },
          { src: "assets/img/web/foto4.webp", full: "assets/img/web/foto4-lg.webp",
            alt: { es: "Escultura y luna creciente", en: "Sculpture and a crescent moon" } },
          { src: "assets/img/web/foto2.webp", full: "assets/img/web/foto2-lg.webp",
            alt: { es: "Un rincón del living a media luz", en: "A living-room corner in low light" } },
          { src: "assets/img/web/foto3.webp", full: "assets/img/web/foto3-lg.webp",
            alt: { es: "Gata recostada bajo luz rosada", en: "A cat lying in pink light" } }
        ]
      },
      {
        name: { es: "La música", en: "Music" },
        role: { es: "Lo que hago sin pantalla", en: "What I do away from a screen" },
        desc: { es: "Toco guitarra. Ahí entendí algo que después apliqué al código: lo difícil se vuelve fácil repitiéndolo, aunque al principio suene pésimo.",
                en: "I play guitar. That's where I learned something I later applied to code: hard things get easy by repeating them, even if they sound awful at first." },
        quote: { es: "Practicar es el atajo", en: "Practice is the shortcut" },
        img: "assets/img/guitarra.webp",
        imgW: 968, imgH: 1196,
        alt: { es: "Mano sobre el diapasón de una guitarra", en: "A hand on a guitar fretboard" }
      },
      {
        name: { es: "Los videojuegos", en: "Video games" },
        role: { es: "Donde desconecto", en: "Where I switch off" },
        desc: { es: "Juego desde siempre; de ahí salió el nombre de Yuumi. Además, de ahí viene una de mis frases favoritas.",
                en: "I've been playing forever — that's where Yuumi's name came from. Besides, the videogames gave me my favourite phrase." },
        quote: { es: "Dudar es Fracasar", en: "Hesitation is Defeat" },
        img: "assets/img/sekiro.webp",
        imgW: 1200, imgH: 1920,
        alt: { es: "Arte de Sekiro: Shadows Die Twice, el juego del que viene la frase",
               en: "Artwork from Sekiro: Shadows Die Twice, the game the quote comes from" }
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
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    close: { es: "Cerrar", en: "Close" },
    prev: { es: "Anterior", en: "Previous" },
    next: { es: "Siguiente", en: "Next" },
    openPhoto: { es: "Ampliar: ", en: "Enlarge: " },
    showPhoto: { es: "Ver foto ", en: "Show photo " },
    viewer: { es: "Visor de fotografías", en: "Photo viewer" }
  }
};
