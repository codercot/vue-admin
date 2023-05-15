<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>线上热门搜索</span>
    </div>
    <el-row :gutter="10">
      <el-col :span="12">
        <lineCard></lineCard>
      </el-col>
      <el-col :span="12">
        <lineCard></lineCard>
      </el-col>
    </el-row>
    <div class="bottom">
      <!-- :span-method="arraySpanMethod" -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="ID" width="80">
        </el-table-column>
        <el-table-column prop="name" label="搜索关键字">
        </el-table-column>
        <el-table-column prop="amount1" sortable label="用户数">
        </el-table-column>
        <el-table-column prop="amount2" sortable label="周涨幅">
        </el-table-column>
      </el-table>
    </div>
    <el-pagination layout="prev, pager, next" :total="100" align="right">
    </el-pagination>
  </el-card>
</template>

<script>
import lineCard from './lineCard'
export default {
  components: {
    lineCard
  },
  data() {
    return {
      tableData: [{}]
    }
  },
}
</script>

<style scoped>
.bottom {
  margin-top: 10px;
}
</style>