<script setup lang="ts">
definePage({
  path: '/monitor'
})
</script>


<template>
  <div flex gap-5>
    <video h-147 rd-5 autoplay loop muted border="~ green 2" >
      <source src="../../assets/videos/test2.mp4" type="video/mp4">
      您的浏览器不支持 video 标签。
    </video>
    <div flex-1 bg-gray rd-5>
      功能区
    </div>
  </div>
</template>

<route lang="yaml">
  name: monitor
</route>
