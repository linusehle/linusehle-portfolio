<template>
    <header class="fixed bg-gradient-to-b from-gray-dark-5 md:flex">
      <div class="flex py-3 sm:p-0">
        <div class="pt-4 px-4 pb-4">
          <button @click="isOpen = !isOpen" type="button" class="block text-white focus:text-white focus:outline-none">
            <svg :class="isOpen ? 'hover:rotate-90 hover:duration-200' : 'hover:rotate-0 hover:duration-0'" class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'flex transition-all duration-300' : 'hidden'">
        <ul class="flex w-full flex-col space-y-4">
            <li>
              <span class="text-white text-lg font-semibold leading-6 hover:text-[#6c63ff]" v-on:click="scroll_home">Home</span>
            </li>
            <li>
              <span class="text-white text-lg font-semibold leading-6 hover:text-[#6c63ff]" v-on:click="scroll_skills">Skills</span>
            </li>
            <li>
              <span class="text-white text-lg font-semibold leading-6 hover:text-[#6c63ff]" v-on:click="scroll_projects">Projects</span>
            </li>
            <li>
              <span class="text-white text-lg font-semibold leading-6 hover:text-[#6c63ff]" v-on:click="scroll_contact">Contact</span>
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
  function scroll_home (event) {
    document.getElementById("home").scrollIntoView({behavior: 'smooth'});
  }

  function scroll_skills (event) {
    document.getElementById("skills").scrollIntoView({behavior: 'smooth'});
  }

  function scroll_projects (event) {
    document.getElementById("projects").scrollIntoView({behavior: 'smooth'});
  }

  function scroll_contact (event) {
    document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
  }
</script>

<style>
* {
  cursor: none;
}
</style>
  