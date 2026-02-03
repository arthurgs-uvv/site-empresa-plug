
    /* ===========================
    TEXTO DINÂMICO NO BANNER
    =========================== */
    const frasesHero = [
    "Soluções completas em Elétrica, Hidráulica, EPIs e Ferramentas",
    "Tudo para sua obra, manutenção, e indústria em um só lugar",
    "Qualidade, variedade e atendimento especializado",
    "Chame no WhatsApp e resolva agora mesmo"
    ];

    let fraseAtual = 0;
    const heroTitulo = document.querySelector('.hero h2');

    setInterval(() => {
    heroTitulo.style.opacity = 0;

    setTimeout(() => {
        fraseAtual = (fraseAtual + 1) % frasesHero.length;
        heroTitulo.innerHTML = frasesHero[fraseAtual];
        heroTitulo.style.opacity = 1;
    }, 300);

    }, 4000);


    /* ===========================
    ANIMAÇÃO AO ROLAR A PÁGINA
    =========================== */
    const elementos = document.querySelectorAll('.card, .section-title, .about p');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = 1;
        }
    });
    }, {
    threshold: 0.15
    });

    elementos.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all .7s ease';
    observer.observe(el);
    });


    /* ===========================
    INTERAÇÃO NOS CARDS
    =========================== */
    document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,.15)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,.08)';
    });
    });


    /* ===========================
    DESTAQUE DO MENU AO ROLAR
    =========================== */
    const secoes = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
    const offset = document.querySelector('.header').offsetHeight;
    let scrollPos = window.scrollY + offset + 20;


    secoes.forEach(sec => {
        if (
        scrollPos >= sec.offsetTop &&
        scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
        links.forEach(link => link.classList.remove('active'));
        const linkAtivo = document.querySelector(
            `nav a[href="#${sec.id}"]`
        );
        if (linkAtivo) linkAtivo.classList.add('active');
        }
    });
    });