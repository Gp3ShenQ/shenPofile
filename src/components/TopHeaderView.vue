<template>
  <div class="top-0 left-0 z-50 fixed bg-white w-full h-20">
    <div class="flex justify-around items-center w-16 w-full h-full">
      <img class="w-16 h-16" :src="titleImage" alt="title" />
      <middleButton />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import middleButton from '@/components/topHeaderComponents/middleButton.vue'

const commonStore = useCommonStore()
const { topHeaderImage } = storeToRefs(commonStore)

const titleImage = computed(() => topHeaderImage?.value.find((item: string) => item.includes('84x84')))

onMounted(() => {
  console.log(titleImage.value)
})
</script>
