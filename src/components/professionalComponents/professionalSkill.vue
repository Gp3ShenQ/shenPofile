<template>
  <p class="pt-20 pb-5 border-[#d1d1e0] border-b-[3px] w-full max-w-[600px] h-full text-black text-3xl text-left page-title-font">Skill</p>
  <div class="my-10 w-full max-w-[600px] h-[700px]">
    <div id="scene" ref="scene" class="relative w-full h-full">
      <template v-for="(item, index) in skill" :key="item.skillType">
        <div class="w-full h-full" :data-depth="positionAll(index)">
          <div class="grid grid-cols-2 grid-rows-10 w-full h-full" data-depth="0.1">
            <div :class="{ 'col-start-2 row-start-4': isEven(index), 'row-start-8': isLastData(index), 'row-start-6': notFirstOdd(index) }">
              <div class="relative flex flex-col justify-center items-center bg-white shadow-[0_10px_20px_#00000050] p-5 w-full max-w-[300px] min-h-[175px]">
                <div class="flex flex-col px-4 py-2 border-b-[3px] w-full h-full font-black text-red-600 text-2xl text-center">
                  {{ item.skillType }}
                </div>
                <template v-for="skill in item.skillList" :key="skill.name">
                  <p class="flex mt-2 w-full text-black">◎ {{ skill.name }}</p>
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

import Parallax from 'parallax-js'

const scene = ref<HTMLElement | null>(null)

const skill = [
  {
    skillType: 'Vue.js',
    skillList: [{ name: 'Vue3' }, { name: 'Vite' },{name:'Nuxt3'}, { name: 'Pinia' }, { name: 'Axios' }, { name: 'Vue-Router' }, { name: 'RESTful API' }, { name: '可重用組件開發' }],
  },
  {
    skillType: 'CSS',
    skillList: [{ name: 'CSS預處理器使用Sass及SCSS ' }, { name: 'Tailwind CSS' }, { name: 'Responsive Web Design (RWD)' }],
  },
  {
    skillType: 'JavaScript',
    skillList: [{ name: 'ES6' }, { name: 'TypeScript' }, { name: 'JSON' }, { name: 'Async/Await' }, { name: '事件處理' }],
  },
  {
    skillType: 'Other',
    skillList: [{ name: 'Git/GitHub/GitLab' }, { name: 'Internationalization (i18n)' }, { name: 'API Documentation (Swagger)' }],
  },

]

const positionAll = (index: number) => {
  if (isOdd(index)) {
    return Math.random() * 0.15
  } else {
    return Math.random() * -0.15
  }
}

const isOdd = (index: number) => {
  return index % 2 === 0
}

const isEven = (index: number) => {
  return index % 2 !== 0
}

const isFirstOdd = (index: number) => {
  return index === 0
}

const notFirstOdd = (index: number) => {
  return index / 2 >= 1
}

const isLastData = (index: number) => {
  return index === skill.length - 1
}

onMounted(() => {
  nextTick(() => {
    new Parallax(scene.value as HTMLElement, {
      relativeInput: true,
    })
  })
})
</script>
