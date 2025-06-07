<template>
  <div>
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <GallerySection />
    <TestimonialsSection />
    <ReservationForm />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import MenuSection from '@/components/MenuSection.vue';
import GallerySection from '@/components/GallerySection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import ReservationForm from '@/components/ReservationForm.vue';
import ContactSection from '@/components/ContactSection.vue';

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    AboutSection,
    MenuSection,
    GallerySection,
    TestimonialsSection,
    ReservationForm,
    ContactSection
  }
}
</script>
