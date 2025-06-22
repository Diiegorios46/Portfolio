document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll('.img-link').forEach(div => {
    div.addEventListener('click', () => {
        const url = div.getAttribute('data-link');
        window.open(url, '_blank');
        });
    });
});