<template>
  <div class="flex justify-between bg-main3 w-full h-[140px]">
    <div class="flex flex-col justify-center w-1/4 text-black text-center">
      <p class="">© 2025 by Amos .</p>
    </div>

    <div class="flex justify-around w-2/4 text-black text-center">
      <div class="flex flex-col justify-center gap-2">
        <p class="font-black">Call</p>
        <p>0963-656-380</p>
      </div>
      <div class="flex flex-col justify-center gap-2">
        <p class="font-black">E-Mail</p>
        <p>gp3g4xup6@gmail.com</p>
      </div>
      <div class="flex flex-col justify-center gap-2">
        <p class="font-black">Follow</p>
        <img class="w-6 h-6 cursor-pointer" :src="avatarGitIcon" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  avatarGitIcon: string
}

const props = defineProps<Props>()

const avatarGitIcon = computed(() => props.avatarGitIcon || ' ')
</script>
