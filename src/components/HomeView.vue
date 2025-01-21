<template>
  <div class="relative flex mt-[80px] w-full h-screen">
    <div class="bg-main5 w-1/3"></div>
    <div class="bg-white w-2/3"></div>
    <div class="top-1/2 left-1/2 absolute w-[700px] w-1/3 h-[500px] translate-x-[-50%] translate-y-[-50%]">
      <avatarProfile :avatarGitIcon="avatarGitIcon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import avatarProfile from '@/components/avatarComponents/avatarProfile.vue'

type Props = {
  avatarGitIcon: string | undefined
}

const props = defineProps<Props>()

const avatarGitIcon = computed(() => props.avatarGitIcon || ' ')
</script>
