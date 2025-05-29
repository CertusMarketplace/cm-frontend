// Función Header

const burger = document.querySelector('.burguer');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

burger.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1100) {
        sidebar.classList.add('translate-x-full');
    }
})