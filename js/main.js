/*
  main.js
  Scripts Principais: Scroll Spy, Navbar, Parallax, Preloader, Dark Mode, Filter, Carousel, Form Validation.
  Autor: [Seu Nome]
  Alterações: Implementação de carrossel de skills automático; fundo do Hero permanece parallax.
*/

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Variáveis Globais ---------- */
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const mobileMenuBtn = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const preloader = document.getElementById('preloader');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const prevTestimonialBtn = document.querySelector('.testimonial-prev');
  const nextTestimonialBtn = document.querySelector('.testimonial-next');
  const testimonialDots = document.querySelectorAll('.dot');
  const contactForm = document.getElementById('contact-form');
  const modal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const skillsCarousel = document.querySelector('.skills-carousel');
  let currentTestimonial = 0;
  let testimonialInterval;
  let carouselInterval;

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    preloader.classList.add('hidden');
    document.body.style.overflow = 'auto';
    lazyLoadImages();
    startSkillsCarousel();
  });

  /* ---------- Mobile Menu Toggle ---------- */
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  /* ---------- Scroll Spy & Navbar Background ---------- */
  function handleScroll() {
    const scrollPos = window.scrollY;
    // Navbar muda background
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Destacar link do menu conforme seção
    sections.forEach(sec => {
      const top = sec.offsetTop - header.offsetHeight - 30;
      const bottom = top + sec.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        const id = sec.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', debounce(handleScroll));

  /* ---------- Smooth Scroll via JS (para casos onde não funcionar nativo) ---------- */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      smoothScroll(targetId);
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    });
  });

  /* ---------- Parallax Hero Background ---------- */
  const heroSection = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    heroSection.style.backgroundPositionY = `${offset * 0.5}px`;
  });

  /* ---------- Dark Mode Toggle ---------- */
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    const nextTheme = current === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateThemeIcon(nextTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeToggleBtn.textContent = '☀️';
    } else {
      themeToggleBtn.textContent = '🌙';
    }
  }

  /* ---------- Iniciar Carrossel de Skills ---------- */
  function startSkillsCarousel() {
    if (!skillsCarousel) return;
    const itemWidth = skillsCarousel.firstElementChild.offsetWidth + parseInt(getComputedStyle(skillsCarousel).gap);
    // a cada 2 segundos, move o container para a esquerda
    carouselInterval = setInterval(() => {
      if (skillsCarousel.scrollLeft + skillsCarousel.clientWidth >= skillsCarousel.scrollWidth) {
        // chegou ao final → volta ao início
        skillsCarousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        skillsCarousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
      }
    }, 2000);
    // Pausar ao hover
    skillsCarousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    skillsCarousel.addEventListener('mouseleave', () => startSkillsCarousel());
  }

  /* ---------- Lazy Loading ---------- */
  // Já chamado após load no preloader
  // lazyLoadImages();

  /* ---------- Animações ao Entrar na Viewport (About, Skills, Projects) ---------- */
  // Sobre: texto e imagem
  const aboutText = document.querySelector('.about-text');
  const aboutImg = document.querySelector('.about-img');
  onVisibilityChange(aboutText, (el) => {
    el.style.animation = 'slideInRight 1s ease-in-out forwards';
  }, '-100px');

  onVisibilityChange(aboutImg, (el) => {
    el.style.animation = 'zoomIn 1s ease-in-out forwards';
  }, '-100px');

  // Projetos: ao entrar na viewport, adicionar classe “in-view”
  projectCards.forEach(card => {
    onVisibilityChange(card, (el) => {
      el.classList.add('in-view');
    }, '-100px');
  });

  /* ---------- Filtrar Projetos (Projects) ---------- */
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ---------- Testimonial Carousel ---------- */
  function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentTestimonial = index;
  }

  function nextTestimonial() {
    let next = currentTestimonial + 1;
    if (next >= testimonialItems.length) next = 0;
    showTestimonial(next);
  }

  function prevTestimonial() {
    let prev = currentTestimonial - 1;
    if (prev < 0) prev = testimonialItems.length - 1;
    showTestimonial(prev);
  }

  nextTestimonialBtn.addEventListener('click', () => {
    nextTestimonial();
    resetTestimonialInterval();
  });

  prevTestimonialBtn.addEventListener('click', () => {
    prevTestimonial();
    resetTestimonialInterval();
  });

  testimonialDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10);
      showTestimonial(idx);
      resetTestimonialInterval();
    });
  });

  function startTestimonialCarousel() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }

  function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialCarousel();
  }

  showTestimonial(0);
  startTestimonialCarousel();

  // Pausar autoplay ao passar o mouse
  const testimonialContainer = document.querySelector('.testimonial-carousel');
  testimonialContainer.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
  });
  testimonialContainer.addEventListener('mouseleave', () => {
    startTestimonialCarousel();
  });

  /* ---------- Formulário de Contato ---------- */
  contactForm.addEventListener('submit', (e) => {
    let isValid = true;
  
    // --- Validação Nome ---
    const nameInput = contactForm.querySelector('#name');
    const nameError = nameInput.nextElementSibling;
    if (nameInput.value.trim() === '') {
      setError(nameInput, nameError, 'O nome é obrigatório.');
      isValid = false;
    } else {
      clearError(nameInput, nameError);
    }
  
    // --- Validação E-mail ---
    const emailInput = contactForm.querySelector('#email');
    const emailError = emailInput.nextElementSibling;
    if (emailInput.value.trim() === '') {
      setError(emailInput, emailError, 'O e-mail é obrigatório.');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      setError(emailInput, emailError, 'Insira um e-mail válido.');
      isValid = false;
    } else {
      clearError(emailInput, emailError);
    }
  
    // --- Validação Assunto ---
    const subjectInput = contactForm.querySelector('#subject');
    const subjectError = subjectInput.nextElementSibling;
    if (subjectInput.value.trim() === '') {
      setError(subjectInput, subjectError, 'O assunto é obrigatório.');
      isValid = false;
    } else {
      clearError(subjectInput, subjectError);
    }
  
    // --- Validação Mensagem ---
    const messageInput = contactForm.querySelector('#message');
    const messageError = messageInput.nextElementSibling;
    if (messageInput.value.trim() === '') {
      setError(messageInput, messageError, 'A mensagem é obrigatória.');
      isValid = false;
    } else {
      clearError(messageInput, messageError);
    }
  
    // Se não estiver válido, interrompe o envio
    if (!isValid) {
      e.preventDefault();
      return;
    }

    
    openModal();

    setTimeout(() => {
      contactForm.submit();
    }, 1000);
  
  });
  

  function setError(inputEl, errorEl, message) {
    inputEl.parentElement.classList.add('invalid');
    errorEl.textContent = message;
  }

  function clearError(inputEl, errorEl) {
    inputEl.parentElement.classList.remove('invalid');
    errorEl.textContent = '';
  }

  /* ---------- Modal de Sucesso ---------- */
  function openModal() {
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

});
