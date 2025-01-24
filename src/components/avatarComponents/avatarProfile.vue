<template>
  <div class="relative">
    <div class="flex max-l:flex-col">
      <div class="relative shadow-[-30px_20px_20px_#00000020] max-l:shadow-none w-1/3 max-l:w-full">
        <avatar />
      </div>
      <div class="bg-white shadow-[30px_-20px_50px_#00000010] w-2/3 max-l:w-full">
        <avatarResume />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

import avatar from '@/components/avatarComponents/avatar.vue'
import avatarResume from '@/components/avatarComponents/avatarResume.vue'
</script>
