<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo e Descrição -->
        <div class="space-y-4">
          <h3 class="text-2xl font-dancing font-bold">SABOR LUANDA</h3>
          <p class="text-gray-400">
            Experiência gastronômica única em Luanda, Angola. Sabores autênticos em um ambiente sofisticado e acolhedor.
          </p>
          <div class="flex space-x-4">
            <a 
              href="https://instagram.com/saborluanda" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon class="h-5 w-5" />
            </a>
            <a 
              href="https://facebook.com/saborluanda" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon class="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/saborluanda" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Links Rápidos -->
        <div>
          <h4 class="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Links Rápidos</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/portfolio/vue/Sabor_Luanda/" class="text-gray-400 hover:text-primary transition-colors">Início</router-link>
            </li>
            <li>
              <router-link to="/portfolio/vue/Sabor_Luanda/#about" class="text-gray-400 hover:text-primary transition-colors">Sobre</router-link>
            </li>
            <li>
              <router-link to="/portfolio/vue/Sabor_Luanda/menu" class="text-gray-400 hover:text-primary transition-colors">Cardápio</router-link>
            </li>
            <li>
              <router-link to="/portfolio/vue/Sabor_Luanda/gallery" class="text-gray-400 hover:text-primary transition-colors">Galeria</router-link>
            </li>
            <li>
              <router-link to="/portfolio/vue/Sabor_Luanda/reservation" class="text-gray-400 hover:text-primary transition-colors">Reservas</router-link>
            </li>
            <li>
              <router-link to="/portfolio/vue/Sabor_Luanda/contact" class="text-gray-400 hover:text-primary transition-colors">Contacto</router-link>
            </li>
          </ul>
        </div>

        <!-- Horário de Funcionamento -->
        <div>
          <h4 class="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Horário de Funcionamento</h4>
          <ul class="space-y-2">
            <li class="flex justify-between">
              <span class="text-gray-400">Segunda-Feira:</span>
              <span>12:00 - 23:00</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-400">Terça-Feira:</span>
              <span>12:00 - 23:00</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-400">Quarta-Feira:</span>
              <span>12:00 - 23:00</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-400">Quinta-Feira:</span>
              <span>12:00 - 23:00</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-400">Sexta-Feira:</span>
              <span>12:00 - 23:00</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-400">Sábado:</span>
              <span>12:00 - 23:00</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-400">Domingo:</span>
              <span>12:00 - 22:00</span>
            </li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h4 class="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contacto</h4>
          <ul class="space-y-4">
            <li class="flex items-start">
              <MapPinIcon class="text-primary h-5 w-5 mr-2 mt-1 flex-shrink-0" />
              <span class="text-gray-400">Avenida 4 de Fevereiro, Luanda, Angola</span>
            </li>
            <li class="flex items-center">
              <PhoneIcon class="text-primary h-5 w-5 mr-2 flex-shrink-0" />
              <a href="tel:+244923456789" class="text-gray-400 hover:text-primary transition-colors">
                +244 923 456 789
              </a>
            </li>
            <li class="flex items-center">
              <MailIcon class="text-primary h-5 w-5 mr-2 flex-shrink-0" />
              <a href="mailto:info@saborluanda.ao" class="text-gray-400 hover:text-primary transition-colors">
                info@saborluanda.ao
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="max-w-xl mx-auto text-center">
          <h4 class="text-lg font-semibold mb-4">Inscreva-se na nossa Newsletter</h4>
          <p class="text-gray-400 mb-4">
            Receba nossas promoções, eventos e novidades diretamente no seu e-mail.
          </p>
          <form class="flex flex-col sm:flex-row gap-2" @submit.prevent="subscribeNewsletter">
            <input
              type="email"
              v-model="newsletterEmail"
              placeholder="Seu e-mail"
              class="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              class="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition-colors"
            >
              Inscrever
            </button>
          </form>
          <div v-if="newsletterStatus" class="mt-3 text-sm" :class="newsletterStatus.type === 'success' ? 'text-green-400' : 'text-red-400'">
            {{ newsletterStatus.message }}
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
        <p>© {{ currentYear }} Sabor Luanda. Todos os direitos reservados.</p>
        <div class="flex justify-center space-x-4 mt-2">
          <a href="/privacy" class="hover:text-primary transition-colors">Política de Privacidade</a>
          <a href="/terms" class="hover:text-primary transition-colors">Termos de Uso</a>
        </div>
        <p class="mt-4">
          Desenvolvido por{' '}
          <a 
            href="https://g05th.github.io/meu_portfolio_front_end/index.html" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            Germano Chita João
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      newsletterEmail: '',
      newsletterStatus: null
    };
  },
  methods: {
    subscribeNewsletter() {
      // Simulação de inscrição na newsletter
      setTimeout(() => {
        this.newsletterStatus = {
          type: 'success',
          message: 'Inscrição realizada com sucesso!'
        };
        this.newsletterEmail = '';
        
        // Limpar mensagem após alguns segundos
        setTimeout(() => {
          this.newsletterStatus = null;
        }, 5000);
      }, 1000);
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
    TwitterIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      `
    },
    MapPinIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      `
    },
    PhoneIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      `
    },
    MailIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      `
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente podem ser adicionados aqui */
</style>
