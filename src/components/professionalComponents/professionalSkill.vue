<template>
  <p class="border-[#d1d1e0] pt-20 pb-5 border-b-[3px] w-[600px] h-full text-3xl text-black text-left">Skill</p>
  <div class="w-[600px]">
    <template v-for="(item, index) in skill" :key="index">
      <template v-if="index % 2 === 0">
        <div class="w-full flex justify-start items-center pl-10">
          <div class="flex relative justify-center flex-col items-center bg-white p-5 shadow-[0_10px_20px_#00000050] w-[300px] min-h-[175px]" :class="{ 'mt-10 ': index === 0, '-mt-6': index / 2 >= 1 }">
            <div class="flex flex-col text-center py-2 text-2xl px-4 w-full h-full text-red-600 font-black border-b-[3px]">
              {{ item.skillType }}
            </div>
            <template v-for="skill in item.skillList" :key="skill.name">
              <div class="flex w-full mt-2">◎ {{ skill.name }}</div>
            </template>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="w-full flex justify-end items-center -mt-32">
          <div class="flex relative justify-center flex-col items-center bg-white p-5 shadow-[0_10px_20px_#00000050] w-[300px] min-h-[175px]">
            <div class="flex flex-col text-center py-2 text-2xl px-4 w-full h-full text-red-600 font-black border-b-[3px]">
              {{ item.skillType }}
            </div>
            <template v-for="skill in item.skillList" :key="skill.name">
              <div class="flex w-full mt-2">◎ {{ skill.name }}</div>
            </template>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

const skill = [
  {
    skillType: 'Vue.js',
    skillList: [{ name: 'Vue3' }, { name: 'Vite' }, { name: 'Pinia' }, { name: 'Axios' }, { name: 'Vue-Router' }, { name: 'RESTful API' }, { name: '可重用組件開發' }],
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
</script>
