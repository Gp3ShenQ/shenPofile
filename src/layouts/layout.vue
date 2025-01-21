<template>
  <TopHeaderView />
  <router-view />

  <FooterView />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'
import { useArticleApi } from '@/utils/useAPI/useAPIArticle'

import FooterView from '@/components/FooterView.vue'
import TopHeaderView from '@/components/TopHeaderView.vue'

const commonStore = useCommonStore()
const { func_getMediaGet, func_getAllDetailsGet, func_getArticlePosts } = useArticleApi()
const { topHeaderImage, allAvatarDetails, avatarBackground, resume, githubIcon } = storeToRefs(commonStore)

type ImageItem = {
  guid: {
    rendered: string
  }
}

type DetailsItem = {
  slug: string
}

type Article = {
  title: {
    rendered: string
  }
}

const icon = ref<string[]>([])

const getTopHeaderImage = async () => {
  const _allImage = await func_getMediaGet()
  topHeaderImage.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('shen'))
  githubIcon.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('avatar_github'))
  avatarBackground.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('avatar_background'))
}

const getAllDetails = async () => {
  const _allDetailsData = await func_getAllDetailsGet()
  allAvatarDetails.value = _allDetailsData.filter((item: DetailsItem) => item.slug.includes('avatar-name'))
}

const getAllArticle = async () => {
  const _allArticle = await func_getArticlePosts()
  resume.value = _allArticle.filter((item: Article) => item.title.rendered.includes('簡歷'))
}

onMounted(async () => {
  await getTopHeaderImage()
  await getAllDetails()
  await getAllArticle()
})
</script>

<style scoped lang="scss"></style>
