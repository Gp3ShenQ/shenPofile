<template>
  <div class="top-0 left-0 z-50 fixed bg-white w-full h-20"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useArticleApi } from '@/utils/useAPI/useAPIArticle'

const { func_getMediaGet } = useArticleApi()

onMounted(() => {
  func_getMediaGet()
})
</script>
