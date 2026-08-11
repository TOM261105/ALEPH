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
// MODAL DE MEDIOS
// ===============================
const mediaModal = document.getElementById("mediaModal");
const mediaPanels = document.querySelectorAll(".media-panel");
let lastFocusedCard = null;

function openMediaModal(panelName) {
  if (!mediaModal) return;

  mediaPanels.forEach((panel) => {
    panel.hidden = panel.getAttribute("data-panel") !== panelName;
  });

  mediaModal.hidden = false;
  document.body.classList.add("no-scroll");

  const scrollArea = mediaModal.querySelector(".media-modal__scroll");
  if (scrollArea) scrollArea.scrollTop = 0;

  mediaModal.querySelector(".media-modal__close")?.focus();
}

function closeMediaModal() {
  if (!mediaModal) return;

  mediaModal.hidden = true;
  document.body.classList.remove("no-scroll");

  lastFocusedCard?.focus();
}

mediaCards.forEach((card) => {
  card.addEventListener("click", () => {
    const panelName = card.getAttribute("data-modal");
    if (!panelName) return;

    lastFocusedCard = card;
    openMediaModal(panelName);
  });
});

if (mediaModal) {
  mediaModal.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeMediaModal);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mediaModal && !mediaModal.hidden) {
    closeMediaModal();
  }
});

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
    heroPrimary: "Ver nuestros medios",
    heroSecondary: "Habla con nosotros",
    scroll: "Scroll",

    aboutTag: "Nosotros",
    aboutTitle: "Especialistas<br /><em>Out of Home</em>",
    aboutTextOne:
      "Empresa de publicidad especializada en el desarrollo de proyectos OOH, fundada hace 10 años con más de 38 años de experiencia desarrollando proyectos en medios exteriores.",
    aboutTextTwo: "Estrategias basadas en datos y resultados tangibles.",
    statTwo: "Años de experiencia",
    statThree: "Especialistas",

    mediaTitleNew: "NUESTROS MEDIOS",

    mediaOneTitle: "Carteleras",
    mediaOneText:
      "Carteleras espectaculares, vallas, parabuses, puentes, muros, etc.",

    mediaTwoTitle: "Mupis",
    mediaTwoText: "Mupis, publicidad en centros comerciales, posters, etc.",

    mediaThreeTitle: "Pantallas Digitales",
    mediaThreeText:
      "Pantallas digitales para contenido dinámico y de alto impacto.",

    mediaFourTitle: "Transporte Urbano",
    mediaFourText:
      "Medios de transporte urbano para llevar tu marca por toda la ciudad.",

    mediaFiveTitle: "Activaciones BTL",
    mediaFiveText:
      "Volanteo, publiandantes, loneros y activaciones en punto de venta.",

    mediaSixTitle: "Impresión Digital y Offset",
    mediaSixText:
      "Gran formato, rígidos, encuadernación y acabado de alto volumen.",

    mediaMore: "Ver más información →",
    mediaClick: "Haz clic en cada medio para ver el detalle completo",

    panelCartelerasTitle: "Carteleras",
    panelCartelerasBody: `
      <p>Presencia de gran formato en los puntos de mayor afluencia de la ciudad.</p>
      <ul>
        <li>Carteleras espectaculares</li>
        <li>Vallas</li>
        <li>Parabuses</li>
        <li>Puentes peatonales</li>
        <li>Muros y bardas</li>
      </ul>`,

    panelMupisTitle: "Mupis",
    panelMupisBody: `
      <p>Formatos a nivel de calle y en interiores, cerca del momento de compra.</p>
      <ul>
        <li>Mupis en vía pública</li>
        <li>Publicidad en centros comerciales</li>
        <li>Posters y carteles</li>
        <li>Espacios en aeropuertos y plazas</li>
      </ul>`,

    panelPantallasTitle: "Pantallas Digitales",
    panelPantallasBody: `
      <p>Contenido dinámico, con rotación programada y cambios de mensaje en el momento.</p>
      <ul>
        <li>Pantallas LED de gran formato</li>
        <li>Circuitos digitales en centros comerciales</li>
        <li>Pantallas en interiores y corporativos</li>
        <li>Contenido en video y animación</li>
      </ul>`,

    panelTransporteTitle: "Transporte Urbano",
    panelTransporteBody: `
      <p>Tu marca circulando por toda la ciudad, con cobertura de ruta completa.</p>
      <ul>
        <li>Autobuses y microbuses</li>
        <li>Metro y transporte masivo</li>
        <li>Taxis y unidades de reparto</li>
        <li>Estaciones y andenes</li>
      </ul>`,

    panelBtlTitle: "Activaciones BTL",
    panelBtlBody: `
      <p>Contacto directo con tu público, en la calle y en el punto de venta.</p>
      <ul>
        <li>Activaciones BTL</li>
        <li>Volanteo</li>
        <li>Publiandantes</li>
        <li>Loneros</li>
        <li>Botargas, sampling y demostraciones</li>
      </ul>`,

    panelImpresionTitle: "Impresión Digital y Offset",
    panelImpresionBody: `
      <h4>Impresión en offset</h4>
      <p>Contamos con experiencia en diseño e impresión de alto volumen, encuadernación y acabado.</p>
      <p>Manejamos papeles desde 60 gramos hasta 24 puntos (couché, bond, diario, revolución, adhesivos, caple, sulfatadas, polypap, entre otros), además realizamos impresión sobre papel especial grado alimenticio.</p>
      <ul>
        <li>Papeles especiales grado alimenticio</li>
        <li>Etiquetas adhesivas</li>
        <li>Libros, manuales y libretas pasta dura</li>
        <li>Revistas, catálogos y flyers</li>
        <li>Folletería, posters y calendarios</li>
        <li>Cajas, empaque y papelería</li>
      </ul>
      <h4>Impresión digital</h4>
      <ul>
        <li>Impresión digital en alta resolución, gran formato y rígidos</li>
        <li>Lona plastificada, lona mesh, vinil autoadherible, vinil electrostático, coroplast, foam board, trovicel, estireno, etc.</li>
        <li>Empaque y apoyo en la distribución en toda la República Mexicana</li>
      </ul>`,

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
    optionBtl: "Activaciones BTL",
    optionPrinting: "Impresión digital y offset",
    optionOther: "Otro",
    formOtherLabel: "¿Qué medio te interesa?",
    formOtherPlaceholder: "Escribe el medio que buscas",

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
    heroPrimary: "View our media",
    heroSecondary: "Talk to us",
    scroll: "Scroll",

    aboutTag: "About us",
    aboutTitle: "Specialists in<br /><em>Out of Home</em>",
    aboutTextOne:
      "An advertising company specialized in the development of OOH projects, founded 10 years ago with more than 38 years of experience developing outdoor media projects.",
    aboutTextTwo: "Strategies built on data and tangible results.",
    statTwo: "Years of experience",
    statThree: "Specialists",

    mediaTitleNew: "OUR MEDIA",

    mediaOneTitle: "Billboards",
    mediaOneText:
      "Billboards, outdoor displays, bus shelters, bridges, walls and more.",

    mediaTwoTitle: "Mupis",
    mediaTwoText: "Mupis, advertising in shopping centers, posters and more.",

    mediaThreeTitle: "Digital Screens",
    mediaThreeText: "Digital screens for dynamic and high-impact content.",

    mediaFourTitle: "Urban Transport",
    mediaFourText:
      "Urban transport media to take your brand throughout the city.",

    mediaFiveTitle: "BTL Activations",
    mediaFiveText:
      "Flyering, walking billboards, banner crews and point-of-sale activations.",

    mediaSixTitle: "Digital and Offset Printing",
    mediaSixText:
      "Large format, rigid substrates, binding and high-volume finishing.",

    mediaMore: "See more information →",
    mediaClick: "Click on each medium to see the full detail",

    panelCartelerasTitle: "Billboards",
    panelCartelerasBody: `
      <p>Large-format presence at the busiest points in the city.</p>
      <ul>
        <li>Spectacular billboards</li>
        <li>Outdoor displays</li>
        <li>Bus shelters</li>
        <li>Pedestrian bridges</li>
        <li>Walls and fences</li>
      </ul>`,

    panelMupisTitle: "Mupis",
    panelMupisBody: `
      <p>Street-level and indoor formats, close to the moment of purchase.</p>
      <ul>
        <li>Street mupis</li>
        <li>Advertising in shopping centers</li>
        <li>Posters and signage</li>
        <li>Airport and plaza spaces</li>
      </ul>`,

    panelPantallasTitle: "Digital Screens",
    panelPantallasBody: `
      <p>Dynamic content with scheduled rotation and real-time message changes.</p>
      <ul>
        <li>Large-format LED screens</li>
        <li>Digital circuits in shopping centers</li>
        <li>Indoor and corporate screens</li>
        <li>Video and animated content</li>
      </ul>`,

    panelTransporteTitle: "Urban Transport",
    panelTransporteBody: `
      <p>Your brand moving across the city, with full route coverage.</p>
      <ul>
        <li>Buses and minibuses</li>
        <li>Metro and mass transit</li>
        <li>Taxis and delivery vehicles</li>
        <li>Stations and platforms</li>
      </ul>`,

    panelBtlTitle: "BTL Activations",
    panelBtlBody: `
      <p>Direct contact with your audience, on the street and at the point of sale.</p>
      <ul>
        <li>BTL activations</li>
        <li>Flyering</li>
        <li>Walking billboards</li>
        <li>Banner crews</li>
        <li>Mascots, sampling and demonstrations</li>
      </ul>`,

    panelImpresionTitle: "Digital and Offset Printing",
    panelImpresionBody: `
      <h4>Offset printing</h4>
      <p>We have experience in design and high-volume printing, binding and finishing.</p>
      <p>We handle papers from 60 grams up to 24 points (couché, bond, newsprint, revolución, adhesives, caple, sulphate board, polypap, among others), and we also print on special food-grade paper.</p>
      <ul>
        <li>Special food-grade papers</li>
        <li>Adhesive labels</li>
        <li>Books, manuals and hardcover notebooks</li>
        <li>Magazines, catalogs and flyers</li>
        <li>Brochures, posters and calendars</li>
        <li>Boxes, packaging and stationery</li>
      </ul>
      <h4>Digital printing</h4>
      <ul>
        <li>High-resolution digital printing, large format and rigid substrates</li>
        <li>Laminated banner, mesh banner, self-adhesive vinyl, electrostatic vinyl, coroplast, foam board, trovicel, styrene, etc.</li>
        <li>Packaging and distribution support throughout Mexico</li>
      </ul>`,

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
    optionBtl: "BTL activations",
    optionPrinting: "Digital and offset printing",
    optionOther: "Other",
    formOtherLabel: "Which medium are you looking for?",
    formOtherPlaceholder: "Type the medium you need",

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

  // Cambia textos con HTML, por ejemplo <br>, <em> o listas
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
const mediaTypeSelect = document.getElementById("mediaTypeSelect");
const otherField = document.getElementById("formOther");

