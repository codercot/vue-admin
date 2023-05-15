<template>
  <div class="sku">
    <el-table style="width: 100%" :data="records" border>
      <el-table-column type="index" label="序号" width="180" align="center">
      </el-table-column>
      <el-table-column prop="skuName" label="名称">
      </el-table-column>
      <el-table-column prop="skuDesc" label="描述">
      </el-table-column>
      <el-table-column prop="address" label="默认图片" width="150">
        <template slot-scope="{row}">
          <img :src="row.skuDefaultImg" alt="" style="width: 100px;">
        </template>
      </el-table-column>
      <el-table-column prop="weight" label="重量" width="100">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="100">
      </el-table-column>
      <el-table-column prop="address" label="操作" width="300">
        <template slot-scope="{row}">
          <el-button type="success" icon="el-icon-sort-down" size="mini" @click="cancelSale(row)"
            v-if="row.isSale == 0"></el-button>
          <el-button type="success" icon="el-icon-sort-up" size="mini" @click="onSale(row)" v-else></el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
          <el-button type="info" icon="el-icon-info" size="mini"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination :page-size="limit" :current-page="4" :total="total" layout="prev, pager, next ,->,sizes,total"
      :page-sizes="[3, 5, 10]" @current-change="handleCurrentChange" @size-change="handleSizeChange" align="center">
    </el-pagination>

  </div>
</template>

<script>
export default {
  name: "sku",
  data() {
    return {
      page: 1,
      limit: 5,
      records: [],
      total: 0,
      isShow: 0
    }
  },
  mounted() {
    this.getSkuList()
  },
  methods: {
    async getSkuList() {
      let res = await this.$API.sku.reqSkuList(this.page, this.limit)
      if (res.code == 200) {
        this.records = res.data.records
        this.total = res.data.total
      }
    },
    // 当前页发送改变
    handleCurrentChange(page) {
      this.page = page
      this.getSkuList()
    },
    // 每一页展示条数发生改变
    handleSizeChange(limit) {
      this.limit = limit
      this.getSkuList()
    },
    // 商品上下架
    async onSale(row) {
      let res = await this.$API.sku.reqSkuListOnSale(row.id)
      if (res.code == 200) {
        this.$message({
          type: 'success',
          message: '上架成功'
        })
        row.isSale = 0
      }
    },
    async cancelSale(row) {
      let res = await this.$API.sku.reqSkuCancelSale(row.id)
      if (res.code == 200) {
        this.$message({
          type: 'success ',
          message: '下架成功'
        })
        row.isSale = 1
      }
    }
  },
}
</script>

<style scoped lang="less"></style>