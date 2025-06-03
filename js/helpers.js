/*
helpers.js
Funções Auxiliares (Smooth Scroll, Debounce, Detect Visibility, etc.)
Autor: [Seu Nome]
*/

// Smooth Scroll para âncoras (se precisar de polifill adicional, mas scroll-behavior já cobre na maioria dos navegadores)
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
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      callback(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin });
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

// Lazy Loading de imagens (utiliza data-src)
function lazyLoadImages() {
const lazyImgs = document.querySelectorAll('img.lazy');
const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
}, { rootMargin: '0px 0px 200px 0px' });

lazyImgs.forEach(img => {
  imgObserver.observe(img);
});
}

// Validar e-mail (regex simples)
function isValidEmail(email) {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(String(email).toLowerCase());
}

// Função para alternar classe (ajuda no filtro de projetos)
function toggleClass(element, cls) {
if (element.classList.contains(cls)) {
  element.classList.remove(cls);
} else {
  element.classList.add(cls);
}
}