function toggleOtherField() {
  if (!mediaTypeSelect || !otherField) return;
  otherField.hidden = mediaTypeSelect.value !== "otro";
}

if (mediaTypeSelect) {
  mediaTypeSelect.addEventListener("change", toggleOtherField);
  toggleOtherField();
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const message =
      currentLanguage === "es"
        ? "Gracias. Tu mensaje fue registrado correctamente."
        : "Thank you. Your message was submitted successfully.";

    alert(message);

    contactForm.reset();
    toggleOtherField();
  });
}

// ===============================
// AUTOPLAY DE VIDEOS EN CELULAR
// ===============================
const autoVideos = document.querySelectorAll(".hero__video, .about__video-main");

autoVideos.forEach((video) => {
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.removeAttribute("controls");
});

function playAllVideos() {
  autoVideos.forEach((video) => {
    const intento = video.play();

    if (intento !== undefined) {
      intento.catch(() => {
        // iOS en modo de bajo consumo bloquea el autoplay hasta que hay interaccion
      });
    }
  });
}

// Intentos en los momentos en que iOS suele permitirlo
window.addEventListener("load", playAllVideos);
document.addEventListener("DOMContentLoaded", playAllVideos);
document.addEventListener("touchstart", playAllVideos, { once: true });
document.addEventListener("click", playAllVideos, { once: true });
document.addEventListener("scroll", playAllVideos, { once: true });

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) playAllVideos();
});

// Si el video entra en pantalla y sigue pausado, se reintenta
const videoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.paused) {
        entry.target.play().catch(() => {});
      }
    });
  },
  { threshold: 0.2 }
);

autoVideos.forEach((video) => videoObserver.observe(video));
