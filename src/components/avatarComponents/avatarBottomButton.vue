<template>
  <div class="bg-white px-5 p-2 w-full">
    <div class="relative flex items-center gap-2 w-full h-full">
      <a class="w-9 h-9" href="https://github.com/Gp3ShenQ" target="_blank" rel="noopener noreferrer ">
        <img class="w-9 h-9 cursor-pointer" :src="githubIcon" />
      </a>
      <svg class="w-9 h-9 cursor-pointer" @click="openQRCode">
        <use href="#telegram_icon"></use>
      </svg>
    </div>
    <template v-if="QRCodeStatus">
      <TGQRCode :tgQRCode="tgQRCode" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import TGQRCode from '@/components/avatarComponents/TGQRCode.vue'

const commonStore = useCommonStore()
const { tgQRCode, githubIcon } = storeToRefs(commonStore)

const QRCodeStatus = ref(false)

const openQRCode = () => {
  if (QRCodeStatus.value) {
    QRCodeStatus.value = false
  } else {
    QRCodeStatus.value = true
  }
}
</script>
