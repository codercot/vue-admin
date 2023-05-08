<template>
  <div class="home">
    <el-form :inline="true" class="demo-form-inline" v-model="tmForm">
      <el-form-item label="一级分类">
        <el-select placeholder="请选择" v-model="tmForm.category1id" @change="handle1">
          <el-option :label="c1.name" :value="c1.id" v-for="(c1, index) in list1" :key="c1.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select placeholder="请选择" v-model="tmForm.category2id" @change="handle2">
          <el-option :label="c2.name" :value="c2.id" v-for="(c2, index) in list2" :key="c2.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select placeholder="请选择" v-model="tmForm.category3id" @change="handle3">
          <el-option :label="c3.name" :value="c3.id" v-for="(c3, index) in list3" :key="c3.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      // form表单收集id
      tmForm: {
        category1id: "",
        category2id: "",
        category3id: "",
      }
    }
  },
  mounted() {
    this.getCategory1List()
  },
  methods: {
    // 一级分类
    async getCategory1List() {
      let res = await this.$API.attr.reqCategory1List()
      if (res.code == 200) {
        this.list1 = res.data
      }
    },
    // 监听一级分类选择的改变 改变过后发生请求，获取二级分类
    async handle1() {
      // 发送前要把前面二三级分类数据清空
      this.list2 = []
      this.list3 = []
      this.tmForm.category2id = ""
      this.tmForm.category3id = ""
      this.$emit("getCategoryid", { id: this.tmForm.category1id, flag: 1 })
      let res = await this.$API.attr.reqCategory2List(this.tmForm.category1id)
      if (res.code == 200) {
        this.list2 = res.data
      }
    },
    // 三级分类
    async handle2() {
      this.tmForm.category3id = ""
      this.$emit("getCategoryid", { id: this.tmForm.category2id, flag: 2 })
      let res = await this.$API.attr.reqCategory3List(this.tmForm.category2id)
      if (res.code == 200) {
        this.list3 = res.data
      }
    },
    handle3() {
      this.$emit("getCategoryid", { id: this.tmForm.category3id, flag: 3 })
    }
  }
}
</script>

<style scoped lang="less"></style>