<template>
  <template v-for="(item, index) in profile" :key="index">
    <div class="p-5 w-full">
      <div class="flex flex-col justify-center items-center bg-white shadow-[0_10px_20px_#00000050] w-full leading-10 page-title-font">
        <img :src="getImage(item.imageUrl)" alt="" />
        <div class="p-5 w-full">
          <p class="border-[#878E99] border-b-[2px] border-solid text-black text-2xl">{{ item.pj_title }}</p>
          <p class="text-black">{{ item.innerText }}</p>
          <div class="flex justify-center w-full">
            <div class="mt-5 sendButton">
              <a class="text-black" :href="item.lint" target="_blank">網站詳情</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { getImage } from '@/utils/getImage'

const profile = [
  {
    imageUrl: 'pj_ramen.png',
    pj_title: '『日一食』   拉麵、燒肉專門店',
    innerText: '使用Vue3、Nuxt3、Tailwind4、Gsap 進行網站製作',
    lint: 'https://ramen-eclipse.onrender.com',
  },
]
</script>
