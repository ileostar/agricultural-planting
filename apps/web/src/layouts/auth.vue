<script setup>
import 'css-doodle';
const doodle = document.querySelector('css-doodle');

document.addEventListener('click', function(e) {
  doodle.update();
});
</script>

<template>
  <main font-sans text="center gray-700 dark:gray-200" relative m-0 h-full w-full>
    <div class="auth-box" m-0 relative justify-center items-center w-full h-full overflow-hidden>
      <div class="auth-box__content" flex w-2xl h-110 rd-8 bg="gray/30" p-5 opacity-90>
        <RouterView />
      </div>
      <css-doodle h-full w-full>
            :doodle {
                @grid: 2x35 / 100vmin;
            }
            @place-cell: center;
            width: @rand(60vmin, 100vmin);
            height: @rand(60vmin, 100vmin);
            transform: translate(@rand(-120%, 120%), @rand(-80%, 80%)) scale(@rand(.8, 2.8)) skew(@rand(45deg));
            clip-path: polygon(
              @r(0, 30%) @r(0, 50%),
              @r(30%, 60%) @r(0%, 30%),
              @r(60%, 100%) @r(0%, 50%),
              @r(60%, 100%) @r(50%, 100%),
              @r(30%, 60%) @r(60%, 100%),
              @r(0, 30%) @r(60%, 100%)
            );
            background: @pick(#e6437d, #ebbf4d, #5ee463, #f8e645, #ffc107, #43f8bf, #e136eb, #f57c23, #32ed39);
            opacity: @rand(.45, .6);
            position: relative;
            top: @rand(-80%, 80%);
            left: @rand(-80%, 80%);
            animation: colorChange @rand(6.1s, 26.1s) infinite @rand(-.5s, -2.5s) linear alternate;
          @keyframes colorChange {
            100% {
              left: 0;
              top: 0;
              filter: hue-rotate(360deg);
            }
          }
      </css-doodle>
    </div>
  </main>
</template>

<style scoped>
.auth-box::after {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  backdrop-filter: blur(100px);
  z-index: 1;
}

.auth-box__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #000;
  z-index: 10;
  backdrop-filter: blur(10px);
  background-color: rgba(216, 227, 223, 0.6);
  box-shadow: 6px 6px 20px 0px rgba(255, 255, 255, 0.4), inset -5px -5px 10px 0px rgba(145, 192, 255, 0.6), inset 0px 8px 8px 0px rgb(255, 255, 255);
}
</style>
