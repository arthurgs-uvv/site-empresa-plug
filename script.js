
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
    PRODUTOS EM DESTAQUE
    =========================== */
    const produtos = [
    {
        nome: "Furadeira de Impacto 650W",
        preco: "R$ 199,90",
        imagem: "./imagens/WhatsApp Image 2026-01-30 at 10.17.53 - Editado.jpg",
        descricao: "Perfeita para concreto e alvenaria, com velocidade variável."
    },
    {
        nome: "Kit Chaves Isoladas 5 Peças",
        preco: "R$ 79,90",
        imagem: "./imagens/WhatsApp Image 2026-01-30 at 10.17.53 - Editado.jpg",
        descricao: "Segurança extra para serviços elétricos com isolamento 1000V."
    },
    {
        nome: "Caixa d'Água 1000L",
        preco: "R$ 529,90",
        imagem: "./imagens/WhatsApp Image 2026-01-30 at 10.17.53 - Editado.jpg",
        descricao: "Material resistente e fácil instalação para áreas externas."
    },
    {
        nome: "Luva de Proteção Anticorte",
        preco: "R$ 24,90",
        imagem: "./imagens/WhatsApp Image 2026-01-30 at 10.17.53 - Editado.jpg",
        descricao: "Conforto e aderência para trabalhos de manutenção."
    },
    {
        nome: "Mangueira Flexível 15m",
        preco: "R$ 54,90",
        imagem: "./imagens/WhatsApp Image 2026-01-30 at 10.17.53 - Editado.jpg",
        descricao: "Ideal para jardinagem e uso doméstico com trama reforçada."
    },
    {
        nome: "Disjuntor Bipolar 40A",
        preco: "R$ 36,90",
        imagem: "./imagens/WhatsApp Image 2026-01-30 at 10.17.53 - Editado.jpg",
        descricao: "Proteção eficiente para quadros de distribuição."
    }
    ];

    const produtosGrid = document.querySelector('#produtos-grid');

    if (produtosGrid) {
    produtosGrid.innerHTML = produtos.map(produto => `
        <div class="card product-card">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div>
            <h3>${produto.nome}</h3>
            <p class="details">${produto.descricao}</p>
        </div>
        <span class="price">${produto.preco}</span>
        </div>
    `).join('');
    }


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
