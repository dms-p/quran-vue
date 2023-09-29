<template>
    <div>
        <main class="bg-[#f9f8f6]">
            <div class="max-w-screen-lg px-6 sm:px-12 py-20 mx-auto">
                <h2 class="sm:text-4xl text-3xl text-center font-semibold text-gray-700 font-['Noto_Sans_Arabic']">{{surahName}}</h2>
                <p class="sm:text-lg text-base text-gray-600 text-center mt-2 ">{{surah.englishName}} <i>({{surah.englishNameTranslation}})</i></p>
                <p class="mt-4 max-w-screen-sm text-center mx-auto">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iste veritatis aliquam tenetur obcaecati, harum architecto, atque eos nam reprehenderit inventore nesciunt delectus officiis maiores suscipit recusandae! Voluptate, nihil inventore?
                </p>
                <div class="bg-white border border-gray-300/50 min-h-screen rounded-xl mt-10 sm:mt-20" id="dataShow">
                    <ul>
                        <li class="sm:text-3xl font-['Noto_Sans_Arabic'] text-2xl rtl w-full text-right my-8 text-emerald-800 p-8 border-b border-gray-100" v-for="ayah in surah.ayahs">{{ayah.text}}</li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import api from './../axios'
export default {
    data() {
        return {
            surah:'',
            surahNameText:''
        }
    },
    methods: {
        getSurah(){
            api.get(`surah/${this.$route.params.id}/en.assad`)
            .then((ress)=>{
                console.log(ress.data.data.name)
                this.surahNameText=ress.data.data.name
                this.surah=ress.data.data
            })
        }
    },
    computed: {
        surahName()
        {
            return this.surahNameText.replace("سُورَةُ","")
        }
    },
    mounted() {
        this.getSurah()
    },
}
</script>