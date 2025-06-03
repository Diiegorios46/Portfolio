document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll('.project').forEach(div => {
    div.addEventListener('click', () => {
        const url = div.getAttribute('data-link');
        window.open(url, '_blank');
        });
    });
});