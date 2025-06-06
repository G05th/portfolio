/*
  main.js
  Scripts Principais para o Portfólio 3D/Futurista
  Autor: Manus (baseado no plano de Germano Chita João)
  Descrição: Implementa interações, animações e efeitos 3D para o portfólio moderno.
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
  const cubeControls = document.querySelectorAll('.cube-control');
  const skillsCube = document.querySelector('.skills-cube');
  const cursorOuter = document.querySelector('.cursor-outer');
  const cursorInner = document.querySelector('.cursor-inner');
  
  let currentTestimonial = 0;
  let testimonialInterval;
  let isModalOpen = false;
  let currentCubeFace = 'front';

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.style.overflow = 'auto';
      initAnimations();
      initParticles();
    }, 1500);
  });

  /* ---------- Inicializar Animações ---------- */
  function initAnimations() {
    // Typing animation para o subtítulo do hero
    const typingElement = document.querySelector('.typing-text');
    const phrases = [
      'Desenvolvedor Full Stack',
      'UX Designer',
      'Especialista em Interfaces Futuristas'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeText() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pausa antes de começar a deletar
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pausa antes de começar a próxima frase
      }
      
      setTimeout(typeText, typingSpeed);
    }
    
    typeText();
    
    // Iniciar animações de skill bars quando visíveis
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
      onVisibilityChange(level, (el) => {
        el.style.animationPlayState = 'running';
      });
    });
    
    // Animações de entrada para elementos quando visíveis
    const animatedElements = [
      { selector: '.about-img-frame', animation: 'animate-fade-in' },
      { selector: '.about-paragraph', animation: 'animate-fade-in-up' },
      { selector: '.project-card', animation: 'animate-fade-in-up' },
      { selector: '.testimonial-card', animation: 'animate-fade-in' },
      { selector: '.contact-form', animation: 'animate-fade-in-up' },
      { selector: '.contact-info', animation: 'animate-fade-in-up' }
    ];
    
    animatedElements.forEach(item => {
      const elements = document.querySelectorAll(item.selector);
      elements.forEach((el, index) => {
        el.style.opacity = '0';
        onVisibilityChange(el, (element) => {
          element.classList.add(item.animation);
          element.style.animationDelay = `${index * 0.2}s`;
        });
      });
    });
  }

  /* ---------- Inicializar Partículas ---------- */
  function initParticles() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#00F0FF"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#9D4EDD",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
  }

  /* ---------- Cursor Personalizado ---------- */
  function updateCursor(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorOuter.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    cursorInner.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
  }
  
  document.addEventListener('mousemove', updateCursor);
  
  // Efeito hover em links e botões
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .filter-btn, .social-icon');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
    
    el.addEventListener('mousedown', () => {
      document.body.classList.add('cursor-click');
    });
    
    el.addEventListener('mouseup', () => {
      document.body.classList.remove('cursor-click');
    });
  });

  /* ---------- Mobile Menu Toggle ---------- */
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
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

  /* ---------- Smooth Scroll ---------- */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      smoothScroll(targetId);
      
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  });

  /* ---------- Dark Mode Toggle ---------- */
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    const nextTheme = current === 'light' ? 'dark' : 'light';
    
    htmlEl.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  });

  /* ---------- Cubo de Skills ---------- */
  cubeControls.forEach(control => {
    control.addEventListener('click', () => {
      const face = control.getAttribute('data-face');
      
      // Remover classe active de todos os controles
      cubeControls.forEach(btn => btn.classList.remove('active'));
      
      // Adicionar classe active ao controle clicado
      control.classList.add('active');
      
      // Rotacionar o cubo para a face selecionada
      rotateCube(face);
    });
  });
  
  function rotateCube(face) {
    let rotateX = 0;
    let rotateY = 0;
    
    switch(face) {
      case 'front':
        rotateX = 0;
        rotateY = 0;
        break;
      case 'back':
        rotateX = 0;
        rotateY = 180;
        break;
      case 'right':
        rotateX = 0;
        rotateY = 90;
        break;
      case 'left':
        rotateX = 0;
        rotateY = -90;
        break;
      case 'top':
        rotateX = -90;
        rotateY = 0;
        break;
      case 'bottom':
        rotateX = 90;
        rotateY = 0;
        break;
    }
    
    skillsCube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    currentCubeFace = face;
  }

  /* ---------- Filtrar Projetos ---------- */
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover classe active de todos os botões
      filterButtons.forEach(b => b.classList.remove('active'));
      
      // Adicionar classe active ao botão clicado
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      // Filtrar projetos
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
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
      const idx = parseInt(dot.getAttribute('data-index'), 10);
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
    e.preventDefault();
    let isValid = true;
  
    // Validação Nome
    const nameInput = contactForm.querySelector('#name');
    const nameError = nameInput.nextElementSibling.nextElementSibling.nextElementSibling;
    
    if (nameInput.value.trim() === '') {
      setError(nameInput, nameError, 'O nome é obrigatório.');
      isValid = false;
    } else {
      clearError(nameInput, nameError);
    }
  
    // Validação E-mail
    const emailInput = contactForm.querySelector('#email');
    const emailError = emailInput.nextElementSibling.nextElementSibling.nextElementSibling;
    
    if (emailInput.value.trim() === '') {
      setError(emailInput, emailError, 'O e-mail é obrigatório.');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      setError(emailInput, emailError, 'Insira um e-mail válido.');
      isValid = false;
    } else {
      clearError(emailInput, emailError);
    }
  
    // Validação Assunto
    const subjectInput = contactForm.querySelector('#subject');
    const subjectError = subjectInput.nextElementSibling.nextElementSibling.nextElementSibling;
    
    if (subjectInput.value.trim() === '') {
      setError(subjectInput, subjectError, 'O assunto é obrigatório.');
      isValid = false;
    } else {
      clearError(subjectInput, subjectError);
    }
  
    // Validação Mensagem
    const messageInput = contactForm.querySelector('#message');
    const messageError = messageInput.nextElementSibling.nextElementSibling.nextElementSibling;
    
    if (messageInput.value.trim() === '') {
      setError(messageInput, messageError, 'A mensagem é obrigatória.');
      isValid = false;
    } else {
      clearError(messageInput, messageError);
    }
  
    // Se estiver válido, mostrar modal de sucesso
    if (isValid) {
      openModal();
      
      // Enviar formulário após 3 segundos
      setTimeout(() => {
        contactForm.submit();
      }, 3000);
    }
  });

  function setError(inputEl, errorEl, message) {
    inputEl.parentElement.classList.add('invalid');
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }

  function clearError(inputEl, errorEl) {
    inputEl.parentElement.classList.remove('invalid');
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }

  /* ---------- Modal de Sucesso ---------- */
  function openModal() {
    modal.classList.add('show');
    isModalOpen = true;
    
    // Desabilitar scroll do body
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('show');
    isModalOpen = false;
    
    // Habilitar scroll do body
    document.body.style.overflow = 'auto';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Fechar modal com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  });

  /* ---------- Parallax Effects ---------- */
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Parallax para elementos específicos
    const parallaxElements = document.querySelectorAll('.hero-title, .hero-subtitle, .about-img-frame');
    
    parallaxElements.forEach(el => {
      const speedX = el.getAttribute('data-speed-x') || 20;
      const speedY = el.getAttribute('data-speed-y') || 20;
      
      const moveX = (mouseX - 0.5) * speedX;
      const moveY = (mouseY - 0.5) * speedY;
      
      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
    
    // Parallax para o grid do hero
    const heroGrid = document.querySelector('.hero-grid');
    if (heroGrid) {
      const moveX = (mouseX - 0.5) * 40;
      const moveY = (mouseY - 0.5) * 40;
      
      heroGrid.style.transform = `perspective(1000px) rotateX(60deg) scale(1.5) translate3d(${moveX}px, ${moveY}px, 0)`;
    }
  });

  /* ---------- GSAP Animations (se disponível) ---------- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // Animação de entrada para seções
    gsap.registerPlugin(ScrollTrigger);
    
    sections.forEach(section => {
      gsap.fromTo(
        section.querySelector('.section-header'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
    
    // Animação para o grid de fundo
    gsap.to('.section-grid-bg', {
      backgroundPosition: '100px 100px',
      ease: 'none',
      duration: 20,
      repeat: -1
    });
  }
});
