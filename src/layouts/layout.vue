<template>
  <topHeaderView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'
import { useArticleApi } from '@/utils/useAPI/useAPIArticle'

import HomeView from '@/components/HomeView.vue'
import topHeaderView from '@/components/topHeaderView.vue'

const commonStore = useCommonStore()
const { func_getMediaGet } = useArticleApi()

const { topHeaderImage } = storeToRefs(commonStore)

const getTopHeaderImage = async () => {
  const _topHeaderImage = await func_getMediaGet()

  topHeaderImage.value = _topHeaderImage.map((item: string) => item.guid.rendered).filter((url: string) => url.includes('topHeader'))
}

onMounted(async () => {
  await getTopHeaderImage()
})
</script>

<style scoped lang="scss">
html body {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>
