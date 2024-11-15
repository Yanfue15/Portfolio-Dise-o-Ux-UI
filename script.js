/*=icono menu=*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remover toggle icon y navbar cuando se hace click en navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ... resto del código existente ...

// Código del modal para experiencia relevante
document.addEventListener('DOMContentLoaded', function() {
    // Botones de experiencia
    const expButtons = document.querySelectorAll('.services-box .btn');
    expButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    // Cerrar con X
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Cerrar al hacer clic fuera
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});

// Agregar al final del archivo script.js existente
document.addEventListener('DOMContentLoaded', function() {
    // Código nuevo solo para los modales de portfolio
    const portfolioButtons = document.querySelectorAll('.portfolio-box .more-info');
    portfolioButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            console.log('Modal ID:', modalId); // Para debugging
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });
});

// Ejemplo de cómo podrías manipular rutas en JavaScript
const filePath = "Trabajos_mios/pdf-Portfolio-sin-link.pdf";