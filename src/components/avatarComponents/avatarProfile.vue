<template>
  <div class="z-10 flex justify-center items-center">
    <div class="relative min-w-[900px] h-[500px]">
      <div class="relative shadow-[-30px_20px_20px_#00000020] w-1/3 h-full">
        <avatar :githubIcon="githubIcon" />
      </div>
      <div class="top-0 right-0 absolute bg-white shadow-[30px_-20px_50px_#00000010] w-2/3 h-full">
        <avatarResume />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import avatar from '@/components/avatarComponents/avatar.vue'
import avatarResume from '@/components/avatarComponents/avatarResume.vue'

type Props = {
  githubIcon: string | undefined
}

const props = defineProps<Props>()

const githubIcon = computed(() => props.githubIcon || '')
</script>
