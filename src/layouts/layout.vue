<template>
  <topHeaderView />
  <HomeView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'
import { useArticleApi } from '@/utils/useAPI/useAPIArticle'

import HomeView from '@/components/HomeView.vue'
import topHeaderView from '@/components/topHeaderView.vue'

const commonStore = useCommonStore()
const { func_getMediaGet, func_getAllDetailsGet } = useArticleApi()

const { topHeaderImage, allAvatarDetails } = storeToRefs(commonStore)

const getTopHeaderImage = async () => {
  const _topHeaderImage = await func_getMediaGet()
  topHeaderImage.value = _topHeaderImage.map((item: string) => item.guid.rendered).filter((url: string) => url.includes('shen'))
}

const getAllDetails = async () => {
  const _allDetailsData = await func_getAllDetailsGet()
  allAvatarDetails.value = _allDetailsData.filter((item: string) => item.slug.includes('avatar-name'))
  console.log('layout', allAvatarDetails.value)
}

onMounted(async () => {
  await getTopHeaderImage()
  await getAllDetails()
})
</script>

<style scoped lang="scss">
// html body {
//   margin: 0;
//   padding: 0;
//   background-color: #fff;
//   overflow: hidden;
// }

// html {
//   overflow-x: hidden;
//   overflow-y: hidden;
//   height: auto;
// }
</style>
