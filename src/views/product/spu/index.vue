<template>
  <div class="Spu">
    <el-card style="margin: 20px 0;">
      <categorySelect @getCategoryid="getID" :show="!show"></categorySelect>
    </el-card>
    <el-card>
      <div v-if="flag == 0">
        <el-button type="primary" icon="el-icon-plus" @click="add">添加SPU</el-button>
        <el-table style="width: 100%" :data="records">
          <el-table-column prop="date" type="index" label="序号" width="180">
          </el-table-column>
          <el-table-column prop="name" label="spu名称" width="180">
          </el-table-column>
          <el-table-column prop="address" label="spu描述">
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="{row,$index}">
              <el-button type="success" icon="el-icon-plus"></el-button>
              <el-button type="warning" icon="el-icon-edit"></el-button>
              <el-button type="info" icon="el-icon-message"></el-button>
              <el-button type="danger" icon="el-icon-delete"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next,->,sizes,total" :total="50" :current-page="3" :page-sizes="[3, 5, 7]"
          :page-size="3" style="text-align: center;margin-top: 10px;">
        </el-pagination>
      </div>
      <div v-if="flag == 1">
        <spuForm></spuForm>
      </div>
      <div v-if="flag == 2">
        <skuFrom></skuFrom>
      </div>
    </el-card>
  </div>
</template>

<script>
import spuForm from './spuForm'
import skuFrom from './skuForm'
export default {
  name: "SUP",
  components: {
    spuForm,
    skuFrom
  },
  data() {
    return {
      show: true,
      category1id: "",
      category2id: "",
      category3id: "",
      page: 1,//第几页
      limit: 3,//每一页展示多少数据
      records: [],
      total: 0,
      flag: 0
    }
  },
  methods: {
    getID({ id, flag }) {
      // 获取id，通过flag判断是几级id
      if (flag == 1) {
        // 切换选项卡时要把之前的id清除
        this.category2id = ""
        this.category3id = ""
        this.category1id = id
      } else if (flag == 2) {
        this.category3id = ""
        this.category2id = id
      } else {
        this.category3id = id
        // 发送网络请求
        this.getSpuList()
      }
    },
    async getSpuList() {
      let res = await this.$API.spu.reqSpuList(this.page, this.limit,this.category3id)
      if (res.code == 200) {
        this.records = res.data.records
        this.total = res.data.total
        console.log(res);
      }
    },
    // 添加spu
    add() {
      this.flag = 1
    }
  }
}
</script>

<style scoped lang="less"></style>