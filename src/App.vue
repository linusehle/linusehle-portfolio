<script setup>
import { RouterView} from 'vue-router';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Cursor from './components/Cursor.vue'
</script>

<template>
  <Cursor />
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>