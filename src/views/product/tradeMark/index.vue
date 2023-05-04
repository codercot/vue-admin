<template>
  <div class="tradeMark">
    <el-button class=" el-icon-plus" type="primary" style="margin: 10px 0 0 10px;">添加</el-button>

    <el-table style="width: 100% ;margin: 10px 0 0 10px;" border>
      <el-table-column prop="date" label="序号" width="80px" align="center">
      </el-table-column>
      <el-table-column prop="name" label="品牌名称">
      </el-table-column>
      <el-table-column prop="address" label="品牌LOGO">
      </el-table-column>
      <el-table-column prop="address" label="操作">
      </el-table-column>
    </el-table>
    <el-pagination :total="90" :current-page="6" :page-size="3" :page-sizes="[3, 5, 8]"
      layout=" prev, pager, next,->,sizes,total" style="text-align: center;margin-top: 10px;">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'tradeMark'

}
</script>

<style scoped lang="less">


</style>