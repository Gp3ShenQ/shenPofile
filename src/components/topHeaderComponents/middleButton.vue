<template>
  <div class="flex justify-center items-center h-full">
    <template v-for="item in aboutMeList" :key="item.title">
      <button
        class="relative bg-transparent mx-2 border-none w-40 h-14 text-3xl text-black text-center text-nowrap hover:text-[#D94600] transition-all duration-500 hover:delay-300 ease-linear cursor-pointer page-title-font"
        :class="{ buttonActive: item.name === resumeRoute }"
        @click="changeButton(item.name)"
      >
        {{ item.title }}
      </button>
    </template>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const resumeRoute = computed(() => {
  let _pathCheck = route.path.replace('/', '')
  if (_pathCheck === '') return 'aboutMe'
  return route.path.replace('/', '')
})

const changeButton = (routerName: string) => {
  router.push({ name: routerName })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const aboutMeList = [
  {
    title: 'About Me',
    name: 'aboutMe',
  },
  {
    title: 'Experience',
    name: 'resume',
  },
  {
    title: 'Project',
    name: 'project',
  },
  {
    title: 'Professional',
    name: 'professional',
  },
]
</script>

<style scoped lang="scss">
.buttonActive {
  position: relative;
  display: inline-block;
  color: #000;
  width: 160px;
  height: 60px;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  // font-size: 30px;
  text-align: center;
  background-color: transparent;
  transition: 0.5s ease-in-out;
}
.buttonActive::before,
.buttonActive::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #000);
}
.buttonActive::before {
  top: 0;
  left: -100%;
  animation: buttonActive-animation1 3s linear infinite;
}
.buttonActive::after {
  bottom: 0;
  right: -100%;
  animation: buttonActive-animation1 3s linear infinite 0.75s;
}
@keyframes buttonActive-animation1 {
  0% {
    left: -100%;
    right: 100%;
  }
  50% {
    left: 100%;
    right: -100%;
  }
  100% {
    left: -100%;
    right: 100%;
  }
}
@keyframes buttonActive-animation2 {
  0% {
    top: -100%;
    bottom: 100%;
  }
  50% {
    top: 100%;
    bottom: -100%;
  }
  100% {
    top: -100%;
    bottom: 100%;
  }
}
</style>
