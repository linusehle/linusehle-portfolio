<template>
  <div class="cursor-dot" data-cursor-dot></div>
  <div class="cursor-outline" data-cursor-outline></div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
  cursor: none;
}

template {
  height: 100vh;
  background-color: #1b1b1f;
  cursor: none;
}

.cursor-dot {
  height: 7.5px;
  width: 7.5px;
  background-color: white;
}



.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
}
</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`; 

  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate ({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });
})
})
</script>