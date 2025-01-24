<template>
  <div class="flex flex-col justify-center items-center w-full h-full">
    <div class="flex flex-col justify-start items-center gap-5 bg-main3 px-4 py-10 w-full h-full">
      <div class="relative rounded-full w-full max-w-[200px] overflow-hidden">
        <div class="pb-[100%] w-full"></div>
        <img class="top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%]" :src="avatarImage" />
      </div>
      <div>
        <p class="font-black text-black text-center text-xl">{{ avatarTitle }}</p>
        <p class="mt-10 text-black text-center page-title-font">Front-End</p>
      </div>
    </div>

    <avatarBottomButton />
  </div>
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
