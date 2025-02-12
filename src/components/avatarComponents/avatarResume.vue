<template>
  <div class="flex flex-col justify-center items-center max-l:px-4 w-full">
    <div class="w-full">
      <p class="mt-5 font-black text-black max-l:text-6xl text-8xl text-center leading-tight title-font">Hello</p>
      <p class="font-black text-black text-3xl text-center page-title-font">Here's who I am & what I do</p>
    </div>
    <div class="flex justify-center items-center gap-10 my-5 w-full">
      <div class="leading-10 button-gradient page-title-font" @click="routerTo('resume')">RESUME</div>
      <div class="leading-10 button-gradient page-title-font" @click="routerTo('professional')">PROFESSIONAL</div>
    </div>
    <div class="px-12 max-l:px-5 py-2">
      <div class="text-[18px] text-black page-title-font">
        　　目前主要使用 Vue 框架開發，但起初公司是使用 Webpack，開發速度不理想。隨著我參與到 Vite 與 Tailwind CSS 和 TypeScript 的導入過程後，開發速度大幅增加，極大地提升了團隊的工作效率。在這過程中，我學習了現代前端框架如 Vue，也掌握了相關工具如
        Pinia、Vue Router 以及各種 API 交互技術。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/store/commonStore'

const router = useRouter()
const commonStore = useCommonStore()
const { resume } = storeToRefs(commonStore)

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
