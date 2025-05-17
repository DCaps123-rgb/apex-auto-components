
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
    const menuIcon = document.querySelector('.menu-icon');
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
