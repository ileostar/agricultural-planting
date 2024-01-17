<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const router = useRouter()

const name = ref('')
const { msg } = useStore('home')

/**
 * 跳转链接
 * Navigates to the "hi" route with the value of the "name" input field
 *
 * @return {void}
 */
function go(): void {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <el-container>
    <el-header bg-gray>{{msg}}</el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  backdrop-filter: blur(5px); 
  background-color: rgb(135, 130, 130);
}
</style>
