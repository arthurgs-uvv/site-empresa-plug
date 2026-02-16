
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
    CATÁLOGO DE PRODUTOS
    =========================== */
    const catalogoProdutos = [
    {
        codigo: "005843",
        imagem: "",
        nome: "Adesivo Plástico PVC Amanco 175g com Pincel",
        classe: "hidraulica-adesivos",
        descricao: "Adesivo indicado para instalações hidráulicas em PVC rígido, promovendo união segura e acabamento resistente. Ideal para reparos e novas obras, oferece aplicação prática com pincel acoplado, garantindo distribuição uniforme do produto. Sua fórmula facilita o encaixe das conexões, reduz vazamentos e mantém a durabilidade do sistema mesmo em uso contínuo."
    },
    {
        codigo: "009214",
        imagem: "",
        nome: "Conector de Emenda com Trava 32A",
        classe: "eletrica-conectores",
        descricao: "Conector rápido para instalações elétricas com trava de segurança, ideal para emendas de condutores em quadros e caixas de passagem. Proporciona fixação firme, reduz risco de aquecimento e otimiza a manutenção, garantindo organização e identificação dos circuitos."
    },
    {
        codigo: "006552",
        imagem: "",
        nome: "Fita Isolante Profissional 20m",
        classe: "eletrica-isolantes",
        descricao: "Fita isolante com alta resistência térmica e excelente aderência, indicada para acabamentos em fios e cabos. Mantém o isolamento por mais tempo, evitando ressecamento e desprendimento em ambientes internos e externos."
    },
    {
        codigo: "010338",
        imagem: "",
        nome: "Luva de Segurança Nitrílica",
        classe: "epis-protecao",
        descricao: "Luva nitrílica de alta resistência para proteção das mãos em serviços de manutenção, construção e manuseio de produtos químicos leves. Oferece conforto, flexibilidade e ótima aderência, permitindo precisão no trabalho diário."
    },
    {
        codigo: "004770",
        imagem: "",
        nome: "Serra Copo Bi-metal 60mm",
        classe: "ferramentas-corte",
        descricao: "Serra copo bi-metal para cortes em metal, madeira e PVC, com excelente durabilidade e acabamento preciso. Indispensável para instalações elétricas e hidráulicas, garantindo abertura uniforme em caixas e painéis."
    },
    {
        codigo: "007901",
        imagem: "",
        nome: "Torneira Plástica para Jardim 3/4",
        classe: "hidraulica-conexoes",
        descricao: "Torneira plástica robusta para uso em jardins e áreas externas, com fácil acionamento e resistência ao clima. Indicado para pontos de água em residências e comércios, oferecendo boa vedação e longa vida útil."
    }
    ];

    const catalogoGrid = document.querySelector('#catalogo-grid');

    const criarCardProduto = (produto) => {
    const card = document.createElement('article');
    card.classList.add('card', 'product-card');

    const imagemHtml = produto.imagem
        ? `<img src="${produto.imagem}" alt="${produto.nome}">`
        : `<div class="product-placeholder" aria-hidden="true">Sem imagem</div>`;

    card.innerHTML = `
        <div class="product-media">
        ${imagemHtml}
        <span class="product-code">Cód. ${produto.codigo}</span>
        </div>
        <div class="product-content">
        <h3>${produto.nome}</h3>
        <p class="product-class">${produto.classe}</p>
        <p class="product-description">${produto.descricao}</p>
        </div>
    `;

    return card;
    };

    if (catalogoGrid) {
    catalogoProdutos.forEach((produto) => {
        catalogoGrid.appendChild(criarCardProduto(produto));
    });
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


/* ===========================
FORMULÁRIO FALE CONOSCO
=========================== */
const faleConoscoForm = document.querySelector('#fale-conosco-form');

if (faleConoscoForm) {
  const camposObrigatorios = faleConoscoForm.querySelectorAll('input[required], textarea[required]');

  const validarCampo = (campo) => {
    const mensagemErro = campo.parentElement.querySelector('.error-message');
    const valorLimpo = campo.value.trim();

    if (!valorLimpo) {
      campo.classList.add('invalid');
      mensagemErro.textContent = 'Este campo é obrigatório.';
      return false;
    }

    campo.classList.remove('invalid');
    mensagemErro.textContent = '';
    return true;
  };

  camposObrigatorios.forEach((campo) => {
    campo.addEventListener('input', () => validarCampo(campo));
    campo.addEventListener('blur', () => validarCampo(campo));
  });

  faleConoscoForm.addEventListener('submit', (evento) => {
    let formularioValido = true;

    camposObrigatorios.forEach((campo) => {
      const campoValido = validarCampo(campo);
      if (!campoValido) {
        formularioValido = false;
      }
    });

    if (!formularioValido) {
      evento.preventDefault();
      return;
    }

    evento.preventDefault();
    faleConoscoForm.reset();
    camposObrigatorios.forEach((campo) => {
      campo.classList.remove('invalid');
      const mensagemErro = campo.parentElement.querySelector('.error-message');
      mensagemErro.textContent = '';
    });
  });
}
