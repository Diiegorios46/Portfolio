
document.addEventListener("DOMContentLoaded", () => {
    const langIcon = document.querySelector('.fa-language');
    let currentLang = 'en';

    langIcon.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerHTML = el.getAttribute(`data-${currentLang}`);
        });
    });
})
