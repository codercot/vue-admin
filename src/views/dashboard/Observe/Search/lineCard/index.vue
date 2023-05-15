<template>
  <div class="line">
    <div class="top">
      <span>搜索用户指数</span>
      <i class="el-icon-info"></i>
    </div>
    <div class="num">
      <span>12306&nbsp;</span>
      <span class="sp2">18.9</span>
      <svg t="1684038523401" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2540" width="16" height="16">
        <path
          d="M529.143158 7.436293l347.212925 397.874796a21.748783 21.748783 0 0 1-16.375554 36.077393h-170.66398a21.492915 21.492915 0 0 0-21.492915 18.678367c-12.793402 92.624229-90.065549 502.268955-455.95684 562.909679a21.748783 21.748783 0 0 1-17.654895-38.380206c62.687669-49.126663 144.56544-144.309572 167.593564-313.694212a1571.285609 1571.285609 0 0 0 12.793402-207.508977 22.260519 22.260519 0 0 0-21.748783-22.260519H165.298811a21.748783 21.748783 0 0 1-16.375554-36.077393L496.39205 7.436293a21.748783 21.748783 0 0 1 32.751108 0z"
          p-id="2541" fill="#1afa29"></path>
      </svg>
      <svg t="1684038573000" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="3720" width="16" height="16">
        <path
          d="M507.649902 1015.81158L160.153845 618.161453a21.75049 21.75049 0 0 1 16.376839-36.080224h187.565987a22.262266 22.262266 0 0 0 21.750489-22.262266 1630.774944 1630.774944 0 0 0-12.538517-207.525259C350.022825 182.895773 268.138628 87.705395 204.934264 38.574877A21.75049 21.75049 0 0 1 223.102321 0.447548C588.766434 60.837143 665.532868 470.514012 679.350826 563.401397a21.238713 21.238713 0 0 0 21.494601 18.679832h170.677372a21.75049 21.75049 0 0 1 16.120951 36.080224L540.403581 1015.81158a21.75049 21.75049 0 0 1-32.753679 0z"
          p-id="3721" fill="#d81e06"></path>
      </svg>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: "",
  mounted() {
    let chart = echarts.init(this.$refs.charts)
    chart.setOption({
      xAxis: {
        show: false,
        type: 'category'
      },
      yAxis: {
        show: false
      },
      series: [
        {
          type: "line",
          data: [39, 20, 56, 78, 22, 90, 56, 98, 44],
          itemStyle: {
            opacity: 0,
          },
          lineStyle: {
            color: "purple"
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#0914c8'
                },
                {
                  offset: 1,
                  color: '#fff'
                }
              ],
              global: false
            }
          }
        }
      ],
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }
    })
  },
}
</script>

<style scoped>
.top span {
  margin-right: 20px;
}

.charts {
  height: 50px;
}

.num {
  margin-top: 10px;
}

.num .sp2 {
  margin:0 15px;
}</style>