<template>
  <div class="bg-white p-2 px-5 w-full">
    <div class="relative flex items-center gap-2 w-full h-full">
      <a class="w-9 h-9" href="https://github.com/Gp3ShenQ" target="_blank" rel="noopener noreferrer ">
        <img class="w-9 h-9 cursor-pointer" src="@/assets/avatar_github.png" />
      </a>
      <svg class="w-9 h-9 cursor-pointer" @click="openQRCode">
        <use href="#telegram_icon"></use>
      </svg>
    </div>
    <template v-if="QRCodeStatus">
      <TGQRCode />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TGQRCode from '@/components/avatarComponents/TGQRCode.vue'

const QRCodeStatus = ref(false)

const openQRCode = () => {
  if (QRCodeStatus.value) {
    QRCodeStatus.value = false
  } else {
    QRCodeStatus.value = true
  }
}
</script>
