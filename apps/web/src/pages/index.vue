<script setup lang="ts">
</script>

<template>
  <el-container class="index-main" h-full overflow-hidden>
    <el-header>
      <TheHeader/>
    </el-header>
    <el-container>
      <el-aside px-2 flex items-center>
        <SideMenu/>
      </el-aside>
      <el-main>
        <div flex w-full h-full justify-between>
          <div class="shadow" bg-white rd-5 p-2 flex="~ col" w-90>
            <h2 m-1 align="left" text-3.5>状态信息（Status information）</h2>
            <div mt-2>
              <ul flex="~ 1" gap-2>
                <li flex-1>
                  <div class="card bg-primary text-primary-content">
                    <div class="card-body">
                      <h2 class="card-title">Card title!</h2>
                      <p>20%</p>
                      <div class="card-actions justify-end">
                        <button class="btn">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li flex-1>
                  <div class="card bg-primary text-primary-content">
                    <div class="card-body">
                      <h2 class="card-title">Card title!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
                  <li>
                    1
                  </li>
                <li>
                  2
                </li>
              </ul>
              <ul>
                  <li>
                    1
                  </li>
                <li>
                  2
                </li>
              </ul>
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
          <div class="stats stats-vertical shadow">
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
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.index-main {
  backdrop-filter: blur(20px);
  background: #CCDAED;  /* fallback for old browsers */
  background: -webkit-linear-gradient(180deg, rgba(237, 242, 224,.7), rgba(0, 201, 255,.7));  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(260deg, rgba(237, 242, 224,.9), rgba(211, 223, 223,.8), rgba(0, 201, 255,.4)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
  border-top-left-radius: 1.5rem;
  padding: 1rem;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
