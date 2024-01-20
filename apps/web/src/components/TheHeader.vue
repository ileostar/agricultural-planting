<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import LogoJSON from '@/assets/lottie/logo.json'
import { loadLanguageAsync } from '@/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales(language: string) {
  // change to some real logic
  await loadLanguageAsync(language)
  locale.value = language
}
</script>

<template>
  <div w-full h-full flex items-center justify-between ml="-1">
    <div flex items-center>
      <p w-21><Vue3Lottie :animationData="LogoJSON"/></p>
      <h1 font-bold color-green-800 text-5>{{ t('Plant-monitoring-system') }}</h1>
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
        <button class="btn btn-ghost btn-circle" onclick="my_modal_1.showModal()" h-9 w-9 flex items-center justify-center>
          <i i-carbon:video-add h-5 w-5 />
        </button>
        <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">录像功能</h3>
            <p class="py-4">功能待开发中🚧</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">关闭</button>
              </form>
            </div>
          </div>
        </dialog>
        <button class="btn btn-ghost btn-circle" onclick="my_modal_2.showModal()" h-9 w-9 flex items-center justify-center>
          <i i-carbon:intent-request-create h-5 w-5 />
        </button>
        <dialog id="my_modal_2" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">添加监控</h3>
            <p class="py-4">功能待开发中🚧</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">关闭</button>
              </form>
            </div>
          </div>
        </dialog>
        <label class="swap swap-rotate h-9 w-9 btn btn-ghost btn-circle" title="日夜间切换">

          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" />
          <i i-carbon:sun class="swap-on" dark:i-carbon:moon :title="t('button.toggle_dark')" @click="toggleDark()"></i>
          <i i-carbon:sun class="swap-off" dark:i-carbon:moon :title="t('button.toggle_dark')" @click="toggleDark()"></i>
        </label>
        <div class="dropdown dropdown-end">
          <button class="btn btn-ghost btn-circle" h-9 w-9 flex items-center justify-center title="国际化">
            <i i-carbon:ibm-watson-language-translator />
          </button>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-30">
            <li @click="toggleLocales('zh-CN')"><a>简体中文</a></li>
            <li @click="toggleLocales('en')"><a>English</a></li>
            <li @click="toggleLocales('ko')"><a>한글</a></li>
            <li @click="toggleLocales('ja')"><a>日本語.</a></li>
          </ul>
        </div>
        <div class="drawer-end">
          <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label for="my-drawer-4" class="btn btn-ghost btn-circle" h-9 w-9 title="通知告警">
              <div class="indicator">
                <div h-9 w-9 flex items-center justify-center>
                  <i i-carbon:notification h-5 w-5></i>
                </div>
                <span class="badge badge-xs badge-primary indicator-item top-1.5 right-1.5"></span>
              </div>
            </label>
          </div>
          <div class="drawer-side" z-99>
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="menu p-4 w-80 min-h-full  bg-base-200 text-base-content" flex="~ col" items-center>
              <h1 text-5 font-bold mb-5>植物监控状态</h1>
              <ul class="steps steps-vertical" w-full mb-5>
                <li class="step step-primary ">♻️状态良好，继续保持</li>
                <li class="step">🙂亚健康，需注意</li>
                <li class="step">⚠️警告，需人工矫正</li>
                <li class="step" data-content="?">❗❗ 异常，需尽快处理</li>
              </ul>
              <div flex="~ 1" items-center justify-center>
                <div class="radial-progress  text-green-500" style="--value:83; --size:12rem; --thickness: 2rem;" role="progressbar">83%</div>
              </div>
            </div>
          </div>
        </div>
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
