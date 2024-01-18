<script setup lang="ts">
const { msg } = useStore('home')
</script>

<template>
  <div flex flex-col w-full h-full justify-between>
    <div my-2 flex="~ 1 col" h-20 gap-1 justify-between>
      <div class="stats shadow" w-full h-full flex-1 flex>
        <div class="stat bg-blue-600" w-full h-full justify-between>
          <div class="stat-figure text-primary">
            <svg color-white xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-white">25.6K</div>
        </div>
        <div class="stat bg-gray-400">
          <div class="stat-figure text-secondary">
            <svg color-white xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-white">25.6K</div>
        </div>
        <div class="stat bg-black">
          <div class="stat-figure text-primary">
            <svg color-red-500 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-red">25.6K</div>
        </div>
        <div class="stat bg-red-500">
          <div class="stat-figure color-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-black">25.6K</div>
        </div>
        <div class="stat bg-yellow-300">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title color-black">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
        </div>
      </div>
    </div>
    <div flex="~ 1 col" px-3>
      <div class="carousel" w-full h-full rd-3 border="green/30 2">
        <div id="item1" class="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
        </div> 
        <div id="item2" class="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
        </div> 
        <div id="item3" class="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
        </div> 
        <div id="item4" class="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
        </div>
      </div> 
      <div class="flex justify-center w-full pt-2 gap-2">
        <a href="#item1" class="btn btn-xs">1</a> 
        <a href="#item2" class="btn btn-xs">2</a> 
        <a href="#item3" class="btn btn-xs">3</a> 
        <a href="#item4" class="btn btn-xs">4</a>
      </div>
    </div>
    {{ msg }}
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
meta:
  layout: home
</route>
