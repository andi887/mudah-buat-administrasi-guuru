/* ==================== VARIABLES ==================== */
:root {
    --primary-color: #4f46e5;
    --primary-dark: #4338ca;
    --secondary-color: #0ea5e9;
    --text-color: #334155;
    --text-light: #64748b;
    --bg-color: #ffffff;
    --bg-light: #f8fafc;
    --bg-dark: #0f172a;
    --white: #ffffff;
    --border-color: #e2e8f0;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --transition: all 0.3s ease;
    --radius: 12px;
    --container-width: 1200px;
}

/* ==================== RESET & BASE ==================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
    overflow-x: hidden;
}

a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; height: auto; }

.container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 20px;
}

/* ==================== BUTTONS ==================== */
.btn {    display: inline-block;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    border: 2px solid transparent;
    font-size: 1rem;
}

.btn-primary {
    background: var(--primary-color);
    color: var(--white);
}
.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-outline {
    background: transparent;
    color: var(--white);
    border-color: var(--white);
}
.btn-outline:hover {
    background: var(--white);
    color: var(--primary-color);
}

.btn-block { width: 100%; }
.btn-large { padding: 1rem 2.5rem; font-size: 1.1rem; }

/* ==================== NAVBAR ==================== */
.navbar {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
    z-index: 1000;
    transition: var(--transition);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--bg-dark);
}
.logo span { color: var(--primary-color); }

.nav-links {
    display: flex;
    gap: 2rem;
}
.nav-links a {
    font-weight: 500;
    color: var(--text-color);
    transition: var(--transition);
    position: relative;
}
.nav-links a:hover { color: var(--primary-color); }
.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px; left: 0;
    width: 0; height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}
.nav-links a:hover::after { width: 100%; }

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}
.hamburger span {
    width: 25px; height: 3px;
    background: var(--text-color);
    border-radius: 2px;
    transition: var(--transition);
}

/* ==================== HERO SECTION ==================== */
.hero {
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    display: flex;
    align-items: center;    justify-content: center;
    text-align: center;
    color: var(--white);
    padding-top: 70px;
}
.hero-overlay {
    position: absolute; top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.4);
}
.hero-container { position: relative; z-index: 2; }

.hero-title {
    font-size: 3.5rem; font-weight: 800;
    margin-bottom: 1rem; line-height: 1.2;
}
.highlight { color: #ffd700; }
.hero-subtitle {
    font-size: 1.25rem; margin-bottom: 2rem;
    opacity: 0.9; max-width: 700px; margin-left: auto; margin-right: auto;
}
.hero-buttons {
    display: flex; gap: 1rem;
    justify-content: center; flex-wrap: wrap;
}
.scroll-indicator {
    position: absolute; bottom: 30px; left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
    color: var(--white); font-size: 1.5rem; z-index: 2;
}

/* ==================== SECTIONS GENERAL ==================== */
section { padding: 5rem 0; }
.section-header { text-align: center; margin-bottom: 3rem; }
.section-title {
    font-size: 2.5rem; font-weight: 700;
    color: var(--bg-dark); margin-bottom: 0.5rem;
}
.section-subtitle {
    color: var(--text-light); font-size: 1.1rem;
    max-width: 600px; margin: 0 auto;
}

/* ==================== FEATURES ==================== */
.features { background: var(--bg-light); }
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;}
.feature-card {
    background: var(--white); padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: var(--transition); text-align: center;
}
.feature-card:hover {
    transform: translateY(-10px); box-shadow: var(--shadow-lg);
}
.feature-icon {
    width: 70px; height: 70px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 1.5rem; color: var(--white); font-size: 1.5rem;
}
.feature-card h3 { margin-bottom: 0.8rem; color: var(--bg-dark); }
.feature-card p { color: var(--text-light); }

/* ==================== ABOUT ==================== */
.about-container {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 3rem; align-items: center;
}
.about-image {
    background: var(--bg-light); border-radius: var(--radius);
    height: 400px; display: flex; align-items: center; justify-content: center;
}
.image-placeholder { font-size: 5rem; color: var(--primary-color); opacity: 0.3; }
.about-content h2 { margin-bottom: 1.5rem; }
.about-content p { margin-bottom: 1.5rem; color: var(--text-light); }
.about-list { margin-bottom: 2rem; }
.about-list li {
    margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.8rem;
}
.about-list li i { color: var(--primary-color); }

/* ==================== STATS ==================== */
.stats {
    background: linear-gradient(135deg, var(--bg-dark), #1e293b);
    color: var(--white); padding: 4rem 0;
}
.stats-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem; text-align: center;
}
.stat-number {
    font-size: 3rem; font-weight: 800;
    margin-bottom: 0.5rem; color: var(--secondary-color);}
.stat-item p { font-size: 1.1rem; opacity: 0.9; }

