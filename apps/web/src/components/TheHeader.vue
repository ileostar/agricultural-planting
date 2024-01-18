<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import LogoJSON from '@/assets/lottie/logo.json'
import config from '~/config/all.config'
</script>

<template>
  <div w-full h-full flex items-center justify-between ml="-1">
    <div flex items-center>
      <p w-21><Vue3Lottie :animationData="LogoJSON"/></p>
      <h1 font-bold color-green-800 text-5>{{ config.web.projectName }}</h1>
      <div flex="~ 1" ml-5 justify-center>
        <div class="form-control">
          <input type="text" placeholder="搜索" class="input input-bordered w-60 md:w-auto" bg="white/60" opacity-80 h-9 rd-5 />
        </div>
        <!-- <div class="flex-none">
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
          </ul>
        </div> -->
      </div>
    </div>
    <div pr-3 flex items-center gap-3>
      <div flex items-center gap-3>
        <button class="btn btn-ghost btn-circle" h-9 w-9 flex items-center justify-center>
          <i i-carbon:video-add h-5 w-5 />
        </button>
        <button class="btn btn-ghost btn-circle" h-9 w-9 flex items-center justify-center>
          <i i-carbon:intent-request-create h-5 w-5 />
        </button>
        <label class="swap swap-rotate h-9 w-9 btn btn-ghost btn-circle" title="日夜间切换">
  
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" />
          <i i-carbon:sun class="swap-on" ></i>
          <i i-carbon:moon class="swap-off" ></i>
        </label>
        <button class="btn btn-ghost btn-circle" h-9 w-9 flex items-center justify-center title="国际化">
          <i i-carbon:ibm-watson-language-translator />
        </button>
        <button class="btn btn-ghost btn-circle" h-9 w-9 title="通知告警">
          <div class="indicator">
            <div h-9 w-9 flex items-center justify-center>
              <i i-carbon:notification h-5 w-5></i>
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
