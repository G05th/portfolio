<template>
  <section class="hero h-screen relative overflow-hidden">
    <!-- Slides -->
    <div class="hero-slider h-full">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        :class="['hero-slide absolute inset-0 transition-opacity duration-1000', 
          currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none']"
        :style="{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center px-4 max-w-4xl">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-dancing animate__animated animate__fadeInDown">
              {{ slide.title }}
            </h1>
            <p class="text-xl md:text-2xl text-white mb-8 animate__animated animate__fadeInUp animate__delay-1s">{{ slide.subtitle }}</p>
            <div class="flex flex-wrap justify-center gap-4 animate__animated animate__fadeIn animate__delay-2s">
              <a href="#menu" class="btn-primary inline-flex items-center group">
                Ver Cardápio
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <button @click="openReservationModal" class="btn-secondary inline-flex items-center group">
                Reservar Mesa
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            
            <!-- Badges -->
            <div class="mt-12 flex flex-wrap justify-center gap-4 animate__animated animate__fadeIn animate__delay-3s">
              <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span class="text-white font-medium">4.8/5 (256 avaliações)</span>
              </div>
              <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="text-white font-medium">Certificado de Excelência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation arrows -->
    <button
      @click="goToPrevSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Slide anterior"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      @click="goToNextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Próximo slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
      <span class="block text-sm mb-2">Deslize para baixo</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- Slide indicators -->
    <div class="absolute bottom-8 left-0 right-0">
      <div class="flex justify-center space-x-2">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="setCurrentSlide(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all',
            index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white'
          ]"
          :aria-label="`Ir para slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      currentSlide: 0,
      isAnimating: false,
      slides: [
        {
          image: `${import.meta.env.BASE_URL}images/restaurant-interior-1.jpg`,
          title: 'Descubra o Melhor Sabor de Luanda',
          subtitle: 'Promoção de inauguração: 40% de desconto neste mês!'
        },
        {
          image: `${import.meta.env.BASE_URL}images/restaurant-interior-2.jpg`,
          title: 'Pratos Feitos com Paixão',
          subtitle: 'Experimente nossas especialidades premiadas!'
        },
        {
          image: `${import.meta.env.BASE_URL}images/restaurant-interior-3.jpg`,
          title: 'Ambiente Sofisticado e Acolhedor',
          subtitle: 'O lugar perfeito para momentos inesquecíveis'
        }
      ],
      slideInterval: null
    };
  },
  mounted() {
    this.startSlideshow();
    
    // Adicionar link para CSS de animações
    if (!document.getElementById('animate-css')) {
      const link = document.createElement('link');
      link.id = 'animate-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
      document.head.appendChild(link);
    }
  },
  beforeUnmount() {
    this.stopSlideshow();
  },
  methods: {
    startSlideshow() {
      this.slideInterval = setInterval(() => {
        this.goToNextSlide();
      }, 5000);
    },
    stopSlideshow() {
      clearInterval(this.slideInterval);
    },
    resetSlideshow() {
      this.stopSlideshow();
      this.startSlideshow();
    },
    goToPrevSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.resetSlideshow();
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    },
    goToNextSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.resetSlideshow();
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    },
    setCurrentSlide(index) {
      if (this.isAnimating || this.currentSlide === index) return;
      this.isAnimating = true;
      this.currentSlide = index;
      this.resetSlideshow();
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    },
    openReservationModal() {
      // Scroll para a seção de reservas
      const reservationSection = document.getElementById('reservation');
      if (reservationSection) {
        reservationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.hero-slide {
  transition: opacity 1s ease;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
