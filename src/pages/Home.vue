<template>
  <div class="relative px-[60px] max-sm:px-[20px] py-[300px] w-full">
    <div class="top-0 left-0 absolute flex w-full h-full">
      <div class="bg-main5 w-1/3"></div>
      <div class="bg-white w-2/3"></div>
    </div>
    <div class="mx-auto w-full max-w-[900px]">
      <avatarProfile />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

import avatarProfile from '@/components/avatarComponents/avatarProfile.vue'
</script>
