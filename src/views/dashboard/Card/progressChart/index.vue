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
        min: 0,
        max: 100
      },
      yAxis: {
        show: false,
        type: 'category'
      },
      series: [
        {
          type: "bar",
          data: [88],
          barWidth: 10,
          showBackground: true,
          backgroundStyle: {
            color:"#eee"
          },
          label: {
            show: true
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
  }
}
</script>

<style scoped >
.di {
  height: 40px;
}
</style>