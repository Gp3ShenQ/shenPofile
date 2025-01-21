<template>
  <TopHeaderView />
  <HomeView :avatarGitIcon="avatarGitIcon" />
  <FooterView :avatarGitIcon="avatarGitIcon" />
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'
import { useArticleApi } from '@/utils/useAPI/useAPIArticle'

import HomeView from '@/components/HomeView.vue'
import FooterView from '@/components/FooterView.vue'
import TopHeaderView from '@/components/TopHeaderView.vue'

const commonStore = useCommonStore()
const { func_getMediaGet, func_getAllDetailsGet, func_getArticlePosts } = useArticleApi()
const { topHeaderImage, allAvatarDetails, avatarBackground, resume } = storeToRefs(commonStore)

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

const avatarGitIcon = computed(() => icon?.value.find((item: string) => item.includes('avatar_github')))

const getTopHeaderImage = async () => {
  const _allImage = await func_getMediaGet()
  topHeaderImage.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('shen'))
  icon.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('avatar_github'))
  avatarBackground.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('avatar_background'))
}

const getAllDetails = async () => {
  const _allDetailsData = await func_getAllDetailsGet()
  allAvatarDetails.value = _allDetailsData.filter((item: DetailsItem) => item.slug.includes('avatar-name'))
}

const getAllArticle = async () => {
  const _allArticle = await func_getArticlePosts()
  resume.value = _allArticle.filter((item: Article) => item.title.rendered.includes('簡歷'))
  console.log('_allArticle', _allArticle)
  console.log('resume', resume.value)
}

onMounted(async () => {
  await getTopHeaderImage()
  await getAllDetails()
  await getAllArticle()
})
</script>

<style scoped lang="scss"></style>
