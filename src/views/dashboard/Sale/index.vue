<template>
  <div class="sale">
    <el-card>
      <div class="clearfix">
        <!-- v-model="activeName" @tab-click="handleClick" -->
        <el-tabs v-model="activeName" class="tabs">
          <el-tab-pane label="销售额" name="销售额">1</el-tab-pane>
          <el-tab-pane label="访问量" name="访问量">2</el-tab-pane>
        </el-tabs>
        <div class="pos">
          <div>
            <span>今日</span>
            <span>本周</span>
            <span>本月</span>
            <span>本年</span>
          </div>
          <el-date-picker type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"
            size="mini">
          </el-date-picker>
        </div>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :span="18">
            <div class="charts" ref="charts"></div>
          </el-col>
          <el-col :span="6">
            <h4>门店销售额排名</h4>
            <ul>
              <li>
                <span class="index">0</span>
                <span class="name">肯德基</span>
                <span class="vNum"></span>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import lineChart from '../Card/lineChart'
export default {
  data() {
    return {
      activeName: "销售额",
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.clearfix {
  display: flex;
  justify-content: space-between;
}

.pos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 50px;
}

.pos span {
  padding: 0 7px;
}

.tabs {
  width: 100%;
}

.el-range-editor--mini.el-input__inner {
  width: 240px;
  margin: 0 20px;
}

.charts {
  width: 100%;
  height: 300px;
}
</style>