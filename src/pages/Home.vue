<template>
  <div class="relative flex mt-[140px] w-full h-screen">
    <div class="bg-main5 w-1/3"></div>
    <div class="bg-white w-2/3"></div>
    <div class="top-1/2 left-1/2 absolute w-[700px] w-1/3 h-[500px] translate-x-[-50%] translate-y-[-50%]">
      <avatarProfile />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

import avatarProfile from '@/components/avatarComponents/avatarProfile.vue'
</script>
