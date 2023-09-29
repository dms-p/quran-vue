<template>
    <div>
        <main class="bg-[#f9f8f6]">
            <div class="container px-4 sm:px-12 py-12 mx-auto min-h-screen flex items-center justify-center">
                <div class="grid gap-4 sm:grid-cols-2 grid-cols-1">
                    <div class="py-4 sm:order-1 order-2">
                        <img src="./../assets/20230802071130_[fpdl.png" class="mx-auto" alt="">
                    </div>
                    <div class="flex items-center py-4 sm:order-2 order-1">
                        <div class="sm:text-right text-center">
                            <h1 class="sm:text-5xl text-4xl rtl text-emerald-800 max-w-2xl ml-auto leading-relaxed sm:leading-loose text-extrabold mb-4 font-['Noto_Sans_Arabic']">وَإِذَا قُرِئَ ٱلْقُرْءَانُ فَٱسْتَمِعُوا۟ لَهُۥ وَأَنصِتُوا۟ لَعَلَّكُمْ تُرْحَمُونَ</h1>
                            <h4 class="sm:text-xl text-lg max-w-lg ml-auto text-gray-600 mb-2">"Dan apabila dibacakan Al Quran, maka <span class="font-extrabold">dengarkanlah</span> baik-baik, dan <span class="font-extrabold">perhatikanlah</span> dengan tenang agar kamu <span class="font-extrabold">mendapat rahmat</span> "</h4>
                            <p class="sm:text-lg text-base text-gray-500">Surat Al-A'raf 204</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <section>
            <div class="container px-4 sm:px-12 mx-auto py-20">
                <div class="max-w-screen-sm mx-auto px-8 mb-10 sm:mb-20">
                    <h2 class="sm:text-4xl text-3xl text-center font-semibold text-gray-700">Baca Al-Quran dengan Terjemahan dan tafsir setiap ayat</h2>
                </div>
                <div class="flex gap-4 flex-col sm:flex-row items-center justify-between w-full mb-5 pb-5 border-b border-gray-100">
                    <div>
                        <select v-model="type" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-auto w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Semua Surah</option>
                            <option value="Meccan">Makiyyah</option>
                            <option value="Medinan">Madinah</option>
                        </select>
                    </div>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input v-model="search" type="search" id="search" class="block w-full sm:w-auto p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                    </div>              
                </div>
                <div class="grid gap-4 sm:grid-cols-3 grid-cols-1">
                    <card-quran v-for="surah in surahs" :key="surah.number" :dataSurah="surah"></card-quran>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import cardQuran from './../components/cardQuran.vue'
import api from './../axios'

export default {
    components:{
        cardQuran
    },
    data() {
        return {
            surahs:null,
            filter:null,
            search:null
        }
    },
    methods: {
        getQuran(){
            api.get('surah').then((ress) => {
                console.log(ress.data.data)
                this.surahs=ress.data.data
            })
        }
    },
    mounted() {
        this.getQuran()
    },
}
</script>