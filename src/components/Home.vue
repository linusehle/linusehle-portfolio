<template>
    <div id="contact" class="bg-[#1a171e] flex flex-col">
        <div class="flex flex-col space-y-4 py-12 px-4 md:px-[125px] lg:px-[300px]">
            <div class="-mb-1">
                <span class="font-medium text-base uppercase tracking-tight text-white">contact</span>
            </div>
            <div>
                <span class="font-bold text-3xl text-[#8b31ff]">Contact</span>
            </div>
            <div>
                <span class="font-semibold text-2xl text-white">Let's get in touch.</span>
            </div>
        </div>
        <div class="flex flex-col justify-center pb-10">
            <div>
                <form class="sm:mx-auto sm:w-[30rem] md:w-[35rem] space-y-6">
                    <div class="relative">
                        <input type="text" id="name_input" class="block w-[25rem] px-2.5 pb-2.5 pt-4 sm:w-full h-12 sm:h-14  bg-transparent rounded-[0.6rem] border-2 border-[#8b31ff] text-white focus:outline-none peer" placeholder="" />
                        <label for="name_input" class="absolute text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
                    </div>
                    <div class="relative">
                        <input type="email" id="name_input" class="block w-[25rem] px-2.5 pb-2.5 pt-4 sm:w-full h-12 sm:h-14  bg-transparent rounded-[0.6rem] border-2 border-[#8b31ff] text-white focus:outline-none peer" placeholder="" />
                        <label for="name_input" class="absolute text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                    </div>
                    <div class="relative">
                        <textarea id="message" class="block h-auto w-[25rem] px-2.5 pb-2.5 pt-4 sm:w-full min-h-[10rem] max-h-[20rem] sm:h-14  bg-transparent rounded-[0.6rem] border-2 border-[#8b31ff] text-white focus:outline-none peer" placeholder=""></textarea>
                        <label for="message" class="absolute text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Message</label>
                    </div>
                </form>
            </div>
            <div class="flex pb-6 justify-center text-white">
                <div class="mt-10 border-[3px] border-[#8b31ff] rounded-[10px] px-4 py-2 space-x-2">
                    <span class="font-semibold text-xl">Send</span>
                    <span class="font-semibold text-xl">→</span>
                </div>
            </div>
        </div>
    </div>
</template>