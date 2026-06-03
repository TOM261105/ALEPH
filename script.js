// ===============================
// NAVBAR AL HACER SCROLL
// ===============================
const siteHeader = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    siteHeader.classList.add("is-scrolled");
  } else {
    siteHeader.classList.remove("is-scrolled");
  }
});

// ===============================
// SCROLL SUAVE DESDE HERO
// ===============================
const scrollHint = document.getElementById("scrollHint");

if (scrollHint) {
  scrollHint.addEventListener("click", () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    });
  });
}

// ===============================
// ANIMACIONES AL HACER SCROLL
// ===============================
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
    rootMargin: "0px 0px -30px 0px",
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// ===============================
// ANIMACIÓN DE TARJETAS DE MEDIOS
// ===============================
const mediaCards = document.querySelectorAll(".media-card");

const mediaObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mediaCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("is-visible");
          }, index * 120);
        });

        mediaObserver.disconnect();
      }
    });
  },
  {
    threshold: 0.12,
  }
);

if (mediaCards.length > 0) {
  mediaObserver.observe(mediaCards[0]);
}

// ===============================
// TRADUCCIÓN ESPAÑOL / INGLÉS
// ===============================
const translations = {
  es: {
    navAbout: "Nosotros",
    navMedia: "Medios",
    navProjects: "Proyectos",
    navContact: "Contacto",

    heroLabel: "Out of Home · OOH Advertising",
    heroTitle: "Convierte cada<br />rincón en tu <em>escaparate</em>",
    heroText:
      "Impacto que atrae todas las miradas. Llevamos tu marca a los mejores espacios de la ciudad con presencia que no se puede ignorar.",
    heroPrimary: "Ver nuestros medios",
    heroSecondary: "Habla con nosotros",
    scroll: "Scroll",

    aboutTag: "Nosotros",
    aboutTitle: "Especialistas en <em>Out of Home</em>",
    aboutTextOne:
      "Una empresa de publicidad especializada en el desarrollo de proyectos OOH, fundada hace 8 años con más de 35 años de experiencia desarrollando campañas por parte de nuestros socios.",
    aboutTextTwo:
      "Ubicamos tu marca en los espacios estratégicos de mayor impacto: autopistas, centros comerciales, transporte urbano y espacios digitales en exteriores.",
    statOne: "Años en el mercado",
    statTwo: "Años de experiencia",
    statThree: "Especialistas",

    mediaTitle: "Nuestros<br /><em>Medios</em>",
    mediaText:
      "Cada formato diseñado para maximizar el impacto de tu campaña en el entorno urbano.",

    mediaOneTag: "Formato Principal",
    mediaOneTitle: "Espectaculares & Vallas",
    mediaOneText:
      "Estructuras de gran formato en vías primarias y autopistas de alta circulación vehicular.",

    mediaTwoTag: "Digital OOH",
    mediaTwoTitle: "Pantallas Digitales",
    mediaTwoText:
      "Tótems y mupis digitales con contenido dinámico y programable.",

    mediaThreeTag: "Transit Media",
    mediaThreeTitle: "Transporte Urbano",
    mediaThreeText:
      "Autobuses y flotillas de transporte que llevan tu marca a toda la ciudad.",

    mediaFourTag: "Digital",
    mediaFourTitle: "Mobile & Digital",
    mediaFourText:
      "Extensión digital de tus campañas para una cobertura 360° con geolocalización.",

    galleryTag: "Nuestros proyectos",
    galleryTitle: "Presencia en<br />toda la ciudad",

    statementText:
      "Creemos que cada espacio en la ciudad es una oportunidad para contar una historia que mueve a las personas.",
    statementAuthor: "Aleph Medios — Out of Home Advertising",
    statementPrimary: "Trabajemos juntos",
    statementSecondary: "Ver medios disponibles",

    contactTag: "Contacto",
    contactTitle: "Hablemos de<br />tu campaña",
    contactText:
      "Cuéntanos tu proyecto y te daremos la solución OOH ideal para tu marca. Nuestro equipo está listo para crear el impacto que necesitas.",
    locationLabel: "Ubicación",
    locationText: "Ciudad de México, CDMX",
    phoneLabel: "Teléfono",

    formName: "Nombre",
    formNamePlaceholder: "Tu nombre",
    formCompany: "Empresa",
    formCompanyPlaceholder: "Tu empresa",
    formMediaType: "Tipo de medio",
    formSelect: "Selecciona un formato",
    formIntegral: "Campaña integral",
    formMessage: "Cuéntanos tu proyecto",
    formMessagePlaceholder:
      "Describe tu campaña, alcance deseado, zonas de interés...",
    formButton: "Enviar mensaje →",

    footerCopy: "© 2026 Aleph Medios. Todos los derechos reservados.",
  },

  en: {
    navAbout: "About",
    navMedia: "Media",
    navProjects: "Projects",
    navContact: "Contact",

    heroLabel: "Out of Home · OOH Advertising",
    heroTitle: "Turn every<br />corner into your <em>showcase</em>",
    heroText:
      "Impact that captures every look. We take your brand to the best spaces in the city with a presence that cannot be ignored.",
    heroPrimary: "View our media",
    heroSecondary: "Talk to us",
    scroll: "Scroll",

    aboutTag: "About us",
    aboutTitle: "Specialists in <em>Out of Home</em>",
    aboutTextOne:
      "An advertising company specialized in the development of OOH projects, founded 8 years ago with more than 35 years of campaign experience through our partners.",
    aboutTextTwo:
      "We place your brand in the most strategic high-impact spaces: highways, shopping centers, urban transport and outdoor digital spaces.",
    statOne: "Years in the market",
    statTwo: "Years of experience",
    statThree: "Specialists",

    mediaTitle: "Our<br /><em>Media</em>",
    mediaText:
      "Each format is designed to maximize the impact of your campaign in the urban environment.",

    mediaOneTag: "Main Format",
    mediaOneTitle: "Billboards & Outdoor Displays",
    mediaOneText:
      "Large-format structures on main roads and high-traffic highways.",

    mediaTwoTag: "Digital OOH",
    mediaTwoTitle: "Digital Screens",
    mediaTwoText:
      "Digital totems and mupis with dynamic and programmable content.",

    mediaThreeTag: "Transit Media",
    mediaThreeTitle: "Urban Transport",
    mediaThreeText:
      "Buses and transport fleets that carry your brand throughout the city.",

    mediaFourTag: "Digital",
    mediaFourTitle: "Mobile & Digital",
    mediaFourText:
      "Digital extension of your campaigns for 360° coverage with geolocation.",

    galleryTag: "Our projects",
    galleryTitle: "Presence across<br />the entire city",

    statementText:
      "We believe that every space in the city is an opportunity to tell a story that moves people.",
    statementAuthor: "Aleph Medios — Out of Home Advertising",
    statementPrimary: "Let's work together",
    statementSecondary: "View available media",

    contactTag: "Contact",
    contactTitle: "Let's talk about<br />your campaign",
    contactText:
      "Tell us about your project and we will give you the ideal OOH solution for your brand. Our team is ready to create the impact you need.",
    locationLabel: "Location",
    locationText: "Mexico City, CDMX",
    phoneLabel: "Phone",

    formName: "Name",
    formNamePlaceholder: "Your name",
    formCompany: "Company",
    formCompanyPlaceholder: "Your company",
    formMediaType: "Media type",
    formSelect: "Select a format",
    formIntegral: "Integrated campaign",
    formMessage: "Tell us about your project",
    formMessagePlaceholder:
      "Describe your campaign, desired reach, areas of interest...",
    formButton: "Send message →",

    footerCopy: "© 2026 Aleph Medios. All rights reserved.",
  },
};

let currentLanguage = "es";

const languageToggle = document.getElementById("languageToggle");

function changeLanguage(language) {
  const selectedTranslations = translations[language];

  // Cambia textos normales
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (selectedTranslations[key]) {
      element.textContent = selectedTranslations[key];
    }
  });

  // Cambia textos con HTML, por ejemplo <br> o <em>
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");

    if (selectedTranslations[key]) {
      element.innerHTML = selectedTranslations[key];
    }
  });

  // Cambia placeholders de inputs y textarea
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (selectedTranslations[key]) {
      element.setAttribute("placeholder", selectedTranslations[key]);
    }
  });

  // Cambia el atributo lang del HTML
  document.documentElement.setAttribute("lang", language);

  // Cambia el texto del botón
  languageToggle.textContent = language === "es" ? "EN" : "ES";
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    changeLanguage(currentLanguage);
  });
}

// ===============================
// FORMULARIO
// ===============================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const message =
      currentLanguage === "es"
        ? "Gracias. Tu mensaje fue registrado correctamente."
        : "Thank you. Your message was submitted successfully.";

    alert(message);

    contactForm.reset();
  });
}
