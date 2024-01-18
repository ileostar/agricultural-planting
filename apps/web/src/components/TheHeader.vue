<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import LogoJSON from '@/assets/lottie/logo.json'


</script>

<template>
  <div w-full h-full flex items-center justify-between ml="-1.2">
    <div flex items-center>
      <p w-18><Vue3Lottie :animationData="LogoJSON"/></p>
      <h1 font-bold color-green-800 text-4>植物监测系统</h1>
    </div>
    <div pr-3 flex items-center gap-3>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 py-0">
          <li>
            <details>
              <summary>
                监控视角
              </summary>
              <ul id="supervisory-select" class="p-2 bg-base-100 z-50 w-full">
                <li><a>Monitor1</a></li>
                <li><a>Monitor2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Link</a></li>
        </ul>
      </div>
      <div flex items-center gap-3>
        <button class="btn btn-ghost btn-circle" h-9 w-9 flex items-center justify-center>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button class="btn btn-ghost btn-circle" h-9 w-9>
          <div class="indicator">
            <div h-9 w-9 flex items-center justify-center>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </div>
            <span class="badge badge-xs badge-primary indicator-item top-1.5 right-1.5"></span>
          </div>
        </button>
      </div>
      <div class="dropdown dropdown-end" h-9 w-9>
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar" h-full w-full>
          <div class=" rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabindex="0" class="mt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
#supervisory-select {
  margin-top: 3px;
}
</style>
