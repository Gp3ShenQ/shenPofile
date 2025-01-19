<template>
  <div class="flex justify-center items-center h-full">
    <template v-for="(item, index) in aboutMeList" :key="index">
      <button
        class="relative before:bottom-0 after:bottom-0 before:left-0 after:left-0 after:z-[-1] before:absolute after:absolute before:content-[''] after:content-[''] bg-transparent before:bg-[#E0E0E0] after:bg-[#E0E0E0] mx-2 border-none w-40 before:w-0 hover:before:w-full after:w-full h-14 before:h-0.5 after:h-0 hover:after:h-full font-bold text-base text-black text-center text-nowrap hover:text-[#9F4D95] transition-all before:transition-all after:transition-all duration-500 before:duration-300 after:duration-300 hover:after:delay-300 hover:delay-300 ease-linear before:ease-linear after:ease-linear cursor-pointer"
      >
        {{ item.title }}
      </button>
    </template>
  </div>
</template>
<script setup lang="ts">
import {} from 'vue'

const aboutMeList = [
  {
    title: 'About Me',
    link: '',
  },
  {
    title: 'Experience',
    link: '',
  },
  {
    title: 'Project',
    link: '',
  },
  {
    title: 'Professional',
    link: '',
  },
]
</script>
