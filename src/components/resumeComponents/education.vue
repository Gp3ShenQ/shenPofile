<template>
  <p class="border-[#d1d1e0] pt-20 pb-5 border-b-[3px] w-[600px] h-full text-3xl text-black text-left page-title-font">Education</p>
  <div class="flex justify-center items-center gap-16 mb-12">
    <template v-for="item in school" :key="item.position">
      <div class="relative flex justify-center items-center bg-white shadow-[0_10px_20px_#00000050] mt-10 w-[250px] h-[350px]">
        <div class="flex flex-col justify-center items-center px-4 w-full h-full">
          <p class="font-black text-blue-700 text-center">{{ item.time }}</p>
          <p class="my-2 font-black text-2xl text-center text-red-600">{{ item.schoolName }}</p>
          <p class="mb-2 text-black text-center">{{ item.department }}</p>
        </div>
      </div>
    </template>
  </div>
  <div></div>
</template>
<script setup lang="ts">
import {} from 'vue'

const school = [
  {
    schoolName: '嶺東科技大學',
    time: '2008/9 - 2011/6',
    department: '行銷與流通業管理 / 二技畢業',
  },
  { schoolName: '嶺東科技大學', time: '2003/9 - 2008/6', department: '資訊管理學系 / 五專畢業' },
]
</script>
