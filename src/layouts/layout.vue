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
// import { storeToRefs } from 'pinia'
// import { useCommonStore } from '@/store/commonStore'
// import { useArticleApi } from '@/utils/useAPI/useAPIArticle'

import SvgIcon from '@/assets/SvgIcon.vue'
import FooterView from '@/components/FooterView.vue'
import SendEMailView from '@/components/SendEMailView.vue'
import TopHeaderView from '@/components/TopHeaderView.vue'
import RightMessageAreaView from '@/components/RightMessageAreaView.vue'

// const commonStore = useCommonStore()
// const { func_getMediaGet, func_getAllDetailsGet, func_getArticlePosts } = useArticleApi()
// const { topHeaderImage, allAvatarDetails, avatarBackground, resume } = storeToRefs(commonStore)

// type ImageItem = {
//   guid: {
//     rendered: string
//   }
// }

// type DetailsItem = {
//   slug: string
// }

// type Article = {
//   title: {
//     rendered: string
//   }
// }

// const getTopHeaderImage = async () => {
//   const _allImage = await func_getMediaGet()
//   topHeaderImage.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('shen'))
//   avatarBackground.value = _allImage.map((item: ImageItem) => item.guid.rendered).filter((url: string) => url.includes('avatar_background'))
// }

// const getAllDetails = async () => {
//   const _allDetailsData = await func_getAllDetailsGet()
//   allAvatarDetails.value = _allDetailsData.filter((item: DetailsItem) => item.slug.includes('avatar-name'))
// }

// const getAllArticle = async () => {
//   const _allArticle = await func_getArticlePosts()
//   resume.value = _allArticle.filter((item: Article) => item.title.rendered.includes('簡歷'))
// }

// onMounted(async () => {
//   await getTopHeaderImage()
//   await getAllDetails()
//   await getAllArticle()
// })
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

.sendButton {
  width: 160px;
  padding: 10px;
  color: #473e39;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  position: relative;
  background-image: linear-gradient(325deg, #f5f5f5 0%, rgb(231, 206, 194) 0%, #a7a7a7 100%);
  border-radius: 30px;
  z-index: 0;
  outline: none;
  border: none;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  overflow: hidden;
}
.sendButton:hover {
  animation: rotate 0.5s ease-in-out both;
}
.sendButton:after {
  background: rgba(255, 214, 175, 0.5);
  content: '';
  height: 155px;
  left: -75px;
  opacity: 0.4;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}
.sendButton:hover:after {
  left: 120%;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}
</style>
