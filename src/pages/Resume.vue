<template>
  <div class="relative flex flex-col justify-start items-center bg-main1 mt-[140px] w-full h-auto">
    <div>
      <p class="mt-10 font-black text-5xl text-black text-center page-title-font">Resume</p>
    </div>
    <div class="flex flex-col justify-start items-center px-4 w-full h-full">
      <experience />
      <education />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

import education from '@/components/resumeComponents/education.vue'
import experience from '@/components/resumeComponents/experience.vue'
</script>
