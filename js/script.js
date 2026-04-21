document.addEventListener('DOMContentLoaded', () => {
    // ==================== 1. MOBILE MENU TOGGLE ====================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Tutup menu saat link diklik
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ==================== 2. NAVBAR SCROLL & BACK TO TOP ====================
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Efek navbar saat scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Tampilkan/sembunyikan tombol back to top
        if (window.scrollY > 400) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // ==================== 3. SMOOTH SCROLL DENGAN OFFSET ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== 4. SCROLL SPY (ACTIVE NAV LINK) ====================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(currentSection)) {
                item.classList.add('active');
            }
        });
    });

    // ==================== 5. SCROLL ANIMATIONS (INTERSECTION OBSERVER) ====================
    const aosElements = document.querySelectorAll('[data-aos]');
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                animationObserver.unobserve(entry.target); // Hanya animasi sekali
            }
        });
    }, observerOptions);

    aosElements.forEach(el => animationObserver.observe(el));

    // ==================== 6. STATS COUNTER ANIMATION ====================
    const counters = document.querySelectorAll('.stat-number');
    let hasCounted = false;
    const statsSection = document.querySelector('.stats');

    const counterObserver = new IntersectionObserver((entries) => {        if (entries[0].isIntersecting && !hasCounted) {
            hasCounted = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 detik
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
            });
        }
    }, { threshold: 0.5 });

    if (statsSection) counterObserver.observe(statsSection);

    // ==================== 7. CONTACT FORM HANDLING ====================
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Ubah tombol ke state loading
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;

        // Simulasi pengiriman (ganti dengan fetch/API call jika sudah ada backend)
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
            submitBtn.style.background = '#10b981';
            contactForm.reset();

            // Kembalikan ke state awal setelah 2 detik
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });});
