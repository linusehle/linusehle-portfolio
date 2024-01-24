<template>
    <header class="md:flex md:justify-center md:items-center">
      <div class="flex items-center justify-between px-4 pb-4 py-3 sm:p-0">
        <div class="pt-4 pl-4 pb-4 md:hidden">
          <button @click="isOpen = !isOpen" type="button" class="block text-black focus:text-black focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'flex' : 'hidden'" class="md:flex">
        <ul class="flex text-center w-full flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 md:justify-center md:items-center pt-8 pb-4">
            <li>
              <router-link class="text-lg font-semibold leading-6 hover:text-[#6c63ff]" :class="{'text-[#6c63ff]': $route.path === '/'}" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="text-lg font-semibold leading-6 hover:text-[#6c63ff]" :class="{'text-[#6c63ff]': $route.path === '/about'}" to="/">About</router-link>
            </li>
            <li>
              <router-link class="text-lg font-semibold leading-6 hover:text-[#6c63ff]" :class="{'text-[#6c63ff]': $route.path === '/projects'}" to="/">Projects</router-link>
            </li>
            <li>
              <router-link class="text-lg font-semibold leading-6 hover:text-[#6c63ff]" :class="{'text-[#6c63ff]': $route.path === '/contact'}" to="/">Contact</router-link>
            </li>
          </ul>
      </nav>
    </header> 
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      }
    },
  }
  </script>
  <script setup>

  </script>
  