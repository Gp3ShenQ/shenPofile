<template>
  <div class="relative flex flex-col justify-start items-center bg-main1 mt-[140px] w-full">
    <div>
      <p class="mt-10 font-black text-black text-5xl text-center page-title-font">Project</p>
    </div>
    <div class="flex flex-col justify-start items-center px-4 w-full">
      <ShenProfile />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShenProfile from '@/components/projectComponents/shenProfile.vue'
</script>
