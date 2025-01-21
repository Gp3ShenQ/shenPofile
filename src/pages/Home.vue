<template>
  <div class="relative flex mt-[140px] w-full h-screen">
    <div class="bg-main5 w-1/3"></div>
    <div class="bg-white w-2/3"></div>
    <div class="top-1/2 left-1/2 absolute w-[700px] w-1/3 h-[500px] translate-x-[-50%] translate-y-[-50%]">
      <avatarProfile :githubIcon="githubIcon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import avatarProfile from '@/components/avatarComponents/avatarProfile.vue'

const commonStore = useCommonStore()
const { githubIcon } = storeToRefs(commonStore)
</script>
