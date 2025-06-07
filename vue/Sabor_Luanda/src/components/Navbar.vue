<template>
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
    scrolled || !transparent ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent']">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img src="/images/logo.png" alt="Sabor Luanda Logo" class="h-12 mr-2" />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <ul class="flex space-x-6">
            <li v-for="(item, index) in navItems" :key="index">
              <router-link :to="item.path" class="text-white hover:text-primary transition-colors">
                {{ item.name }}
              </router-link>
            </li>
          </ul>

          <button @click="openReservationModal" class="bg-primary text-white px-6 py-2 rounded-full font-medium transition-all hover:bg-primary-dark hover:scale-105 transform">
            Reservar Mesa
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-white focus:outline-none"
          @click="toggleMenu"
          :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
        >
          <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide">
      <div v-if="isOpen" class="fixed inset-0 bg-black/95 z-50 md:hidden">
        <div class="flex flex-col h-full">
          <div class="flex justify-between items-center p-4">
            <router-link to="/" class="flex items-center" @click="closeMenu">
              <img src="/images/logo.png" alt="Sabor Luanda Logo" class="h-12 mr-2" />
            </router-link>
            <button
              class="text-white focus:outline-none"
              @click="toggleMenu"
              aria-label="Fechar menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex flex-col items-center justify-center flex-1 space-y-8">
            <ul class="flex flex-col items-center space-y-6">
              <li v-for="(item, index) in navItems" :key="index">
                <router-link
                  :to="item.path"
                  class="text-white text-xl hover:text-primary transition-colors"
                  @click="closeMenu"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>

            <button @click="openReservationModal" class="bg-primary text-white px-8 py-3 rounded-full font-medium transition-all hover:bg-primary-dark hover:scale-105 transform">
              Reservar Mesa
            </button>

            <div class="flex space-x-6 mt-8">
              <a
                v-for="(social, index) in socialLinks"
                :key="index"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-primary transition-colors"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
      scrolled: false,
      transparent: true,
      navItems: [
        { name: 'Início', path: '/' },
        { name: 'Sobre', path: '/#about' },
        { name: 'Cardápio', path: '/#menu' },
        { name: 'Galeria', path: '/#gallery' },
        { name: 'Depoimentos', path: '/#testimonials' },
        { name: 'Contacto', path: '/#contact' }
      ],
      socialLinks: [
        { 
          name: 'Instagram', 
          url: 'https://instagram.com/saborluanda',
          icon: 'InstagramIcon'
        },
        { 
          name: 'Facebook', 
          url: 'https://facebook.com/saborluanda',
          icon: 'FacebookIcon'
        },
        { 
          name: 'Telefone', 
          url: 'tel:+244923456789',
          icon: 'PhoneIcon'
        }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      // Impedir rolagem quando o menu está aberto
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.isOpen = false;
      document.body.style.overflow = '';
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    openReservationModal() {
      this.$emit('open-reservation');
      this.closeMenu();
      
      // Scroll para a seção de reservas
      const reservationSection = document.getElementById('reservation');
      if (reservationSection) {
        reservationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  components: {
    InstagramIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 6.5h.01M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        </svg>
      `
    },
    FacebookIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      `
    },
    PhoneIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      `
    }
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
