<template>
  <div class="top-0 left-0 absolute flex flex-col justify-start items-center gap-5 bg-main3 pt-20 w-full h-full">
    <div class="rounded-full w-[200px] h-[200px] overflow-hidden">
      <img class="-mt-5" :src="avatarImage" />
    </div>
    <div>
      <p class="font-black text-black text-center text-xl">{{ avatarTitle }}</p>
      <p class="mt-10 text-black text-center page-title-font">Front-End</p>
    </div>
  </div>
  <avatarBottomButton />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import avatarBottomButton from '@/components/avatarComponents/avatarBottomButton.vue'

const commonStore = useCommonStore()
const { topHeaderImage, allAvatarDetails } = storeToRefs(commonStore)

const avatarTitle = computed(() => {
  const _detailsArray = Object.values(allAvatarDetails.value)
  const _foundItem = _detailsArray.find((item) => item.slug.includes('avatar-name'))
  return _foundItem ? _foundItem.name : ''
})

const avatarImage = computed(() => topHeaderImage?.value.find((item: string) => item.includes('avatar_shen')))
</script>
