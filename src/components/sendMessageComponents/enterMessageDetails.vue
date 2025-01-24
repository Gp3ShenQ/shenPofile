<template>
  <div class="bg-main2 px-10 py-4 w-full h-full">
    <div class="mb-2">
      <p class="font-black text-[#63768D] page-title-font">E-Mail</p>
      <input class="bg-main3 py-3 pl-5 rounded-[30px] w-full h-full text-black focus:outline-none" v-model="enterEmail" type="text" placeholder="輸入您的E-Mail" />
    </div>
    <div class="mb-2">
      <p class="font-black text-[#63768D]">主旨</p>
      <input class="bg-main3 py-3 pl-5 rounded-[30px] w-full h-full text-black focus:outline-none" v-model="enterSubject" type="text" placeholder="輸入您的主旨" />
    </div>
    <div>
      <p class="font-black text-[#63768D]">內容</p>
      <textarea class="bg-main3 px-5 py-3 rounded-[30px] w-full text-black overflow-hidden focus:outline-none" v-model="enterMessage" placeholder="想留言的內容" rows="3" style="resize: none"></textarea>
    </div>
    <div class="flex justify-center mt-2 w-full" @click="sendEmail">
      <button class="sendButton">送出</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'

type Emit = {
  (e: 'closeSendEmail'): void
}

const emit = defineEmits<Emit>()

const enterEmail = ref('')
const enterSubject = ref('')
const enterMessage = ref('')

const closeSendEmail = () => {
  enterEmail.value = ''
  enterSubject.value = ''
  enterMessage.value = ''
  emit('closeSendEmail')
}

const checkDetails = () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // 驗證郵件的正則表達式

  if (!emailPattern.test(enterEmail.value)) {
    Swal.fire({ title: 'E-Mail 格式錯誤', text: '請輸入有效的E-Mail。' })
    return false
  }

  if (enterSubject.value === '') {
    Swal.fire({ title: '請輸入主旨' })
    return false
  }

  if (enterMessage.value === '') {
    Swal.fire({ title: '想跟我說什麼呢?', text: '記得輸入留言內容。' })
    return false
  }
  return true
}

const sendEmail = () => {
  const templateParams = {
    from_email: enterEmail.value,
    subject: enterSubject.value,
    message: enterMessage.value,
  }

  const _result = checkDetails()
  if (!_result) return

  emailjs.send('service_q21ail4', 'template_2n8fk8n', templateParams, 'zYRSmkbNARXwgwRg0').then(
    (response) => {
      Swal.fire({
        title: '郵件寄送成功！',
        icon: 'success',
      }).then(() => {
        closeSendEmail()
      })
    },
    (error) => {
      Swal.fire({
        title: '郵件寄送失敗！',
        icon: 'error',
      })
    },
  )
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
