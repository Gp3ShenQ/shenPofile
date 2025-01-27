<template>
  <TopHeaderView />

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

  <FooterView />

  <RightMessageAreaView />
  <SendEMailView />
  <SvgIcon />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'
import { useArticleApi } from '@/utils/useAPI/useAPIArticle'

import SvgIcon from '@/assets/SvgIcon.vue'
import FooterView from '@/components/FooterView.vue'
import SendEMailView from '@/components/SendEMailView.vue'
import TopHeaderView from '@/components/TopHeaderView.vue'
import RightMessageAreaView from '@/components/RightMessageAreaView.vue'

const commonStore = useCommonStore()
const { func_getMediaGet, func_getAllDetailsGet, func_getArticlePosts } = useArticleApi()
const { topHeaderImage, allAvatarDetails, avatarBackground, resume, githubIcon, tgQRCode } = storeToRefs(commonStore)

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

const getTopHeaderImage = async () => {
  const _allImage = await func_getMediaGet()
  topHeaderImage.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('shen'))
  githubIcon.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('avatar_github'))
  tgQRCode.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('TG_QRcode'))
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Delius+Unicase:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Delius+Swash+Caps&family=Delius+Unicase:wght@400;700&family=Diphylleia&display=swap');

.title-font {
  font-family: 'Delius Unicase', serif;
}

.page-title-font {
  font-family: 'Diphylleia', serif;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-enter-active {
  transition: 1s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: 0.3s;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
