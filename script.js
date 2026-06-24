const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 18);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.classList.toggle('active', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.classList.remove('active');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
  });
});

const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach((item) => observer.observe(item));
}

const form = document.getElementById('quote-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const servico = document.getElementById('servico').value.trim();
  const detalhes = document.getElementById('detalhes').value.trim();

  const mensagem = [
    `Olá, Felipe! Meu nome é ${nome}.`,
    `Vim pelo site da Big Plotagens e tenho interesse em: ${servico}.`,
    detalhes ? `Detalhes do projeto: ${detalhes}` : 'Gostaria de explicar melhor o projeto e solicitar um orçamento.'
  ].join('\n\n');

  const url = `https://wa.me/5527999372568?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

document.getElementById('year').textContent = new Date().getFullYear();


const aboutSlides = document.querySelectorAll('.about-slide');
const aboutDots = document.querySelectorAll('.about-slider-dots .dot');

if (aboutSlides.length > 1) {
  let currentAboutSlide = 0;

  const setAboutSlide = (index) => {
    aboutSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === index);
    });

    aboutDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === index);
    });
  };

  setAboutSlide(currentAboutSlide);

  if (!reduceMotion) {
    window.setInterval(() => {
      currentAboutSlide = (currentAboutSlide + 1) % aboutSlides.length;
      setAboutSlide(currentAboutSlide);
    }, 3600);
  }
}
