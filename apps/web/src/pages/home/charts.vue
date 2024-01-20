<script setup lang="ts">
definePage({
  path: '/charts'
})
</script>

<template>
  <div  h-full flex="~ 1" gap-2>
    <div flex-1 bg="blue/50" rd-3>可视化图标1</div>
    <div w-50 h-full flex="~ col" gap-2 rd-3>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标2</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标3</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标4</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标5</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>更多</div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
  name: charts
</route>
