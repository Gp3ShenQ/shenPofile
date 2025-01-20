<template>
  <div class="relative bg-[#f5f5f5] shadow-[#00000059_0px_5px_15px] w-[220px] min-w-[250px] h-[300px] overflow-hidden group">
    <div class="absolute flex justify-center items-center">
      <img class="h-full" :src="avatarImage" />
    </div>
    <div class="group-hover:h-28 bottom-0 absolute bg-[#00000080] shadow-[0_3px_10px_#00000033] p-2.5 w-full h-10 text-white transition-height duration-500 overflow-hidden ease-in-out">
      <label class="font-bold">{{ avatarTitle }}</label>
      <p class="mt-[11px] text-sm text-wrap">{{ avatarProfile }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

const commonStore = useCommonStore()
const { topHeaderImage, allAvatarDetails } = storeToRefs(commonStore)

type DetailsArray = {
  name: string
  slug: string
  description: string
}

const avatarTitle = computed(() => {
  const _detailsArray: DetailsArray[] = Object.values(allAvatarDetails.value)
  const _foundItem = _detailsArray.find((item: DetailsArray) => item.slug.includes('avatar-name'))
  return _foundItem ? _foundItem.name : ''
})

const avatarProfile = computed(() => {
  const _detailsArray: DetailsArray[] = Object.values(allAvatarDetails.value)
  const _foundItem = _detailsArray.find((item: DetailsArray) => item.description)
  return _foundItem ? _foundItem.description : ''
})

const avatarImage = computed(() => topHeaderImage?.value.find((item: string) => item.includes('avatar')))
</script>
