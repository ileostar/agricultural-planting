<script setup>
import { StarportCarrier } from 'vue-starport'

const { PageIn, PageOut, checkLoading } = useStore('loader')

// 全局加载动画
const router = useRouter()

onMounted(() => {
  checkLoading();
  router.beforeEach((to, from, next) => {
    PageIn(next);
  });
  router.afterEach((to, from) => {
    PageOut();
  });
})
</script>

<template>
    <Loading/>
    <StarportCarrier>
      <RouterView />
    </StarportCarrier>
</template>
