<template>
  <div class="top-0 left-0 z-50 fixed bg-white w-full h-[140px]">
    <div class="flex justify-around items-center w-16 w-full h-full">
      <div @click="routerTo('aboutMe')">
        <img class="w-16 h-16 cursor-pointer" :src="titleImage" alt="title" />
      </div>
      <middleButton />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/store/commonStore'

import middleButton from '@/components/topHeaderComponents/middleButton.vue'

const router = useRouter()
const commonStore = useCommonStore()
const { topHeaderImage } = storeToRefs(commonStore)

const titleImage = computed(() => topHeaderImage?.value.find((item: string) => item.includes('84x84')))

const routerTo = (routerName: string) => {
  router.push({ name: routerName })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
