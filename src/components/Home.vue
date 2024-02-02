<template>
    <div class=" flex justify-center">
        <div class="flex space-x-4 items-center justify-center pt-16">
            <span class="uppercase text-2xl font-semibold">Made with</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-[#1373e6] h-8">
                <path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 
                300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 
                268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0
                41.5 17.2 81.2 47.6 109.5z"/>
            </svg>
        </div>
    </div>
    <div class=" flex justify-center pt-[225px]">
        <div>
            <span class="text-9xl font-bold">Welcome!</span>
        </div>
    </div>
    <div class=" flex justify-center pt-[300px] cursor-pointer">
        <div class="bg-[#1373e6] rounded-full text-white p-4" v-on:click="scroll_main">
            <span class="text-xl font-bold">↓</span>
        </div>
    </div>
    <div id="main" class="h-screen flex flex-col items-center justify-center">
        <div class="flex items-center space-x-2">
            <span class="text-4xl font-semibold">Hello there</span>
            <img class="h-10" src="../assets/waving_emoijo.png" />
            <span class="text-4xl font-semibold">I'm</span>
        </div>
        <div>
            <span class="text-9xl font-bold text-[#1373e6]">Linus</span>
        </div>
        <div>
            <span class="text-6xl font-bold">developer</span>
        </div>
        <div class="h-[250px] border-dashed border-4 border-[#1373e6] mt-[100px]"></div>
    </div>
    <div class="flex flex-col justify-center">
        <div class="flex flex-col text-center">
            <span class="text-4xl font-semibold">Explore my</span>
            <span class="text-6xl font-bold text-[#1373e6]">Experience</span>
        </div>
        <div class="flex justify-center space-x-6">
            <div class="border border-black p-6 rounded-3xl">
                <div class="text-center">
                    <span class="text-2xl font-semibold">Frontend Development</span>
                </div>
                <div class="grid grid-cols-2">
                    <div class="flex flex-col">
                        <span class="text-xl font-bold">Html</span>
                        <span class="text-xl ">Experienced</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xl font-bold">Css</span>
                        <span class="text-xl">Experienced</span>
                    </div>
                </div>
            </div>
            <div class="border border-black p-6 rounded-3xl">
                <div class="text-center">
                    <span class="text-2xl font-semibold">Frontend Development</span>
                </div>
            </div>            
        </div>
    </div>
</template>

<script setup>
function scroll_main (event) {
    document.getElementById("main").scrollIntoView({behavior: 'smooth'})
}
</script>