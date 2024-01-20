<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import LogoJSON from '@/assets/lottie/logo.json'
</script>

<template>
    <aside class="lottie-anime" w-70 flex="~ col" overflow-hidden>
      <h2 my-7 text-center font-bold color-white flex items-center>
        <p w-20><Vue3Lottie :animationData="LogoJSON"/></p>
        <p color-green-700><slot name="title"></slot></p>
      </h2>
      <div flex-1 >
        <slot name="lottie"></slot>
      </div>
    </aside>
    <div class="auth-item" flex="~ 1 col" opacity-80  rd-8 px-8>
      <h2 my-2 mt-8 font-bold text-5 color-green-500 text-center>
        <slot name="header"></slot>
      </h2>
      <div h-60 pb-5>
        <slot name="content"></slot>
      </div>
    </div>
</template>

<style scoped>
.auth-item {
  background: rgba(216, 227, 223, 0.6);
  box-shadow: inset 9px 9px 18px rgba(177, 213, 200),
              inset -9px -9px 18px rgba(255, 255, 255, 0.8);
}
</style>
