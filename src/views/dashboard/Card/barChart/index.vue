<template>
  <div class="line">
    <div ref="charts" class="di"></div>
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
          type: "bar",
          data: [39, 20, 56, 78, 22, 90, 56, 98, 44],
        }
      ],
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }
    })
  }
}
</script>

<style scoped >
.di {
  height: 40px;
}
</style>