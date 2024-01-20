<script setup lang="ts">
definePage({
  path: '/'
})
</script>

<template>
  <div flex flex-col w-full h-full mr-3 justify-between>
    <div mb-3 flex="~ col" gap-1 justify-between >
      <div class="stats shadow" w-full h-full flex-1 flex>
        <div class="stat bg-blue-600" w-full h-25 justify-between>
          <div class="stat-figure text-primary">
            <svg color-white xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-white">25.6K</div>
        </div>
        <div class="stat bg-gray-400" h-full>
          <div class="stat-figure text-secondary">
            <svg color-white xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-white">25.6K</div>
        </div>
        <div class="stat bg-black" h-full>
          <div class="stat-figure text-primary">
            <svg color-red-500 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-red">25.6K</div>
        </div>
        <div class="stat bg-red-500" h-full>
          <div class="stat-figure color-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-black">25.6K</div>
        </div>
        <div class="stat bg-yellow-300" h-full>
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title color-black">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
        </div>
        <div class="stat" h-full>
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
        </div>
      </div>
    </div>
    <div flex="~ 1" w-full justify-between gap-3>
      <div flex="~ 1 col" gap-2>
        <div flex-1 bg="green/50" rd-3>可视化图标1</div>
        <div flex-1 bg="red/70" rd-3>可视化图标2</div>
      </div>
      <video flex-1 h-116.8 rd-5 autoplay loop muted border="~ green 2" >
        <source src="../../assets/videos/test.mp4" type="video/mp4">
        您的浏览器不支持 video 标签。
      </video>
      <div flex="~ 1 col" gap-2>
        <div flex-1 bg="blue/50" rd-3>可视化图标1</div>
        <div flex-1 bg="yellow/50" rd-3>可视化图标2</div>
      </div>
    </div>
    <!-- <div class="stats stats-vertical shadow">
      <div class="stat text-primary">
        <div class="stat-title">温度</div>
        <div class="stat-value">17℃</div>
      </div>
      <div class="stat text-secondary">
        <div class="stat-title">湿度</div>
        <div class="stat-value">
          <span class="countdown font-mono text-6xl">
            <span style="--value:56;"></span>
          </span>
        </div>
      </div>
      <div class="stat">
        <div class="stat-title">光照强度</div>
        <div class="stat-value">2000</div>
      </div>
      <div class="stat text-secondary">
        <div class="stat-title">土壤湿度</div>
        <div class="stat-value">23</div>
      </div>
    </div> -->
  </div>
</template>

<route lang="yaml">
  name: home
</route>
