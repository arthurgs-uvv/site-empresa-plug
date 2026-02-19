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

if (heroTitulo) {
  setInterval(() => {
    heroTitulo.style.opacity = 0;

    setTimeout(() => {
      fraseAtual = (fraseAtual + 1) % frasesHero.length;
      heroTitulo.textContent = frasesHero[fraseAtual];
      heroTitulo.style.opacity = 1;
    }, 300);
  }, 4000);
}

/* ===========================
CATÁLOGO DE PRODUTOS
=========================== */
const catalogoProdutos = [
  {
    codigo: "010214",
    imagem: "../style/imagens/webp/disjuntor-weg.webp",
    nome: "Disjuntor Unipolar WEG – 10A / 16A / 20A / 25A / 32A / 40A",
    classe: "eletrica-protecao",
    descricao: "O Disjuntor Unipolar WEG é utilizado para proteção de circuitos elétricos contra sobrecargas e curtos-circuitos em instalações residenciais e comerciais. Disponível nas correntes de 10A, 16A, 20A, 25A, 32A e 40A, atende diferentes demandas de consumo elétrico. Fabricado com alto padrão de qualidade, garante segurança, confiabilidade e longa vida útil. Compatível com trilho DIN e quadros de distribuição padrão, é um dos itens mais vendidos do segmento elétrico, sendo indispensável para instalações seguras e dentro das normas técnicas."
  },
  {
    codigo: "030118",
    imagem: "../style/imagens/webp/lampada9w.webp",
    nome: "Lâmpada LED Bulbo – 9W / 12W / 15W / 20W (Luz Branca 6500K)",
    classe: "eletrica-iluminacao",
    descricao: "A Lâmpada LED Bulbo é ideal para iluminação residencial e comercial, oferecendo economia de energia e alta eficiência luminosa. Disponível nas potências de 9W, 12W, 15W e 20W, adapta-se a diferentes ambientes e necessidades. Emite luz branca fria 6500K, proporcionando maior claridade e conforto visual. Possui longa vida útil, acendimento instantâneo e baixo consumo. Compatível com soquete padrão, é um dos produtos de maior giro no varejo elétrico."
  },
  {
    codigo: "060101",
    imagem: "../style/imagens/webp/cabo-flexível.webp",
    nome: "Cabo Flexível Antichama 750V – 1,5mm² / 2,5mm² / 4mm² / 6mm²",
    classe: "eletrica-cabos",
    descricao: "O Cabo Flexível Antichama 750V é indicado para instalações elétricas residenciais, comerciais e industriais leves. Disponível nas bitolas de 1,5mm², 2,5mm², 4mm² e 6mm², atende diferentes circuitos e níveis de carga. Fabricado com condutor de cobre e isolamento antichama, garante segurança, flexibilidade e excelente condução elétrica. Ideal para tomadas, iluminação e equipamentos, é um dos itens mais vendidos do varejo elétrico."
  },
  {
    codigo: "081900",
    imagem: "../style/imagens/webp/mangueira_corrugada.webp",
    nome: "Conduíte Corrugado – 20mm / 25mm / 32mm",
    classe: "eletrica-conduites",
    descricao: "O Conduíte Corrugado é utilizado para proteção e organização de fios e cabos elétricos em instalações embutidas. Disponível nos diâmetros de 20mm, 25mm e 32mm, adapta-se a diferentes quantidades de cabos. Flexível e resistente, facilita a instalação e protege contra danos mecânicos. Amplamente utilizado em obras residenciais e comerciais, é um item essencial no segmento elétrico."
  },
  {
    codigo: "075800",
    imagem: "../style/imagens/webp/cloro_multiacao.webp",
    nome: "Cloro Granulado para Piscina – 1kg / 5kg / 10kg",
    classe: "piscina-tratamento",
    descricao: "O Cloro Granulado para Piscina é utilizado para desinfecção da água, eliminando bactérias e microrganismos. Disponível em embalagens de 1kg, 5kg e 10kg, atende piscinas residenciais e comerciais. Fácil de aplicar, garante água limpa, segura e cristalina. Produto essencial para manutenção regular de piscinas, com alta recorrência de compra."
  },
  {
    codigo: "040552",
    imagem: "../style/imagens/webp/fita-isolante.webp",
    nome: "Fita Isolante Antichama – 19mm x 5m / 10m / 20m",
    classe: "eletrica-acessorios",
    descricao: "A Fita Isolante Antichama é utilizada para isolamento e proteção de fios e cabos elétricos. Disponível nos comprimentos de 5m, 10m e 20m, atende desde pequenos reparos até instalações completas. Produzida com material resistente e antichama, oferece segurança contra curtos-circuitos. Essencial para eletricistas e instaladores, é um dos produtos mais vendidos do segmento elétrico."
  }
];

const catalogoGrid = document.querySelector('#produtos-grid');

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = 1;
    }
  });
}, {
  threshold: 0.15
});

elementos.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all .7s ease';
  observer.observe(el);
});

/* ===========================
INTERAÇÃO NOS CARDS
=========================== */
document.querySelectorAll('.card').forEach((card) => {
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
const secoes = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (!header) return;

  const offset = header.offsetHeight;
  const scrollPos = window.scrollY + offset + 20;

  let encontrou = false;

  secoes.forEach((sec) => {
    if (
      scrollPos >= sec.offsetTop &&
      scrollPos < sec.offsetTop + sec.offsetHeight
    ) {
      links.forEach(link => link.classList.remove('active'));

      const linkAtivo = document.querySelector(`nav a[href="#${sec.id}"]`);
      if (linkAtivo) linkAtivo.classList.add('active');

      encontrou = true;
    }
  });

  // se nenhuma seção estiver ativa
  if (!encontrou) {
    links.forEach(link => link.classList.remove('active'));
  }
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
