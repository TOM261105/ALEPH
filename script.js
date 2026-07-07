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

    mediaTitleNew: "NUESTROS MEDIOS",

    mediaOneTitle: "Carteleras",
    mediaOneText:
      "Carteleras espectaculares, vallas, parabuses, puentes, muros, etc.",

    mediaTwoTitle: "Mupis",
    mediaTwoText:
      "Mupis, publicidad en centros comerciales, posters, etc.",

    mediaThreeTitle: "Pantallas Digitales",
    mediaThreeText:
      "Pantallas digitales para contenido dinámico y de alto impacto.",

    mediaFourTitle: "Transporte Urbano",
    mediaFourText:
      "Medios de transporte urbano para llevar tu marca por toda la ciudad.",

    mediaFiveTitle: "Publicidad Móvil",
    mediaFiveText:
      "Publicidad móvil para extender el alcance de tus campañas.",

    mediaClick: "Haz clic para ver más información",

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

    locationLabel: "Ubicación",
    officeLabel: "Oficina",
    mobileLabel: "Celular",
    websiteLabel: "Sitio web",

    optionBillboards: "Carteleras espectaculares",
    optionFences: "Vallas",
    optionBusShelters: "Parabuses",
    optionMupis: "Mupis",
    optionMalls: "Centros comerciales",
    optionDigitalScreens: "Pantallas digitales",
    optionUrbanTransport: "Transporte urbano",
    optionMobileAdvertising: "Publicidad móvil",

    instagramLabel: "Instagram",
    facebookLabel: "Facebook",
    linkedinLabel: "LinkedIn",

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

    mediaTitleNew: "OUR MEDIA",

    mediaOneTitle: "Billboards",
    mediaOneText:
      "Billboards, outdoor displays, bus shelters, bridges, walls and more.",

    mediaTwoTitle: "Mupis",
    mediaTwoText:
      "Mupis, advertising in shopping centers, posters and more.",

    mediaThreeTitle: "Digital Screens",
    mediaThreeText:
      "Digital screens for dynamic and high-impact content.",

    mediaFourTitle: "Urban Transport",
    mediaFourText:
      "Urban transport media to take your brand throughout the city.",

    mediaFiveTitle: "Mobile Advertising",
    mediaFiveText:
      "Mobile advertising to extend the reach of your campaigns.",

    mediaClick: "Click to see more information",

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
    locationLabel: "Location",
    officeLabel: "Office",
    mobileLabel: "Mobile",
    websiteLabel: "Website",

    optionBillboards: "Billboards",
    optionFences: "Outdoor fences",
    optionBusShelters: "Bus shelters",
    optionMupis: "Mupis",
    optionMalls: "Shopping centers",
    optionDigitalScreens: "Digital screens",
    optionUrbanTransport: "Urban transport",
    optionMobileAdvertising: "Mobile advertising",

    instagramLabel: "Instagram",
    facebookLabel: "Facebook",
    linkedinLabel: "LinkedIn",

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

// ===============================
// AUTOPLAY VIDEO HERO EN CELULAR
// ===============================
const heroVideo = document.querySelector(".hero__video");

if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.loop = true;
  heroVideo.playsInline = true;

  const playHeroVideo = () => {
    heroVideo.play().catch(() => {
      console.log("El navegador bloqueó el autoplay hasta que el usuario interactúe.");
    });
  };

  window.addEventListener("load", playHeroVideo);
  document.addEventListener("touchstart", playHeroVideo, { once: true });
  document.addEventListener("click", playHeroVideo, { once: true });
}
