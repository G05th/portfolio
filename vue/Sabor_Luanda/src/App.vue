<template>
  <div>
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
    <ReservationButton />
    <WhatsAppButton />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ReservationButton from './components/ReservationButton.vue';
import WhatsAppButton from './components/WhatsAppButton.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ReservationButton,
    WhatsAppButton
  }
}
</script>

<style>
/* Estilos globais adicionais podem ser adicionados aqui */
</style>
