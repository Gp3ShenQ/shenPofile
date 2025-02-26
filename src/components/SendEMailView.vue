<template>
  <template v-if="sendEmailStatus">
    <div class="top-0 left-0 z-20 fixed flex justify-center items-center bg-black/40 p-5 w-full h-full">
      <div class="bg-white rounded-[30px] w-full max-w-[600px] overflow-hidden">
        <div class="flex items-center bg-[#DADADA] pl-4 w-full h-10">
          <template v-for="item in dot" :key="item">
            <div class="mx-2 rounded-full w-3 h-3" :style="{ backgroundColor: item }"></div>
          </template>
          <p class="pl-2 font-black text-[#63768D] text-black page-title-font">Message To MyMail</p>
        </div>
        <enterMessageDetails @closeSendEmail="closeSendEmail" />
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import {} from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import enterMessageDetails from '@/components/sendMessageComponents/enterMessageDetails.vue'

const commonStore = useCommonStore()

const { sendEmailStatus } = storeToRefs(commonStore)

const closeSendEmail = () => {
  sendEmailStatus.value = false
}

const dot = ['#C2CFB2 ', '#DDD1C7', '#8AC6D0']
</script>
