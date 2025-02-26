<template>
  <div class="p-5 w-full max-w-[600px]">
    <p class="mb-10 pt-20 pb-5 border-[#d1d1e0] border-b-[3px] w-full max-w-[600px] text-black text-3xl text-left page-title-font">Profile - Project</p>
    <div class="pb-20 w-full">
      <finish />
    </div>
    <p class="mb-10 pt-20 pb-5 border-[#d1d1e0] border-b-[3px] w-full max-w-[600px] text-black text-3xl text-left page-title-font">Project - 建置中</p>
    <div class="pb-20 w-full">
      <unfinished />
    </div>
  </div>
</template>

<script setup lang="ts">
import unfinished from '@/components/projectComponents/unfinished.vue'
import finish from '@/components/projectComponents/finish.vue'
</script>
