<template>
    <router-link :to="{name:'surah',params:{id:dataSurah.number}}">
        <div class="border group border-gray-300/50 rounded-lg bg-white hover:bg-gradient-to-br hover:from-[#41b057] hover:to-[#189f70] transition transition-all p-5">
            <div class="flex items-start gap-4">
                <div class="flex-none bg-gray-200 group-hover:bg-white/20 group-hover:text-white flex items-center justify-center w-12 h-12 font-semibold font-xl rounded-lg">
                    {{dataSurah.number}}
                </div>
                <div class="flex-1">
                    <h4 class="sm:text-xl text-lg font-bold text-gray-900 group-hover:text-white">{{dataSurah.englishName}}</h4>
                    <div class="flex items-center justify-between text-sm text-gray-600 group-hover:text-white/50 ">
                        <div>{{dataSurah.englishNameTranslation}}</div>
                        <div>{{dataSurah.numberOfAyahs}} Ayah</div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props:{
        dataSurah:{
            type:Object,
            dafault:''
        }
    }
}
</script>