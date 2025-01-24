<template>
  <template v-if="rightMessageStatus">
    <div class="top-0 left-0 z-20 fixed bg-black opacity-40 w-full h-full" @click="closeRightArea"></div>
  </template>
  <div class="top-0 z-30 fixed bg-main1 px-5 pt-10 w-[500px] h-full transition-all duration-1000" :class="{ 'right-0': rightMessageStatus, '-right-full': !rightMessageStatus }">
    <div class="flex flex-col gap-5 w-full h-auto">
      <div>
        <p class="text-black">名稱<span class="text-red-600"> *</span></p>
        <input class="bg-main3 py-3 pl-5 rounded-[30px] w-full h-full text-black focus:outline-none" v-model="enterName" type="text" placeholder="請輸入姓名" />
      </div>
      <div>
        <p class="text-black">電子信箱<span class="text-red-600"> *</span></p>
        <input class="bg-main3 py-3 pl-5 rounded-[30px] w-full h-full text-black focus:outline-none" type="text" v-model="enterEmail" placeholder="E-Mail" />
      </div>
      <div>
        <p class="text-black">留言<span class="text-red-600">*</span></p>
        <textarea class="bg-main3 px-5 py-3 rounded-[30px] w-full text-black focus:outline-none" placeholder="想留言的內容" v-model="enterMessage" rows="4" style="resize: none"></textarea>
      </div>
    </div>
    <div class="flex justify-center mt-10 w-full" @click="checkMessage">
      <button class="sendButton">送出</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'
import { useCommonApi } from '@/utils/useAPI/useAPICommon'

const commonStore = useCommonStore()
const { rightMessageStatus } = storeToRefs(commonStore)
const { func_createMyPluginPostsParams } = useCommonApi()

type Params = {
  author: string
  email: string
  comment: string
}

const enterName = ref('')
const enterEmail = ref('')
const enterMessage = ref('')

const checkMessage = async () => {
  const namePattern = /^[A-Za-z\s]+$/ // 驗證姓名的正則表達式
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // 驗證郵件的正則表達式

  if (enterName.value && enterEmail.value && enterMessage.value) {
    if (!namePattern.test(enterName.value)) {
      Swal.fire({ title: '名稱格式錯誤', text: '名稱只能包含字母和空格。' })
      return
    }
    if (!emailPattern.test(enterEmail.value)) {
      Swal.fire({ title: 'E-Mail 格式錯誤', text: '請輸入有效的E-Mail。' })
      return
    }

    const formData = new FormData()
    const params = {
      author: enterName.value,
      email: enterEmail.value,
      comment: enterMessage.value,
    }
    for (const key in params) {
      formData.append(key, params[key as keyof Params])
    }
    const result = await func_createMyPluginPostsParams(formData)
    if (result) {
      Swal.fire({ title: '已送出', text: '收到你的留言，會盡快回復你。' })
      closeRightArea()
    }
  } else {
    Swal.fire({ title: '想跟我說什麼呢?', text: ' * 記得輸入留言內容。' })
  }
}

const closeRightArea = () => {
  rightMessageStatus.value = false
}
</script>

<style scoped lang="scss">
.sendButton {
  width: 160px;
  padding: 10px;
  color: #473e39;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  position: relative;
  background-image: linear-gradient(325deg, #eee1dc 0%, rgb(231, 206, 194) 5%, #aa9389 100%);
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
