const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navegacion');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});