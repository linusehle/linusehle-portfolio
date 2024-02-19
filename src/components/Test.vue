<template>
    <h1 class="header-section">Scroll down to see a horizontal scroll section</h1>
  
  <div class="massiveImage"></div>
  
  <h1 class="header-section">Now we're back to regular scrolling</h1>
  
  
  
  
  <header>
     <a href="https://greensock.com/scrolltrigger">
       <img class="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
    </a> 
  </header>
</template>
<style>
.massiveImage {
  height: 100vh;
  width: 400vw;
  background-size: cover;
  background-position: center;
}
.header-section {
  padding-bottom: 50vh;
  margin-bottom: 0;
}

</style>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.set(".massiveImage", {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
        trigger: ".massiveImage",
        start: "top top",
        end: () => innerWidth * 3,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
})
</script>