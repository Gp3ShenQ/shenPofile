<template>
  <p class="border-[#d1d1e0] pt-20 pb-5 border-b-[3px] w-[600px] h-full text-3xl text-black text-left">Skill</p>
  <div class="w-[600px]">
    <template v-for="(item, index) in skill" :key="item.skillType">
      <div class="flex justify-start items-center pl-10 w-full" :class="{ 'justify-start': isOdd(index), 'justify-end': isEven(index), 'pl-10': isOdd(index), '-mt-32': isEven(index), 'mb-20': isLastData(index) }">
        <div class="relative flex flex-col justify-center items-center bg-white shadow-[0_10px_20px_#00000050] p-5 w-[300px] min-h-[175px]" :class="{ 'mt-10 ': isFirstOdd(index), '-mt-6': notFirstOdd(index) }">
          <div class="flex flex-col px-4 py-2 border-b-[3px] w-full h-full font-black text-2xl text-center text-red-600">
            {{ item.skillType }}
          </div>
          <template v-for="skill in item.skillList" :key="skill.name">
            <p class="flex mt-2 w-full text-black">◎ {{ skill.name }}</p>
          </template>
        </div>
      </div>
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
</script>
