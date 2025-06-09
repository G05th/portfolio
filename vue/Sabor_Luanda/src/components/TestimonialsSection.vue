<template>
  <section id="testimonials" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title">O Que Dizem Sobre Nós</h2>
        <div class="section-divider"></div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Veja o que nossos clientes têm a dizer sobre sua experiência no Sabor Luanda.
          Mais de 250 avaliações com média de 4.8/5 estrelas!
        </p>
      </div>

      <!-- Estatísticas -->
      <div class="flex flex-wrap justify-center gap-8 mb-12">
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <div class="text-3xl font-bold text-primary mb-1">4.8</div>
          <div class="flex items-center mb-1">
            <div v-for="i in 5" :key="i" class="text-yellow-400">
              <svg v-if="i <= 4" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div class="text-gray-500 text-sm">Google Reviews</div>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <div class="text-3xl font-bold text-primary mb-1">256</div>
          <div class="text-gray-500 text-sm">Avaliações</div>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <div class="text-3xl font-bold text-primary mb-1">97%</div>
          <div class="text-gray-500 text-sm">Recomendam</div>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <div class="flex items-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div class="text-gray-500 text-sm">Certificado de Excelência</div>
        </div>
      </div>

      <!-- Depoimentos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center mb-4">
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 class="font-semibold">{{ testimonial.name }}</h4>
              <div class="flex items-center mt-1">
                <div v-for="(star, index) in renderStars(testimonial.rating)" :key="index" v-html="star"></div>
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic mb-3">"{{ testimonial.text }}"</p>
          <div class="flex justify-between items-center">
            <p class="text-gray-400 text-sm">{{ testimonial.date }}</p>
            <div class="flex items-center text-gray-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              {{ testimonial.likes }}
            </div>
          </div>
        </div>
      </div>

      <!-- Plataformas de avaliação -->
      <div class="mt-12 flex flex-wrap justify-center gap-8">
        <div class="text-center">
          <div class="text-gray-500 mb-2">Avalie-nos também em:</div>
          <div class="flex justify-center gap-4">
            <a href="https://g.page/r/saborluanda/review" target="_blank" rel="noopener noreferrer" class="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.46 8.12l-2.78 1.15c-.3-.6-.86-1.01-1.52-1.01s-1.22.41-1.52 1.01l-2.78-1.15c.56-1.18 1.76-2 3.16-2s2.6.82 3.16 2z" />
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
            </a>
            <a href="https://www.tripadvisor.com/saborluanda" target="_blank" rel="noopener noreferrer" class="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00AF87">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/saborluanda/reviews" target="_blank" rel="noopener noreferrer" class="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <a
          href="https://g.page/r/saborluanda/review"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-full transition-colors"
        >
          <span>Deixe sua avaliação</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: 'Ana Silva',
          image: `${import.meta.env.BASE_URL}images/customer-1.jpg`,
          rating: 5,
          text: 'Uma experiência gastronômica incrível! Os pratos são deliciosos e o ambiente é muito acolhedor. Recomendo o Mufete Tradicional, simplesmente divino. Voltarei com certeza!',
          date: '15 de Maio, 2025',
          likes: 24
        },
        {
          id: 2,
          name: 'Carlos Mendes',
          image: `${import.meta.env.BASE_URL}images/customer-2.jpg`,
          rating: 4.5,
          text: 'Ótimo lugar para reuniões de negócios. O serviço é impecável e o cardápio variado. A Moamba de Galinha é sensacional! O atendimento foi excepcional.',
          date: '3 de Maio, 2025',
          likes: 18
        },
        {
          id: 3,
          name: 'Mariana Costa',
          image: `${import.meta.env.BASE_URL}images/customer-3.jpg`,
          rating: 5,
          text: 'Celebrei meu aniversário aqui e foi perfeito! A equipe foi muito atenciosa e o chef preparou um menu especial para a ocasião. Todos os convidados ficaram impressionados!',
          date: '28 de Abril, 2025',
          likes: 32
        },
        {
          id: 4,
          name: 'João Paulo',
          image: `${import.meta.env.BASE_URL}images/customer-4.jpg`,
          rating: 5,
          text: 'Ambiente sofisticado, comida de primeira qualidade e um serviço atencioso. As sobremesas são um capítulo à parte - o Tiramisu de Maracujá é uma verdadeira obra de arte!',
          date: '15 de Abril, 2025',
          likes: 27
        }
      ]
    };
  },
  methods: {
    renderStars(rating) {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;

      for (let i = 0; i < fullStars; i++) {
        stars.push('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" class="text-yellow-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>');
      }

      if (hasHalfStar) {
        stars.push('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" class="text-yellow-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill-opacity="0.5"></path><path d="M12 2v15.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill-opacity="1"></path></svg>');
      }

      const remainingStars = 5 - Math.ceil(rating);
      for (let i = 0; i < remainingStars; i++) {
        stars.push('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" stroke-width="2" class="text-gray-300"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>');
      }

      return stars;
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente podem ser adicionados aqui */
</style>
