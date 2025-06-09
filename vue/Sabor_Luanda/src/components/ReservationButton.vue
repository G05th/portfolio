<template>
  <div class="fixed bottom-6 left-6 z-40">
    <button 
      @click="openReservationModal"
      class="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      aria-label="Reservar Mesa"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ReservationButton',
  methods: {
    openReservationModal() {
      this.$router.push('/portfolio/vue/Sabor_Luanda/reservation');
    }
  }
}
</script>
