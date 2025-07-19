import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import '@/assets/main.css';

// Importar componentes de página
import Home from './views/Home.vue';
import Menu from './views/Menu.vue';
import Gallery from './views/Gallery.vue';
import Contact from './views/Contact.vue';
import Reservation from './views/Reservation.vue';

// Configurar rotas
const routes = [
  { path: '/portfolio/vue/Sabor_Luanda/', name: 'Home', component: Home },
  { path: '/portfolio/vue/Sabor_Luanda/menu', name: 'Menu', component: Menu },
  { path: '/portfolio/vue/Sabor_Luanda/gallery', name: 'Gallery', component: Gallery },
  { path: '/portfolio/vue/Sabor_Luanda/contact', name: 'Contact', component: Contact },
  { path: '/portfolio/vue/Sabor_Luanda/reservation', name: 'Reservation', component: Reservation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  },
});

// Criar e montar a aplicação
const app = createApp(App);
app.use(router);
app.mount('#app');