/* ==================== TESTIMONIALS ==================== */
.testimonials { background: var(--bg-light); }
.testimonials-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
.testimonial-card {
    background: var(--white); padding: 2rem;
    border-radius: var(--radius); box-shadow: var(--shadow);
    transition: var(--transition);
}
.testimonial-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
.testimonial-stars { color: #f59e0b; margin-bottom: 1rem; font-size: 0.9rem; }
.testimonial-card > p {
    font-style: italic; color: var(--text-light);
    margin-bottom: 1.5rem; line-height: 1.7;
}
.testimonial-author { display: flex; align-items: center; gap: 1rem; }
.author-avatar {
    width: 50px; height: 50px; background: var(--bg-light);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    color: var(--primary-color); font-size: 1.2rem;
}
.author-info h4 { font-size: 1rem; color: var(--bg-dark); }
.author-info span { font-size: 0.85rem; color: var(--text-light); }

/* ==================== CTA ==================== */
.cta {
    background: linear-gradient(135deg, var(--primary-color), #7c3aed);
    color: var(--white); text-align: center; padding: 5rem 0;
}
.cta h2 { font-size: 2.5rem; margin-bottom: 1rem; }
.cta p { font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9; }

/* ==================== CONTACT ==================== */
.contact-wrapper {
    display: grid; grid-template-columns: 1fr 1.5fr; gap: 3rem;
}
.contact-item { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; }
.contact-item i {
    width: 40px; height: 40px; background: var(--primary-color);
    color: var(--white); border-radius: 50%; display: flex;
    align-items: center; justify-content: center; flex-shrink: 0;
}
.contact-item h4 { margin-bottom: 0.3rem; color: var(--bg-dark); }
.contact-item p { color: var(--text-light); }
.social-links { display: flex; gap: 1rem; margin-top: 2rem; }.social-links a {
    width: 40px; height: 40px; background: var(--bg-light);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    color: var(--text-color); transition: var(--transition);
}
.social-links a:hover { background: var(--primary-color); color: var(--white); transform: translateY(-3px); }
.form-group { margin-bottom: 1.2rem; }
.form-group input, .form-group textarea {
    width: 100%; padding: 0.9rem 1.2rem;
    border: 2px solid var(--border-color); border-radius: var(--radius);
    font-size: 1rem; transition: var(--transition); font-family: inherit;
}
.form-group input:focus, .form-group textarea:focus {
    outline: none; border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}
.form-group textarea { resize: vertical; }

/* ==================== FOOTER ==================== */
.footer { background: var(--bg-dark); color: #cbd5e1; padding: 4rem 0 0; }
.footer-container {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem; margin-bottom: 3rem;
}
.footer-col h4 { color: var(--white); margin-bottom: 1.2rem; font-size: 1.2rem; }
.footer-col ul li { margin-bottom: 0.8rem; }
.footer-col ul li a { transition: var(--transition); }
.footer-col ul li a:hover { color: var(--primary-color); padding-left: 5px; }
.footer-logo {
    font-size: 1.8rem; font-weight: 700;
    color: var(--white); display: block; margin-bottom: 1rem;
}
.footer-logo span { color: var(--secondary-color); }
.footer-col p { margin-bottom: 1rem; line-height: 1.6; }
.newsletter-form { display: flex; gap: 0.5rem; }
.newsletter-form input {
    flex: 1; padding: 0.7rem 1rem; border: none;
    border-radius: var(--radius); background: #334155; color: var(--white);
}
.newsletter-form input::placeholder { color: #94a3b8; }
.newsletter-form button {
    padding: 0.7rem 1.2rem; background: var(--primary-color);
    color: var(--white); border: none; border-radius: var(--radius);
    cursor: pointer; transition: var(--transition);
}
.newsletter-form button:hover { background: var(--primary-dark); }
.footer-bottom {
    text-align: center; padding: 1.5rem 0;
    border-top: 1px solid #334155; margin-top: 1rem;
}
/* ==================== BACK TO TOP ==================== */
.back-to-top {
    position: fixed; bottom: 30px; right: 30px;
    width: 45px; height: 45px; background: var(--primary-color);
    color: var(--white); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: var(--shadow-lg); opacity: 0; visibility: hidden;
    transition: var(--transition); z-index: 999;
}
.back-to-top.active { opacity: 1; visibility: visible; }
.back-to-top:hover { background: var(--primary-dark); transform: translateY(-3px); }

/* ==================== ANIMATIONS ==================== */
.fade-in { opacity: 0; transform: translateY(30px); animation: fadeIn 0.8s forwards; }
.fade-in-delay { opacity: 0; transform: translateY(30px); animation: fadeIn 0.8s 0.2s forwards; }
.fade-in-delay-2 { opacity: 0; transform: translateY(30px); animation: fadeIn 0.8s 0.4s forwards; }
@keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

[data-aos] { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease, transform 0.6s ease; }
[data-aos].aos-animate { opacity: 1; transform: translateY(0); }

/* ==================== RESPONSIVE ==================== */
@media (max-width: 992px) {
    .about-container, .contact-wrapper { grid-template-columns: 1fr; }
    .about-image { height: 300px; }
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed; top: 70px; left: -100%;
        width: 100%; height: calc(100vh - 70px);
        background: var(--white); flex-direction: column;
        align-items: center; justify-content: center; gap: 2rem;
        transition: var(--transition);
    }
    .nav-links.active { left: 0; }
    .hamburger { display: flex; }
    .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
    .hamburger.active span:nth-child(2) { opacity: 0; }
    .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }
    .hero-title { font-size: 2.5rem; }
    .section-title { font-size: 2rem; }
    .cta h2 { font-size: 2rem; }
}
@media (max-width: 480px) {
    .hero-title { font-size: 2rem; }
    .hero-subtitle { font-size: 1rem; }
    .btn { padding: 0.7rem 1.5rem; font-size: 0.9rem; }
}
