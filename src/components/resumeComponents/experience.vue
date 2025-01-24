<template>
  <p class="border-[#d1d1e0] pt-20 pb-5 border-b-[3px] w-[600px] h-full text-3xl text-black text-left page-title-font">Experience</p>
  <template v-for="item in job" :key="item.position">
    <div class="relative flex justify-center items-center bg-white shadow-[0_10px_20px_#00000050] mt-10 py-5 w-[600px] h-auto min-h-[350px]">
      <div class="flex flex-col justify-center items-center px-4 w-1/3 h-full">
        <p class="font-black text-blue-700 text-center">{{ item.time }}</p>
        <p class="my-5 font-black text-2xl text-center text-red-600">{{ item.position }}</p>
        <p class="mb-2 text-black text-center">{{ item.company }}</p>
        <p class="text-black text-center">{{ item.description }}</p>
      </div>
      <div class="w-2/3">
        <template v-for="job in item.job" :key="job.name">
          <div class="my-2 w-full h-full">
            <p class="font-black text-left text-red-600">{{ job.name }} :</p>
            <p class="px-5 text-base text-black text-left">{{ job.innerDescription }}</p>
          </div>
        </template>
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import {} from 'vue'

const job = [
  {
    position: '前端工程師',
    time: '2023/12 - 至今',
    company: '深思設計有限公司',
    description: '網頁開發與維護',
    job: [
      {
        name: '系統維護',
        innerDescription: '進行系統維護與升級',
      },
      {
        name: '功能開發',
        innerDescription: '依顧客需求進行功能開發',
      },
      {
        name: '性能優化',
        innerDescription: '提升系統效率與響應速度，確保系統穩定運行',
      },
      { name: '組件化', innerDescription: '透過組件化設計，提高後期維護速度和效率' },
    ],
  },
  {
    position: '鏟花技師',
    time: '2016/3 - 2023/9',
    company: '宇漢機械刮花有限公司',
    description: '精密儀器製造工及修理',
    job: [
      {
        name: '各式工具母機 ',
        innerDescription: '銑床、車床、磨床、大型龍門、臥式搪孔機。',
      },
      {
        name: '新機開發',
        innerDescription: '針對開發機種給與合適的精密度預留量，油管路線規劃，各部件組合現場配置處理，並與設計師討論變動細節，增加開發速度。',
      },
      {
        name: '新機製造',
        innerDescription: '進行鏟花調整精密度，工具母機的水平度調整，斜契的緊密度配置，所有軸向的運動方向直角度與平行度，並符合公司SOP、ISO9000標準值。',
      },
      {
        name: '舊機整修',
        innerDescription: '至客戶端檢視機台情況，並給予客戶維修建議及報價，整機的拆解，各部研磨及耐磨片的更換、油路的更新、螺桿的更換至主軸的更換，回復機台所有功能至最佳精度。',
      },
      {
        name: '新人教學',
        innerDescription: '帶領新進人員認識產業、環境、工作項目，給予技術上的指導，更快的進入狀態。',
      },
    ],
  },
  {
    position: '主廚',
    time: '2014/5 - 2016/1',
    company: '創業-拉麵店(義番町)',
    description: '主廚／店員／餐點規劃與設計/採買',
    job: [
      {
        name: '店面分析',
        innerDescription: '店面的位置分析判斷、店面的LOGO設計取名、店面的座位安排',
      },
      {
        name: '空間規劃',
        innerDescription: '行走的動向規劃、廚房動線規劃',
      },
      {
        name: '產品規劃',
        innerDescription: '食材挑選、菜單設計、品項的製作、新口味的研發',
      },
      {
        name: '接洽',
        innerDescription: '定位安排、廠商接洽',
      },
      {
        name: '配送',
        innerDescription: '客製化食品與配送',
      },
    ],
  },
  {
    position: '值班襄理',
    time: '2011/10 - 2013/3',
    company: '十二鍋',
    description: '內區餐點製作 / 外區顧客服務',
    job: [
      {
        name: '外區服務',
        innerDescription: ' 協助營運管理工作、服務顧客、維護顧客關係',
      },
      {
        name: '內區服務',
        innerDescription: '餐點製作、控管餐點品質',
      },
      {
        name: '人員管理',
        innerDescription: '協助人力調度與配置、人員教育訓練',
      },
    ],
  },
  {
    position: '儲備幹部',
    time: '2006/3 - 2010/10',
    company: 'Battis意式風味小館',
    description: '餐廚助手／飲品調配',
    job: [
      {
        name: '門市接待人員',
        innerDescription: '接待用餐顧客，餐點的介紹',
      },
      {
        name: '吧檯調手',
        innerDescription: '各式咖啡、茶類製作，微醺雞尾酒的調配',
      },
      {
        name: '主廚助手',
        innerDescription: '前置作業的食材採買選購、各式食材的備料並符合主廚需要的條件，協助主廚主菜的出餐流暢度，控管前、中、後的餐點出餐時間',
      },
      {
        name: '主廚',
        innerDescription: '精通店內各式料理的製作，並於營運期間製作餐點，保持餐點供應順暢',
      },
    ],
  },
]
</script>
