<template>
  <div class="relative w-full max-w-[40px] h-full">
    <input class="hidden" type="checkbox" id="hamburger-input" name="dropdown" />
    <label for="hamburger-input">
      <div class="w-[40px] h-[40px] cursor-pointer">
        <span class="dot dot1"></span>
        <span class="dot dot2"></span>
        <span class="dot dot3"></span>
        <span class="dot dot4"></span>
      </div>
    </label>
    <ul class="hamburger-input-links">
      <template v-for="item in aboutMeList">
        <li class="relative bg-[#C4A69D] m-2 p-2 rounded-1 text-black transition-all duration-500 cursor-pointer ease-in page-title-font" @click="changeButton(item.name)">
          <div :class="{ buttonActive: item.name === resumeRoute }">{{ item.name }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

type AboutMeList = {
  name: string
  title: string
}

type Props = {
  aboutMeList: AboutMeList[]
  resumeRoute: string
}

const props = defineProps<Props>()

const aboutMeList = computed(() => props.aboutMeList || [])
const resumeRoute = computed(() => props.resumeRoute || '')

const closeDropdownMenu = () => {
  const checkbox = document.getElementById('hamburger-input') as HTMLInputElement
  if (checkbox) checkbox.checked = false
}

const changeButton = (routerName: string) => {
  router.push({ name: routerName })
  window.scrollTo({ top: 0, behavior: 'smooth' })
  closeDropdownMenu()
}
</script>

<style scoped lang="scss">
.dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #000;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.dot1 {
  top: 10px;
  left: 10px;
}
.dot2 {
  top: 10px;
  right: 10px;
}
.dot3 {
  bottom: 10px;
  left: 10px;
}
.dot4 {
  bottom: 10px;
  right: 10px;
}

#hamburger-input:checked + label .dot1 {
  transform: translate(12px, 12px);
}
#hamburger-input:checked + label .dot2 {
  transform: translate(-12px, 12px);
}
#hamburger-input:checked + label .dot3 {
  transform: translate(12px, -12px);
}
#hamburger-input:checked + label .dot4 {
  transform: translate(-12px, -12px);
}

.hamburger-input-links {
  position: absolute;
  width: 150px;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.hamburger-input-links li:nth-child(1) {
  transition-delay: 0s;
}
.hamburger-input-links li:nth-child(2) {
  transition-delay: 0.2s;
}
.hamburger-input-links li:nth-child(3) {
  transition-delay: 0.4s;
}
.hamburger-input-links li:nth-child(4) {
  transition-delay: 0.6s;
}

#hamburger-input:not(:checked) ~ .hamburger-input-links li {
  left: 200px;
  opacity: 0;
}

#hamburger-input:checked ~ .hamburger-input-links li {
  opacity: 1;
  left: -50px;
}

.hamburger-input-links li:hover {
  color: #6b5c55;
}

.buttonActive {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.buttonActive::before {
  content: '';
  position: absolute;
  bottom: 2px;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4c4168);
  animation: buttonActive-animation 2s linear infinite;
}

@keyframes buttonActive-animation {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
</style>
