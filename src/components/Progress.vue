<template>
    <div id="progress-bar"></div>
</template>

<style scoped>
#progress-bar {
    --scrollAmount: 0%;
    background: white;
    width: var(--scrollAmount);
    height: 4px;
    position: fixed;
    top: 0;
}
</style>

<script setup>
let processScroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight']) || docBody['scrollHeight'] - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';

        document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent);
}

document.addEventListener("scroll", processScroll);
</script>