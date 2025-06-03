/*
  helpers.js
  Funções Auxiliares para o Portfólio 3D/Futurista
  Autor: Manus (baseado no plano de Germano Chita João)
  Descrição: Implementa funções utilitárias para animações, detecção de visibilidade e outras operações.
*/

// Smooth Scroll para âncoras
function smoothScroll(target, duration = 800) {
  const element = document.querySelector(target);
  if (!element) return;
  
  const headerOffset = document.getElementById('header').offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Detectar quando um elemento entra na viewport
function onVisibilityChange(el, callback, rootMargin = '0px') {
  if (!('IntersectionObserver' in window)) {
    // Fallback para navegadores que não suportam IntersectionObserver
    callback(el);
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin, threshold: 0.1 });
  
  observer.observe(el);
}

// Debounce (para otimizar eventos de scroll/resize)
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  
  return function() {
    const context = this, args = arguments;
    
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

// Lazy Loading de imagens
function lazyLoadImages() {
  if (!('IntersectionObserver' in window)) {
    // Fallback para navegadores que não suportam IntersectionObserver
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
    return;
  }
  
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '0px 0px 200px 0px' });

  lazyImages.forEach(img => {
    imgObserver.observe(img);
  });
}

// Validar e-mail
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Função para alternar classe
function toggleClass(element, cls) {
  if (element.classList.contains(cls)) {
    element.classList.remove(cls);
  } else {
    element.classList.add(cls);
  }
}

// Função para animar contadores
function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = end;
    }
  };
  
  window.requestAnimationFrame(step);
}

// Função para detectar suporte a recursos do navegador
function supportsFeature(feature) {
  switch (feature) {
    case 'webp':
      const canvas = document.createElement('canvas');
      if (canvas.getContext && canvas.getContext('2d')) {
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    
    case 'webgl':
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && 
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    
    case 'reducedMotion':
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    default:
      return false;
  }
}

// Função para aplicar efeito parallax
function applyParallax(element, intensity = 0.1) {
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    const moveX = mouseX * intensity * 100;
    const moveY = mouseY * intensity * 100;
    
    element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
}

// Função para aplicar efeito de tilt 3D
function applyTilt(element, maxTilt = 10) {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * maxTilt;
    const tiltY = ((centerX - x) / centerX) * maxTilt;
    
    element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
}

// Função para criar efeito de partículas
function createParticles(container, count = 50) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Posição aleatória
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Tamanho aleatório
    const size = Math.random() * 5 + 1;
    
    // Cor aleatória entre as cores neon
    const colors = ['#00F0FF', '#9D4EDD', '#FF2A6D'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Aplicar estilos
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    
    // Animação com duração aleatória
    const duration = Math.random() * 20 + 10;
    particle.style.animation = `particleFloat ${duration}s infinite linear`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    
    container.appendChild(particle);
  }
}

// Função para detectar dispositivo móvel
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para ajustar efeitos baseado na performance do dispositivo
function adjustEffectsForPerformance() {
  const isMobile = isMobileDevice();
  const hasReducedMotion = supportsFeature('reducedMotion');
  
  if (isMobile || hasReducedMotion) {
    // Reduzir ou desabilitar efeitos pesados
    document.body.classList.add('reduced-effects');
    
    // Reduzir número de partículas
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer && typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 20 // Reduzido de 80
          },
          // Outras configurações reduzidas...
        }
      });
    }
  }
}
