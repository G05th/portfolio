<template>
  <section id="menu" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title">Nosso Cardápio</h2>
        <div class="section-divider"></div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Descubra nossa seleção de pratos preparados com ingredientes frescos e técnicas culinárias refinadas.
          Cada prato é uma experiência única que combina tradição angolana e inovação gastronômica.
        </p>
      </div>

      <div class="flex flex-wrap justify-center mb-12">
        <div class="flex flex-wrap justify-center gap-2 md:gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setActiveCategory(category.id)"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full transition-all',
              activeCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
          >
            <component :is="category.icon" class="h-5 w-5" />
            {{ category.name }}
          </button>
        </div>
      </div>

      <div v-for="section in menuSections" :key="section.title" class="mb-12">
        <template v-if="getFilteredItems(section.items).length > 0">
          <h3 class="text-2xl font-bold mb-6 text-center">{{ section.title }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="item in getFilteredItems(section.items)" 
              :key="item.id" 
              class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div class="relative h-48 overflow-hidden">
                <img 
                  :src="item.image" 
                  :alt="item.name" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div v-if="item.featured" class="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Especial
                </div>
                <div v-if="item.new" class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Novo
                </div>
                <div v-if="item.discount" class="absolute bottom-2 left-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {{ item.discount }}% OFF
                </div>
              </div>
              <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-lg font-semibold">{{ item.name }}</h4>
                  <div>
                    <span v-if="item.oldPrice" class="text-gray-400 line-through text-sm mr-2">{{ item.oldPrice }}</span>
                    <span class="text-primary font-bold">{{ item.price }}</span>
                  </div>
                </div>
                <p class="text-gray-600 text-sm mb-3">{{ item.description }}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div v-for="i in 5" :key="i" class="text-yellow-400">
                      <svg v-if="i <= item.rating" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <button class="text-primary hover:text-primary-dark transition-colors flex items-center text-sm font-medium">
                    Pedir agora
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="text-center mt-12">
        <a 
          href="/menu.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
        >
          <span>Ver cardápio completo (PDF)</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
        </a>
      </div>
      
      <!-- Promoções especiais -->
      <div class="mt-16 bg-primary/10 rounded-lg p-6 md:p-8">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-primary">Promoções Especiais</h3>
          <p class="text-gray-600 mt-2">Ofertas por tempo limitado para você aproveitar</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div class="md:w-1/3 relative">
              <img src="/images/mufete.jpg" alt="Promoção de Mufete" class="w-full h-full object-cover" />
              <div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                -40%
              </div>
            </div>
            <div class="p-4 md:w-2/3 flex flex-col justify-between">
              <div>
                <h4 class="font-bold text-lg mb-2">Terça de Mufete</h4>
                <p class="text-gray-600 text-sm mb-2">Todas as terças-feiras, nosso tradicional Mufete com 40% de desconto. Válido para almoço e jantar.</p>
              </div>
              <div class="flex justify-between items-center mt-2">
                <div>
                  <span class="text-gray-400 line-through">8.500 AOA</span>
                  <span class="text-primary font-bold ml-2">5.100 AOA</span>
                </div>
                <button class="bg-primary text-white px-4 py-1 rounded-full text-sm hover:bg-primary-dark transition-colors">
                  Reservar
                </button>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div class="md:w-1/3 relative">
              <img src="/images/calulu.jpg" alt="Promoção de Calulu" class="w-full h-full object-cover" />
              <div class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Novo
              </div>
            </div>
            <div class="p-4 md:w-2/3 flex flex-col justify-between">
              <div>
                <h4 class="font-bold text-lg mb-2">Menu Executivo</h4>
                <p class="text-gray-600 text-sm mb-2">De segunda a sexta, das 12h às 15h. Inclui entrada, prato principal, sobremesa e bebida.</p>
              </div>
              <div class="flex justify-between items-center mt-2">
                <div>
                  <span class="text-primary font-bold">6.500 AOA</span>
                  <span class="text-gray-500 text-xs ml-2">por pessoa</span>
                </div>
                <button class="bg-primary text-white px-4 py-1 rounded-full text-sm hover:bg-primary-dark transition-colors">
                  Ver Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuSection',
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { 
          id: 'all', 
          name: 'Todos',
          icon: 'UtensilsIcon'
        },
        { 
          id: 'starters', 
          name: 'Entradas',
          icon: 'CoffeeIcon'
        },
        { 
          id: 'main', 
          name: 'Principais',
          icon: 'UtensilsIcon'
        },
        { 
          id: 'desserts', 
          name: 'Sobremesas',
          icon: 'IceCreamIcon'
        },
        { 
          id: 'drinks', 
          name: 'Bebidas',
          icon: 'WineIcon'
        }
      ],
      menuSections: [
        {
          title: 'Entradas',
          items: [
            {
              id: 'starter-1',
              name: 'Camarão Grelhado',
              description: 'Camarões grelhados com alho, limão e ervas frescas. Servidos com molho especial da casa.',
              price: '4.500 AOA', 
              image: `${import.meta.env.BASE_URL}images/restaurant-interior-1.jpg`,
              category: 'starters',
              featured: true,
              rating: 5,
              new: false
            },
            {
              id: 'starter-2',
              name: 'Bruschetta de Tomate',
              description: 'Pão italiano torrado com tomate, manjericão e azeite extra virgem. Perfeito para compartilhar.',
              price: '2.800 AOA',
              image: `${import.meta.env.BASE_URL}images/restaurant-interior-2.jpg`,
              category: 'starters',
              rating: 4,
              new: true
            },
            {
              id: 'starter-3',
              name: 'Salada Mista',
              description: 'Mix de folhas verdes, tomate, pepino, cebola roxa e molho da casa. Opção saudável e refrescante.',
              price: '3.200 AOA',
              oldPrice: '3.800 AOA',
              image: `${import.meta.env.BASE_URL}images/restaurant-interior-3.jpg`,
              category: 'starters',
              rating: 4,
              discount: 15
            }
          ]
        },
        {
          title: 'Pratos Principais',
          items: [
            {
              id: 'main-1',
              name: 'Mufete Tradicional',
              description: 'Peixe grelhado, feijão de óleo de palma, banana e batata doce. O prato mais tradicional de Angola.',
              price: '8.500 AOA',
              image: `${import.meta.env.BASE_URL}images/mufete.jpg`,
              category: 'main',
              featured: true,
              rating: 5
            },
            {
              id: 'main-2',
              name: 'Calulu de Peixe',
              description: 'Peixe seco com quiabo, bertalha e óleo de palma. Um prato rico em sabores e tradição.',
              price: '7.800 AOA',
              image: `${import.meta.env.BASE_URL}images/calulu.jpg`,
              category: 'main',
              rating: 4
            },
            {
              id: 'main-3',
              name: 'Moamba de Galinha',
              description: 'Frango cozido em molho de óleo de palma com quiabo. Acompanha funge ou arroz.',
              price: '6.900 AOA',
              image: `${import.meta.env.BASE_URL}images/calulu-carne.jpg`,
              category: 'main',
              rating: 5,
              new: true
            },
            {
              id: 'main-4',
              name: 'Filé Mignon',
              description: 'Filé mignon grelhado ao ponto com molho de vinho tinto e batatas rústicas. Para os amantes de carne.',
              price: '9.500 AOA',
              oldPrice: '11.000 AOA',
              image: `${import.meta.env.BASE_URL}images/restaurant-interior-1.jpg`,
              category: 'main',
              rating: 5,
              discount: 15
            }
          ]
        },
        {
          title: 'Sobremesas',
          items: [
            {
              id: 'dessert-1',
              name: 'Mousse de Maracujá',
              description: 'Mousse cremoso de maracujá com calda fresca. Uma explosão de sabores tropicais.',
              price: '3.200 AOA',
              image: `${import.meta.env.BASE_URL}images/sobremesa-1.jpg`,
              category: 'desserts',
              rating: 5
            },
            {
              id: 'dessert-2',
              name: 'Pudim de Leite',
              description: 'Pudim tradicional com calda de caramelo. Receita caseira que derrete na boca.',
              price: '2.800 AOA',
              image: `${import.meta.env.BASE_URL}images/sobremesa-2.jpg`,
              category: 'desserts',
              featured: true,
              rating: 5
            },
            {
              id: 'dessert-3',
              name: 'Tiramisu de Maracujá',
              description: 'Nossa versão tropical do clássico italiano. Com creme de maracujá e biscoitos champagne.',
              price: '3.500 AOA',
              image: `${import.meta.env.BASE_URL}images/sobremesa-3.jpg`,
              category: 'desserts',
              rating: 4,
              new: true
            }
          ]
        },
        {
          title: 'Bebidas',
          items: [
            {
              id: 'drink-1',
              name: 'Sangria Tropical',
              description: 'Vinho tinto com frutas tropicais e especiarias. Refrescante e aromática.',
              price: '4.500 AOA',
              image: `${import.meta.env.BASE_URL}images/restaurant-interior-2.jpg`,
              category: 'drinks',
              featured: true,
              rating: 5
            },
            {
              id: 'drink-2',
              name: 'Suco Natural',
              description: 'Sucos naturais de frutas da estação. Pergunte ao garçom as opções disponíveis.',
              price: '1.800 AOA',
              image: `${import.meta.env.BASE_URL}images/restaurant-interior-3.jpg`,
              category: 'drinks',
              rating: 4
            }
          ]
        }
      ]
    };
  },
  methods: {
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
    },
    getFilteredItems(items) {
      return this.activeCategory === 'all' 
        ? items 
        : items.filter(item => item.category === this.activeCategory);
    }
  },
  components: {
    UtensilsIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      `
    },
    CoffeeIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        </svg>
      `
    },
    IceCreamIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      `
    },
    WineIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      `
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente podem ser adicionados aqui */
</style>
