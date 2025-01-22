<template>
  <div class="flex flex-col justify-center items-center w-full h-full">
    <div class="w-full h-2/5">
      <p class="mt-5 font-black text-8xl text-black text-center leading-tight">Hello</p>
      <p class="font-black text-3xl text-black text-center">Here's who I am & what I do</p>
    </div>
    <div class="flex justify-center items-center gap-10 w-full h-1/5">
      <div class="leading-10 button-gradient" @click="routerTo('resume')">RESUME</div>
      <div class="leading-10 button-gradient">PROJECTS</div>
    </div>
    <div class="px-12 pt-5 w-full h-2/5">
      <div v-html="avatarResume" class="text-black"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/store/commonStore'

const router = useRouter()
const commonStore = useCommonStore()
const { resume } = storeToRefs(commonStore)

const avatarResume = computed(() => {
  const foundItem = resume.value.find((item: any) => item.content && item.content.rendered)
  return foundItem ? foundItem.content.rendered : ''
})

const routerTo = (routerName: string) => {
  router.push({ name: routerName })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
.button-gradient {
  width: 160px;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  transition: 0.8s;
  background-size: 280% auto;
  background-image: linear-gradient(325deg, #eee1dc 0%, rgb(231, 206, 194) 55%, #aa9389 90%);
  border: none;
  border-radius: 30px;
  color: hsla(360 100% 100% / 1);
  box-shadow:
    0px 0px 20px rgba(255, 114, 71, 0.5),
    0px 5px 5px -1px rgba(233, 122, 58, 0.25),
    inset 4px 4px 8px rgba(255, 214, 175, 0.5),
    inset -4px -4px 8px rgba(216, 81, 19, 0.35);
  font-weight: bold;
}
.button-gradient:hover {
  background-position: right top;
  color: #9b8b84;
}
.button-gradient:is(:focus, :focus-visible, :active) {
  outline: none;
  box-shadow:
    0 0 0 3px hsla(360 100% 100% / 1),
    0 0 0 6px #9b8b84;
  color: #000;
}
</style>
