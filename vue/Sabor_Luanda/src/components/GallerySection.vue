<template>
  <section id="gallery" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title">Nossa Galeria</h2>
        <div class="section-divider"></div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Conheça nosso ambiente, pratos e eventos através das imagens.
        </p>
      </div>

      <div class="flex flex-wrap justify-center mb-8">
        <div class="flex flex-wrap justify-center gap-2 md:gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setActiveCategory(category.id)"
            :class="[
              'px-4 py-2 rounded-full transition-all',
              activeCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div 
          v-for="image in filteredImages" 
          :key="image.id" 
          class="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
          @click="openModal(image)"
        >
          <img 
            :src="image.src" 
            :alt="image.alt" 
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div class="text-white text-center p-4">
              <p class="font-medium">{{ image.alt }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredImages.length === 0" class="text-center py-12 text-gray-500">
        Nenhuma imagem encontrada nesta categoria.
      </div>

      <!-- Instagram Link -->
      <div class="text-center mt-12">
        <a 
          href="https://instagram.com/saborluanda" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
        >
          <span>Ver mais no Instagram</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div v-if="modalOpen" class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
        <div class="relative max-w-4xl w-full">
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            v-if="currentImage"
            :src="currentImage.src" 
            :alt="currentImage.alt" 
            class="w-full max-h-[80vh] object-contain"
          />
          
          <div class="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
            <button 
              @click="prevImage"
              class="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
              aria-label="Imagem anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              @click="nextImage"
              class="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
              aria-label="Próxima imagem"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div v-if="currentImage" class="text-white text-center mt-4">
            <p class="text-lg">{{ currentImage.alt }}</p>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'GallerySection',
  data() {
    return {
      activeCategory: 'all',
      modalOpen: false,
      currentImage: null,
      categories: [
        { id: 'all', name: 'Todos' },
        { id: 'ambiente', name: 'Ambiente' },
        { id: 'pratos', name: 'Pratos' },
        { id: 'eventos', name: 'Eventos' }
      ],
      images: [
        {
          id: 'img-1',
          src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
          alt: 'Interior do restaurante',
          category: 'ambiente'
        },
        {
          id: 'img-2',
          src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
          alt: 'Mesa com pratos variados',
          category: 'pratos'
        },
        {
          id: 'img-3',
          src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
          alt: 'Prato principal com filé',
          category: 'pratos'
        },
        {
          id: 'img-4',
          src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
          alt: 'Evento corporativo',
          category: 'eventos'
        },
        {
          id: 'img-5',
          src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c',
          alt: 'Área externa do restaurante',
          category: 'ambiente'
        },
        {
          id: 'img-6',
          src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
          alt: 'Sobremesa especial',
          category: 'pratos'
        },
        {
          id: 'img-7',
          src: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7',
          alt: 'Festa de aniversário',
          category: 'eventos'
        },
        {
          id: 'img-8',
          src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330',
          alt: 'Balcão do bar',
          category: 'ambiente'
        }
      ]
    };
  },
  computed: {
    filteredImages() {
      return this.activeCategory === 'all' 
        ? this.images 
        : this.images.filter(image => image.category === this.activeCategory);
    }
  },
  methods: {
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
    },
    openModal(image) {
      this.currentImage = image;
      this.modalOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalOpen = false;
      document.body.style.overflow = 'auto';
    },
    nextImage() {
      if (!this.currentImage) return;
      const currentIndex = this.filteredImages.findIndex(img => img.id === this.currentImage.id);
      const nextIndex = (currentIndex + 1) % this.filteredImages.length;
      this.currentImage = this.filteredImages[nextIndex];
    },
    prevImage() {
      if (!this.currentImage) return;
      const currentIndex = this.filteredImages.findIndex(img => img.id === this.currentImage.id);
      const prevIndex = (currentIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
      this.currentImage = this.filteredImages[prevIndex];
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
