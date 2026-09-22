document.addEventListener('DOMContentLoaded', () => {
    // 1. Animasi muncul perlahan saat di-scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Elemen akan muncul ketika 15% bagiannya terlihat di layar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-on-scroll');
                observer.unobserve(entry.target); // Hanya animasi satu kali
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-on-scroll');
    hiddenElements.forEach(el => observer.observe(el));

    // 2. Transisi latar belakang Navbar saat di-scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Tombol Menu Mobile Sederhana
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(5, 5, 5, 0.95)';
            navLinks.style.padding = '2rem 0';
            navLinks.style.borderBottom = '1px solid var(--border)';
        }
    });
});
