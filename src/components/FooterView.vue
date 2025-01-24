<template>
  <div class="flex justify-between bg-main3 w-full h-[140px]">
    <div class="flex flex-col justify-center w-1/4 text-black text-center">
      <p class="page-title-font">© 2025 by Amos .</p>
    </div>

    <div class="flex justify-around w-2/4 text-black text-center">
      <div class="flex flex-col justify-center gap-2">
        <p class="font-black page-title-font">Call</p>
        <p class="page-title-font">0963-656-380</p>
      </div>
      <div class="flex flex-col justify-center gap-2">
        <p class="font-black page-title-font">E-Mail</p>
        <p class="hover:text-blue-600 cursor-pointer page-title-font" @click="messageOrCopy">gp3g4xup6@gmail.com</p>
      </div>
      <div class="flex flex-col justify-center gap-2">
        <p class="font-black page-title-font">Follow</p>
        <a href="https://github.com/Gp3ShenQ" target="_blank" rel="noopener noreferrer">
          <img class="w-6 h-6 cursor-pointer" :src="githubIcon" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import { copyText } from '@/utils/ustCopyText'

const commonStore = useCommonStore()
const { githubIcon, rightMessageStatus, sendEmailStatus } = storeToRefs(commonStore)

const svgDataUri = `<svg class="w-full h-full" aria-hidden="true"><use class="w-full h-full" xlink:href="#message_icon"/></svg>`

const messageOrCopy = () => {
  Swal.fire({
    text: '留言到我的信箱或是直接留言，都可以與我聯繫',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: '留言到我的E-Mail',
    denyButtonText: '我要留言',
    buttonsStyling: false,
    iconHtml: svgDataUri,
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        // copyText('gp3g4xup6@gmail.com')
        // Swal.fire({ title: '已複製', text: 'Email 已複製到剪貼簿' })
        sendEmailStatus.value = true
      } catch (err) {
        Swal.fire('錯誤', '無法複製 Email: ' + err, 'error')
      }
    } else if (result.isDenied) {
      rightMessageStatus.value = true
      // Swal.fire('留言', '你可以在這裡留言。')
    }
  })
}
</script>

<style lang="scss">
.swal2-popup {
  background: linear-gradient(325deg, #eee1dc 0%, rgb(231, 206, 194) 100%, #aa9389 50%);
  color: #635f5f;
}

.swal2-confirm {
  width: auto;
  padding-inline: 10px;
  margin-inline: 10px;
  height: 40px;
  cursor: pointer;
  min-width: 100px;
  font-size: 16px;
  text-align: center;
  transition: 0.8s;
  background-size: 280% auto;
  background-image: linear-gradient(325deg, #eee1dc 0%, rgb(231, 206, 194) 55%, #aa9389 90%);
  border: none;
  border-radius: 30px;
  color: hsla(360 100% 100% / 1);
  box-shadow:
    0px 0px 5px rgba(255, 114, 71, 0.5),
    0px 5px 5px -1px rgba(233, 122, 58, 0.25),
    inset 1px 4px 8px rgba(255, 214, 175, 0.5),
    inset -4px -4px 8px rgba(216, 81, 19, 0.35);
  font-weight: bold;
  border: none;
  background-color: transparent;
}

.swal2-confirm:hover {
  background-color: transparent;
  color: #9b8b84;
}

.swal2-confirm:is(:focus, :focus-visible, :active) {
  background-color: transparent;
  outline: none;
  box-shadow:
    0 0 0 3px hsla(360 100% 100% / 1),
    0 0 0 6px #9b8b84;
  color: #635f5f;
}

.swal2-deny {
  width: auto;
  padding-inline: 10px;
  margin-inline: 10px;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  transition: 0.8s;
  background-size: 280% auto;
  background-image: linear-gradient(325deg, #eee1dc 0%, rgb(231, 206, 194) 55%, #aa9389 90%);
  border: none;
  border-radius: 30px;
  color: hsla(360 100% 100% / 1);
  box-shadow:
    0px 0px 5px rgba(255, 114, 71, 0.5),
    0px 5px 5px -1px rgba(233, 122, 58, 0.25),
    inset 4px 4px 8px rgba(255, 214, 175, 0.5),
    inset -4px -4px 8px rgba(216, 81, 19, 0.35);
  font-weight: bold;
  border: none;
}

.swal2-deny:hover {
  background-position: right top;
  color: #9b8b84;
}

.swal2-styled:hover {
  background: transparent;
}

.swal2-deny:is(:focus, :focus-visible, :active) {
  outline: none;
  box-shadow:
    0 0 0 3px hsla(360 100% 100% / 1),
    0 0 0 6px #9b8b84;
  color: #635f5f;
}

.swal2-icon {
  border: none;
}
</style>
