<template>
  <section id="reservation" class="py-20 bg-primary/5">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title">Faça sua Reserva</h2>
        <div class="section-divider"></div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Reserve sua mesa e prepare-se para uma experiência gastronômica inesquecível.
          Recomendamos reservas com antecedência para garantir disponibilidade.
        </p>
      </div>

      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-5">
          <div class="md:col-span-2 bg-primary p-8 text-white flex flex-col justify-center">
            <h3 class="text-2xl font-bold mb-6">Informações de Contacto</h3>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="mt-1">
                  <CalendarIcon class="h-5 w-5" />
                </div>
                <div>
                  <h4 class="font-semibold">Horário de Funcionamento</h4>
                  <p class="text-sm opacity-90">Segunda a Sábado: 12h00 - 23h00</p>
                  <p class="text-sm opacity-90">Domingo: 12h00 - 22h00</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="mt-1">
                  <ClockIcon class="h-5 w-5" />
                </div>
                <div>
                  <h4 class="font-semibold">Reservas</h4>
                  <p class="text-sm opacity-90">Recomendamos reservas com pelo menos 2 horas de antecedência</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="mt-1">
                  <UsersIcon class="h-5 w-5" />
                </div>
                <div>
                  <h4 class="font-semibold">Grupos</h4>
                  <p class="text-sm opacity-90">Para grupos acima de 8 pessoas, entre em contacto direto pelo telefone</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="mt-1">
                  <MessageIcon class="h-5 w-5" />
                </div>
                <div>
                  <h4 class="font-semibold">Contacto</h4>
                  <p class="text-sm opacity-90">+244 923 456 789</p>
                  <p class="text-sm opacity-90">reservas@saborluanda.ao</p>
                </div>
              </div>
            </div>
            
            <!-- Benefícios de reservar -->
            <div class="mt-8 pt-6 border-t border-white/20">
              <h4 class="font-semibold mb-4">Benefícios de Reservar Online</h4>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <CheckIcon class="h-5 w-5 mr-2 text-white" />
                  <span class="text-sm">Confirmação instantânea</span>
                </li>
                <li class="flex items-center">
                  <CheckIcon class="h-5 w-5 mr-2 text-white" />
                  <span class="text-sm">Escolha da melhor mesa disponível</span>
                </li>
                <li class="flex items-center">
                  <CheckIcon class="h-5 w-5 mr-2 text-white" />
                  <span class="text-sm">Sem taxas de reserva</span>
                </li>
                <li class="flex items-center">
                  <CheckIcon class="h-5 w-5 mr-2 text-white" />
                  <span class="text-sm">Cancelamento gratuito até 2h antes</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="md:col-span-3 p-8">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    class="input-field"
                    :class="{'border-red-500': errors.name}"
                    required
                  />
                  <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    class="input-field"
                    :class="{'border-red-500': errors.email}"
                    required
                  />
                  <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
                </div>
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                  Telefone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  class="input-field"
                  :class="{'border-red-500': errors.phone}"
                  required
                />
                <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label for="date" class="block text-sm font-medium text-gray-700 mb-1">
                    Data*
                  </label>
                  <input
                    type="date"
                    id="date"
                    v-model="formData.date"
                    class="input-field"
                    :class="{'border-red-500': errors.date}"
                    :min="minDate"
                    required
                  />
                  <p v-if="errors.date" class="text-red-500 text-xs mt-1">{{ errors.date }}</p>
                </div>
                
                <div>
                  <label for="time" class="block text-sm font-medium text-gray-700 mb-1">
                    Hora*
                  </label>
                  <input
                    type="time"
                    id="time"
                    v-model="formData.time"
                    class="input-field"
                    :class="{'border-red-500': errors.time}"
                    required
                  />
                  <p v-if="errors.time" class="text-red-500 text-xs mt-1">{{ errors.time }}</p>
                </div>
                
                <div>
                  <label for="guests" class="block text-sm font-medium text-gray-700 mb-1">
                    Pessoas*
                  </label>
                  <select
                    id="guests"
                    v-model="formData.guests"
                    class="input-field"
                    :class="{'border-red-500': errors.guests}"
                    required
                  >
                    <option value="">Selecione</option>
                    <option v-for="n in 8" :key="n" :value="n">{{ n }} {{ n === 1 ? 'pessoa' : 'pessoas' }}</option>
                  </select>
                  <p v-if="errors.guests" class="text-red-500 text-xs mt-1">{{ errors.guests }}</p>
                </div>
              </div>
              
              <div>
                <label for="occasion" class="block text-sm font-medium text-gray-700 mb-1">
                  Ocasião (opcional)
                </label>
                <select
                  id="occasion"
                  v-model="formData.occasion"
                  class="input-field"
                >
                  <option value="">Selecione</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="negocios">Reunião de Negócios</option>
                  <option value="romantico">Jantar Romântico</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                  Observações (opcional)
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="3"
                  class="input-field"
                  placeholder="Alergias, preferências, pedidos especiais..."
                ></textarea>
              </div>
              
              <div class="flex items-start mt-4">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    v-model="formData.terms"
                    class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    :class="{'border-red-500': errors.terms}"
                    required
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-medium text-gray-700">Concordo com os <a href="#" class="text-primary hover:underline">termos e condições</a></label>
                  <p v-if="errors.terms" class="text-red-500 text-xs mt-1">{{ errors.terms }}</p>
                </div>
              </div>
              
              <div class="pt-4">
                <button type="submit" class="btn-primary w-full flex items-center justify-center group">
                  <span>Confirmar Reserva</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              <div v-if="formStatus.type" 
                :class="[
                  'mt-4 p-4 rounded-md flex items-start',
                  formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                ]"
              >
                <div class="flex-shrink-0 mr-3">
                  <svg v-if="formStatus.type === 'success'" class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <svg v-else class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium">{{ formStatus.title }}</p>
                  <p class="text-sm">{{ formStatus.message }}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Urgência e escassez -->
      <div class="mt-8 text-center">
        <div class="inline-block bg-yellow-100 border border-yellow-200 text-yellow-800 px-4 py-2 rounded-md">
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Apenas <span class="font-bold">3 mesas disponíveis</span> para este sábado! Reserve agora.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReservationForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
        message: '',
        terms: false
      },
      errors: {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        terms: ''
      },
      formStatus: {
        type: null,
        title: '',
        message: ''
      }
    };
  },
  computed: {
    minDate() {
      const today = new Date();
      return today.toISOString().split('T')[0];
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        terms: ''
      };
      
      // Validar nome
      if (!this.formData.name) {
        this.errors.name = 'Por favor, informe seu nome completo';
        isValid = false;
      }
      
      // Validar email
      if (!this.formData.email) {
        this.errors.email = 'Por favor, informe seu e-mail';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
        this.errors.email = 'Por favor, informe um e-mail válido';
        isValid = false;
      }
      
      // Validar telefone
      if (!this.formData.phone) {
        this.errors.phone = 'Por favor, informe seu telefone';
        isValid = false;
      }
      
      // Validar data
      if (!this.formData.date) {
        this.errors.date = 'Por favor, selecione uma data';
        isValid = false;
      }
      
      // Validar hora
      if (!this.formData.time) {
        this.errors.time = 'Por favor, selecione um horário';
        isValid = false;
      }
      
      // Validar número de pessoas
      if (!this.formData.guests) {
        this.errors.guests = 'Por favor, selecione o número de pessoas';
        isValid = false;
      }
      
      // Validar termos
      if (!this.formData.terms) {
        this.errors.terms = 'Você deve concordar com os termos e condições';
        isValid = false;
      }
      
      return isValid;
    },
    handleSubmit() {
      if (!this.validateForm()) {
        this.formStatus = {
          type: 'error',
          title: 'Erro no formulário',
          message: 'Por favor, corrija os erros no formulário e tente novamente.'
        };
        return;
      }
      
      // Simulação de envio do formulário
      this.formStatus = {
        type: 'loading',
        title: 'Processando',
        message: 'Enviando sua reserva...'
      };
      
      setTimeout(() => {
        this.formStatus = {
          type: 'success',
          title: 'Reserva confirmada!',
          message: 'Sua reserva foi recebida com sucesso! Enviamos um e-mail de confirmação para ' + this.formData.email + '. Agradecemos a preferência!'
        };
        
        // Limpar formulário após sucesso
        this.formData = {
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          occasion: '',
          message: '',
          terms: false
        };
        
        // Limpar mensagem após alguns segundos
        setTimeout(() => {
          this.formStatus = { type: null, title: '', message: '' };
        }, 10000);
      }, 2000);
    }
  },
  components: {
    CalendarIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      `
    },
    ClockIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    },
    UsersIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      `
    },
    MessageIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      `
    },
    CheckIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      `
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente podem ser adicionados aqui */
</style>
