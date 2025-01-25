<template>
  <div class="top-0 left-0 z-20 fixed bg-white w-full h-full max-h-[140px]">
    <div class="flex justify-around items-center w-16 w-full h-full">
      <div @click="routerTo('aboutMe')">
        <img class="w-16 h-16 cursor-pointer" :src="titleImage" alt="title" />
      </div>
      <middleButton class="max-md:hidden" :aboutMeList="aboutMeList" :resumeRoute="resumeRoute" />
      <div class="flex items-center gap-5">
        <svg class="w-8 h-8 cursor-pointer" @click="openFloatingArea('message')">
          <use href="#message_icon_small"></use>
        </svg>
        <svg class="w-8 h-8 cursor-pointer" @click="openFloatingArea('sendEmail')">
          <use class="fill-black" href="#send_email_icon"></use>
        </svg>
        <smallMiddleButton class="md:hidden" :aboutMeList="aboutMeList" :resumeRoute="resumeRoute" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
import { useCommonStore } from '@/store/commonStore'

import middleButton from '@/components/topHeaderComponents/middleButton.vue'
import smallMiddleButton from '@/components/topHeaderComponents/smallMiddleButton.vue'

const route = useRoute()
const router = useRouter()
const commonStore = useCommonStore()
const { topHeaderImage, rightMessageStatus, sendEmailStatus } = storeToRefs(commonStore)

const titleImage = computed(() => topHeaderImage?.value.find((item: string) => item.includes('84x84')))

const aboutMeList = [
  {
    title: 'About Me',
    name: 'aboutMe',
  },
  {
    title: 'Experience',
    name: 'resume',
  },
  {
    title: 'Project',
    name: 'project',
  },
  {
    title: 'Professional',
    name: 'professional',
  },
]

const resumeRoute = computed(() => {
  let _pathCheck = route.path.replace('/', '')
  if (_pathCheck === '') return 'aboutMe'
  return route.path.replace('/', '')
})

const routerTo = (routerName: string) => {
  router.push({ name: routerName })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const openFloatingArea = (target: string) => {
  if (target === 'sendEmail') sendEmailStatus.value = true
  if (target === 'message') rightMessageStatus.value = true
}
</script>

<style scoped lang="scss"></style>
