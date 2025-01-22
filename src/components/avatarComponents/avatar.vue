<template>
  <div class="top-0 left-0 absolute flex flex-col justify-start items-center gap-5 bg-main3 pt-20 w-full h-full">
    <div class="rounded-full w-[200px] h-[200px] overflow-hidden">
      <img class="-mt-5" :src="avatarImage" />
    </div>
    <div>
      <p class="font-black text-black text-center text-xl">{{ avatarTitle }}</p>
      <p class="mt-10 text-black text-center">Front-End</p>
    </div>
  </div>
  <a class="bottom-0 left-0 absolute flex justify-between items-center bg-white px-5 w-full h-[50px]" href="https://github.com/Gp3ShenQ" target="_blank" rel="noopener noreferrer">
    <img class="w-9 h-9 cursor-pointer" :src="githubIcon" />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

const commonStore = useCommonStore()
const { topHeaderImage, allAvatarDetails } = storeToRefs(commonStore)

type Props = {
  githubIcon: string | undefined
}

const props = defineProps<Props>()

const githubIcon = computed(() => props.githubIcon || ' ')

const avatarTitle = computed(() => {
  const _detailsArray = Object.values(allAvatarDetails.value)
  const _foundItem = _detailsArray.find((item) => item.slug.includes('avatar-name'))
  return _foundItem ? _foundItem.name : ''
})

const avatarImage = computed(() => topHeaderImage?.value.find((item: string) => item.includes('avatar_shen')))
</script>
