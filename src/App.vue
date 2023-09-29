<template>
<div>
  <header>
    <navigation></navigation>
  </header>
  <div>
    <router-view></router-view>
  </div>
  <footer>
      <div class="container px-4 sm:px-12 mx-auto py-10 sm:text-sm text-xs text-gray-500">
          <div class="flex flex-col sm:flex-row items-center justify-between">
              <div class="inline-flex items-center mb-4 sm:mb-0">Made with <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>           .Developed By Dimas Aldi Pratama</div>
              <ul class="inline-flex items-center gap-2">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Threads</a></li>
                  <li><a href="#">Github</a></li>
              </ul>
          </div>
      </div>
  </footer>
</div>
</template>

<script>
import navigation from './components/navigation.vue'
export default {
  components:{
    navigation
  },
  data() {
    return {
      
    }
  },
}
</script>