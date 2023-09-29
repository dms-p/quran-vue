<template>
        <div class="container px-4 sm:px-12 sm:py-4 py-2 mx-auto flex flex-wrap items-center justify-between">
            <div class="logo">
                <router-link to="/" class="inline-flex items-center">
                    <img src="./../../public/logo.png" class="h-12" alt="">
                </router-link>
            </div>
            <button class="sm:hidden block" @click="openMenu = !openMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>                  
            </button>
            <nav class="w-full sm:w-auto sm:mt-0 mt-4 hidden sm:block" v-if="openMenu">
                <ul class="flex flex-col sm:flex-row gap-2 text-xs sm:text-sm tracking-wide">
                    <li><router-link to="/" class="block inline-flex items-center gap-2 px-3 py-2 flex items-center text-gray-500 hover:text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                      Read Quran</router-link></li>
                    <li><router-link to="/surah/8" class="block inline-flex items-center gap-2 px-3 py-2 flex items-center text-gray-500 hover:text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pray Schedule</router-link></li>
                    <li><router-link to="" class="block inline-flex items-center gap-2 px-3 py-2 bg-[#189f70] hover:bg-[#28a666] text-white rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      Donation</router-link></li>
                </ul>
            </nav>
        </div>
</template>
<script>
    export default
    {
        data() {
            return {
                openMenu : false
            }
        },
    }
</script>