<script setup>
import { RouterView} from 'vue-router';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Test from './components/Test.vue'
</script>

<template>
  <Test />
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>