<template>
  <template v-for="(item, index) in Unfinished" :key="index">
    <div class="p-5 w-full">
      <div class="flex flex-col justify-center items-center bg-white shadow-[0_10px_20px_#00000050] w-full leading-10 page-title-font">
        <img :src="item.imageUrl" alt="" />
        <div class="p-5 w-full">
          <p class="border-[#878E99] border-b-[2px] border-solid text-black text-2xl">{{ item.pj_title }}</p>
          <template v-for="itemText in item.innerText" :key="item">
            <p class="text-black">{{ itemText }}</p>
          </template>
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
const Unfinished = [
  {
    imageUrl: '/src/assets/pj_login.png',
    pj_title: '登入登出 API 測試',
    innerText: ['前端 : Vue3、Nuxt3、Tailwind4', '後端 : Node.js、Nuxt3', '資料庫 : MongoDB'],
    lint: 'https://animal-chat.onrender.com',
  },
]
</script>
