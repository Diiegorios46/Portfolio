function changeLanguage(lang) {
    const elements = document.querySelectorAll('[id]');

    elements.forEach(el => {
    const key = el.id;
    if (translations[lang][key]) {
    el.innerHTML = translations[lang][key];
    }
    });
}



    let currentLang = 'en';

    document.addEventListener("DOMContentLoaded", () => {
        const langIcon = document.getElementById('lang-toggle');
        if (langIcon) {
            langIcon.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            changeLanguage(currentLang);
            });
        }
        // Opcional: inicia en inglés
        changeLanguage(currentLang);
    });



const translations = {
  'en': {
    'nav-home': 'Home',
    'nav-projects': 'Projects',
    'nav-about': 'About',
    "hero-title" : "I am Diego Rios",
    "hero-subtitle" : "Full Stack Developer",
    "about-section-title" : "About Me",
    "about-description" : "I am a passionate Junior Web Developer eager to create clean, user-friendly websites that deliver great experiences. Skilled in React, JavaScript, and responsive design, with a strong focus on accessibility and performance. Always learning, proactive, and ready to contribute to innovative projects and grow within a dynamic team.",
    "about-title" : "🎓 Education",
    "education-1" : "Universidad Nacional del Comahue (UNCO) Argentina Neuquen",
    "education-2" : "High School Diploma with a specialization in Accounting Instituto de Formación Docente N.º 12, Argentina",
    "inta-text" : "INTA (National Institute of Agricultural Technology)",
    "inta-2-text" : "6 months working on a react project" ,
    "skills-title": "Skills",
    "projects-section-title": "My Projects"
  },
  'es': {
    'nav-home': 'Inicio',
    'nav-projects': 'Proyectos',
    'nav-about': 'Sobre mí',
    "hero-title" : "Soy Diego Rios",
    "hero-subtitle" : "Desarrollador Full Stack",
    "about-section-title" : "Sobre mi",
    "about-description" : "Soy un desarrollador web junior apasionado que está ansioso por crear sitios web limpios y fáciles de usar que ofrezcan grandes experiencias. Experto en React, JavaScript y diseño responsivo, con un fuerte enfoque en la accesibilidad y el rendimiento. Siempre aprendiendo, proactivo y dispuesto a contribuir a proyectos innovadores y crecer dentro de un equipo dinámico.",
    "about-title" :"🎓 Educacion",      
    "education-1" : "University National the Comahue (UNCO) Argentina Neuquen",
    "education-2" : "Bachillerato con especialización en Contabilidad Instituto de Formación Docente N.o 12, Argentina",
    "inta-text" : "INTA (Nacional Instituto de Agricultura Tecnologíca)",
    "inta-2-text" : "6 meses trabajando en un proyecto con react" ,
    "skills-title": "Habilidades",
    "projects-section-title": "Mis Proyectos"
  }
};
