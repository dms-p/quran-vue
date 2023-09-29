<template>
    <div>
        <main class="bg-[#f9f8f6]">
            <div class="max-w-screen-lg px-6 sm:px-12 py-20 mx-auto">
                <h2 class="sm:text-4xl text-3xl text-center font-semibold text-gray-700 font-['Noto_Sans_Arabic']">{{surahName}}</h2>
                <p class="sm:text-lg text-base text-gray-600 text-center mt-2  mb-16 ">{{surah.englishName}} <i>({{surah.englishNameTranslation}})</i></p>
                <card-ayah v-for="( ayah , index ) in surah.ayahs" :key="index" :numberSurah="surah.number" :translate="surahTranslate[index].text" :dataAyah="ayah"></card-ayah>
            </div>
        </main>
    </div>
</template>
<script>
import api from './../axios'
import cardAyah from './../components/cardAyah.vue'

export default {
    components:{
        cardAyah
    },
    data() {
        return {
            surah:'',
            surahTranslate:'',
            surahNameText:''
        }
    },
    methods: {
        getSurah(){
            api.get(`surah/${this.$route.params.id}/ar.assad`)
            .then((ress)=>{
                //console.log(ress.data.data.name)
                this.surahNameText=ress.data.data.name
                this.surah=ress.data.data
            })
            api.get(`surah/${this.$route.params.id}/id.indonesian`)
            .then((ress)=>{
                //console.log(ress.data.data.ayahs[1].text)
                this.surahTranslate=ress.data.data.ayahs
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