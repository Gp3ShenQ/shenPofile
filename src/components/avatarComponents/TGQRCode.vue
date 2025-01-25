<template>
  <div class="max-l:top-none bottom-[-180px] max-l:bottom-[50px] max-l:left-0 absolute bg-[#93817B] rounded-[30px] w-[180px] h-[180px] overflow-hidden">
    <img :src="tgQRCode" alt="" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  tgQRCode: string
}

const props = defineProps<Props>()

const tgQRCode = computed(() => props.tgQRCode || '')
</script>
