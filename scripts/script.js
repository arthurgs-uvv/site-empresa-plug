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

import {catalogoProdutos} from "./catalogoProdutos.js"

const catalogoGrid = document.querySelector('#produtos-grid');
const botaoVerMaisProdutos = document.querySelector('#btn-ver-mais-produtos');
const LIMITE_INICIAL_PRODUTOS = 10;
const catalogoProdutosEmbaralhado = [...catalogoProdutos];

const embaralharProdutos = (produtos) => {
  for (let i = produtos.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [produtos[i], produtos[j]] = [produtos[j], produtos[i]];
  }
};

embaralharProdutos(catalogoProdutosEmbaralhado);

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

const renderizarProdutos = (quantidade) => {
  if (!catalogoGrid) return;

  catalogoGrid.innerHTML = '';
  catalogoProdutosEmbaralhado.slice(0, quantidade).forEach((produto) => {
    catalogoGrid.appendChild(criarCardProduto(produto));
  });
};

if (catalogoGrid) {
  const totalProdutos = catalogoProdutosEmbaralhado.length;
  const quantidadeInicial = Math.min(LIMITE_INICIAL_PRODUTOS, totalProdutos);

  renderizarProdutos(quantidadeInicial);

  if (botaoVerMaisProdutos) {
    if (totalProdutos <= LIMITE_INICIAL_PRODUTOS) {
      botaoVerMaisProdutos.hidden = true;
    } else {
      botaoVerMaisProdutos.hidden = false;
      botaoVerMaisProdutos.addEventListener('click', () => {
        renderizarProdutos(totalProdutos);
        botaoVerMaisProdutos.hidden = true;
      });
    }
  }
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
