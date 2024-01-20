<template>
  <el-container class="index-main dark:bg-black" h-full overflow-hidden >
    <el-header>
      <TheHeader/>
    </el-header>
    <el-container>
      <el-aside px-3 flex items-center>
        <SideMenu/>
      </el-aside>
      <el-main w-full h-full>
        <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.index-main {
  backdrop-filter: blur(20px);
  background: #CCDAED;  /* fallback for old browsers */
  background: -webkit-linear-gradient(180deg, rgba(237, 242, 224,.7), rgba(0, 201, 255,.7));  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(260deg, rgba(241, 255, 205, 0.8), rgba(229, 240, 240, 0.8), rgba(0, 201, 255,.4)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.el-header {
  padding: 0;
}

.el-aside {
  width: auto;
}

.el-main {
  backdrop-filter: blur(6px) saturate(170%);
  -webkit-backdrop-filter: blur(6px) saturate(170%);
  background-color: rgba(255,255,255,0.76);
  border-top-left-radius: 2rem;
  padding: 1rem;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
