/*
 * Big Plotagens — interações do site
 *
 * Este arquivo controla apenas recursos visuais e o formulário do WhatsApp.
 * Não coleta, armazena ou envia dados para servidor próprio.
 */

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Cabeçalho: aplica fundo ao rolar a página. */
  const header = document.querySelector('.site-header');
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 18);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* Menu móvel: abre, fecha e melhora a navegação por teclado. */
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');

  const closeMenu = () => {
    menu?.classList.remove('open');
    menuButton?.classList.remove('active');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = !menu?.classList.contains('open');
    menu?.classList.toggle('open', isOpen);
    menuButton.classList.toggle('active', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!menu?.classList.contains('open')) return;
    if (!menu.contains(event.target) && !menuButton?.contains(event.target)) closeMenu();
  });

  /* Entrada suave das seções. Desativada quando o usuário reduz animações. */
  const revealItems = document.querySelectorAll('.reveal');

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
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

    revealItems.forEach((item) => observer.observe(item));
  }

  /*
   * Carrossel da seção Sobre.
   * - troca automática a cada 4,5 segundos;
   * - pausa ao passar o mouse, usar teclado ou sair da aba;
   * - permite troca manual por setas e indicadores;
   * - respeita a preferência de reduzir movimento.
   */
  const slider = document.querySelector('[data-about-slider]');

  if (slider) {
    const slides = [...slider.querySelectorAll('[data-slide]')];
    const dots = [...slider.querySelectorAll('[data-slider-dot]')];
    const previousButton = slider.querySelector('[data-slider-prev]');
    const nextButton = slider.querySelector('[data-slider-next]');
    let currentIndex = 0;
    let timerId = null;
    let paused = false;

    const showSlide = (index) => {
      if (!slides.length) return;
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === currentIndex;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === currentIndex;
        dot.classList.toggle('is-active', active);
        if (active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    };

    const stopAutoPlay = () => {
      if (timerId !== null) {
        window.clearInterval(timerId);
        timerId = null;
      }
    };

    const startAutoPlay = () => {
      stopAutoPlay();
      if (reduceMotion || paused || slides.length < 2 || document.hidden) return;
      timerId = window.setInterval(() => showSlide(currentIndex + 1), 4500);
    };

    const goToSlide = (index) => {
      showSlide(index);
      startAutoPlay();
    };

    previousButton?.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextButton?.addEventListener('click', () => goToSlide(currentIndex + 1));
    dots.forEach((dot, dotIndex) => dot.addEventListener('click', () => goToSlide(dotIndex)));

    slider.addEventListener('mouseenter', () => {
      paused = true;
      stopAutoPlay();
    });
    slider.addEventListener('mouseleave', () => {
      paused = false;
      startAutoPlay();
    });
    slider.addEventListener('focusin', () => {
      paused = true;
      stopAutoPlay();
    });
    slider.addEventListener('focusout', () => {
      paused = false;
      startAutoPlay();
    });
    document.addEventListener('visibilitychange', startAutoPlay);

    showSlide(0);
    startAutoPlay();
  }

  /* Formulário: monta a mensagem localmente e abre o WhatsApp. */
  const form = document.getElementById('quote-form');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('nome');
    const serviceInput = document.getElementById('servico');
    const detailsInput = document.getElementById('detalhes');

    if (!(nameInput instanceof HTMLInputElement) ||
        !(serviceInput instanceof HTMLSelectElement) ||
        !(detailsInput instanceof HTMLTextAreaElement)) return;

    const nome = nameInput.value.trim().slice(0, 80);
    const servico = serviceInput.value.trim().slice(0, 120);
    const detalhes = detailsInput.value.trim().slice(0, 1200);

    if (!nome || !servico) {
      form.reportValidity();
      return;
    }

    const mensagem = [
      `Olá, Felipe! Meu nome é ${nome}.`,
      `Vim pelo site da Big Plotagens e tenho interesse em: ${servico}.`,
      detalhes
        ? `Detalhes do projeto: ${detalhes}`
        : 'Gostaria de explicar melhor o projeto e solicitar um orçamento.'
    ].join('\n\n');

    const url = `https://wa.me/5527999372568?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  /* Ano automático do rodapé. */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
