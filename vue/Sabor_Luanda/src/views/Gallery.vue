<template>
  <div class="gallery-page">
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="section-title">Nossa Galeria</h1>
          <div class="section-divider"></div>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Conheça nosso ambiente, pratos e momentos especiais através das imagens.
            Uma experiência visual que antecipa o que você encontrará no Sabor Luanda.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(image, index) in images" :key="index" class="gallery-item">
            <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div class="relative h-64 overflow-hidden">
                <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div class="p-4">
                <h3 class="font-semibold text-gray-800">{{ image.title }}</h3>
                <p class="text-gray-600 text-sm">{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GalleryView',
  data() {
    return {
      images: [
        {
          src: '/images/restaurant-interior-1.jpg',
          alt: 'Interior do Restaurante',
          title: 'Ambiente Elegante',
          description: 'Nosso salão principal com decoração sofisticada e aconchegante.'
        },
        {
          src: '/images/restaurant-interior-2.jpg',
          alt: 'Área de Jantar',
          title: 'Área de Jantar',
          description: 'Espaço perfeito para momentos especiais e jantares românticos.'
        },
        {
          src: '/images/restaurant-interior-3.jpg',
          alt: 'Bar do Restaurante',
          title: 'Bar Exclusivo',
          description: 'Nosso bar com seleção de bebidas premium e coquetéis exclusivos.'
        },
        {
          src: '/images/mufete.jpg',
          alt: 'Mufete Tradicional',
          title: 'Mufete Tradicional',
          description: 'Um dos pratos mais tradicionais da culinária angolana.'
        },
        {
          src: '/images/calulu.jpg',
          alt: 'Calulu de Peixe',
          title: 'Calulu de Peixe',
          description: 'Prato típico preparado com peixe seco, quiabo e bertalha.'
        },
        {
          src: '/images/calulu-carne.jpg',
          alt: 'Calulu de Carne',
          title: 'Calulu de Carne',
          description: 'Versão especial do calulu preparada com carne selecionada.'
        },
        {
          src: '/images/sobremesa-1.jpg',
          alt: 'Sobremesa Especial',
          title: 'Sobremesas Artesanais',
          description: 'Nossas sobremesas são preparadas diariamente pelo chef confeiteiro.'
        },
        {
          src: '/images/sobremesa-2.jpg',
          alt: 'Pudim de Leite',
          title: 'Pudim de Leite',
          description: 'Sobremesa tradicional com calda de caramelo caseira.'
        },
        {
          src: '/images/sobremesa-3.jpg',
          alt: 'Tiramisu de Maracujá',
          title: 'Tiramisu de Maracujá',
          description: 'Nossa versão tropical do clássico italiano.'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Estilos específicos da página de galeria */
</style>

