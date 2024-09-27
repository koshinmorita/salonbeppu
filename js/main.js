document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-sp');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
