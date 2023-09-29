<template>
        <div class="bg-white rounded mb-4 p-4 sm:p-8 border border-transparent hover:border-blue-500">
            <div class="flex gap-4 items-start justify-between">
                <div class="w-6 h-6 flex items-center justify-between text-emerald-700">
                    {{numberSurah}}:{{dataAyah.numberInSurah}}
                </div>
                <div class="text-xl sm:text-2xl text-gray-800 rtl text-right">
                    {{dataAyah.text}}
                </div>
            </div>
            <div class="text-gray-500 text-sm sm:text-base p-4 sm:p-8 border-b border-gray-100">
                <p>"{{translate}}"</p>
            </div>
            <div class="pt-4 sm:pt-8">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-700">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                </button>
            </div>
        </div>
</template>

<script>
export default {
    props:{
        numberSurah:'',
        translate:'',
        dataAyah:{
            type:Object,
            dafault:''
        }
    }
}
</script>