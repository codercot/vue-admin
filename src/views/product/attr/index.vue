<template>
  <div class="home">
    <el-card style="margin: 20px 0;">
      <!-- 这里要接收子组件传递的id -->
      <categorySelect @getCategoryid="getID" :show="!isShow"></categorySelect>
    </el-card>
    <el-card>
      <div v-show="isShow">
        <el-button type="primary" icon="el-icon-plus" style="margin-bottom: 20px;" @click="addAttr"
          :disabled="!category3id">添加属性</el-button>
        <el-table :data="attrList" style="width: 100%" border>
          <el-table-column prop="date" label="序号" width="180" type="index" align="center">
          </el-table-column>
          <el-table-column prop="attrName" label="属性名称" width="180">
          </el-table-column>
          <el-table-column prop="address" label="属性值列表">
            <template slot-scope="{row}">
              <el-tag type="success" v-for="(attr, index) in row.attrValueList" :key="attr.id" style="margin: 0 20px;">{{
                attr.valueName }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作" width="180">
            <template slot-scope="{row}">
              <el-button type="warning" class="el-icon-edit" size="mini" @click="updata(row)"></el-button>
              <el-button type="danger" class="el-icon-delete" size="mini" @click="deleteAttr(row)">
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div v-show="!isShow">
        <el-form :inline="true" class="demo-form-inline" :model="attrInfo">
          <el-form-item label="属性名">
            <el-input placeholder="请输入属性名" v-model="attrInfo.attrName"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" icon="el-icon-plus" :disabled="!attrInfo.attrName"
          @click="addAttrValue">添加属性值</el-button>
        <el-button @click="isShow = true">取消</el-button>

        <el-table style="width: 100% ;margin: 20px 0;" border :data="attrInfo.attrValueList">
          <el-table-column type="index" label="序号" width="180">
          </el-table-column>
          <el-table-column prop="name" label="属性值名称">
            <template slot-scope="{row}">
              <el-input placeholder="请输入内容" v-model="row.valueName" size="mini"></el-input>
            </template>
          </el-table-column>

          <el-table-column prop="address" label="操作">
            <template slot-scope="{row,$index}">
              <el-popconfirm :title="`确定删除${row.valueName}吗？`" @confirm="deleteAttrValue(row, $index)">
                <el-button type="danger" class="el-icon-delete" size="mini" slot="reference">
                </el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="baocun" :disabled="attrInfo.attrValueList.length < 1">保存</el-button>
        <el-button @click="isShow = true">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep"
export default {
  data() {
    return {
      category1id: "",
      category2id: "",
      category3id: "",
      attrList: [],
      isShow: true,
      // 属性列表数据
      attrInfo: {
        attrName: "",
        attrValueList: [
          // {
          //   attrId: 0,
          //   valueName: ""
          // }
        ],
        categoryId: 0,
        categoryLevel: 3,
      }
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
        this.getAttrList()
      }
    },
    // 商品列表数据
    async getAttrList() {
      const { category1id, category2id, category3id } = this
      let res = await this.$API.attr.reqAttrList(category1id, category2id, category3id)
      if (res.code == 200) {
        this.attrList = res.data
      }
    },

    // 添加属性值按钮
    addAttrValue() {
      this.attrInfo.attrValueList.push({
        attrId: this.attrInfo.id,
        valueName: ''
      })
    },
    // 添加属性
    addAttr() {
      this.isShow = false
      this.attrInfo = {
        attrName: "",
        attrValueList: [],
        categoryId: this.category3id,
        categoryLevel: 3,
      }
    },
    // 修改按钮
    updata(row) {
      this.isShow = false
      // 这里由于是双向绑定，修改一个值即使点击取消也会同步到展示数据中，所以要进行深拷贝，让两个独立
      this.attrInfo = cloneDeep(row)
    },
    // 保存按钮
    async baocun() {
      // 先对数据进行过滤，筛选掉不用的数据
      this.attrInfo.attrValueList = this.attrInfo.attrValueList.filter(item => {
        if (item.valueName != '') {
          return true
        }
      })
      let res = await this.$API.attr.reqAttrInfo(this.attrInfo)
      if (res.code == 200) {
        this.$message({
          type: 'success',
          message: '保存成功'
        })
        this.isShow = true
        this.getAttrList()
      } else {
        this.$message({
          type: 'error',
          message: '系统数据不能修改!',
        });
      }
    },

    // 删除属性值按钮（删除数组中元素即可）
    deleteAttrValue(row, index) {
      this.attrInfo.attrValueList.splice(index, 1)
    },
    // 删除属性
    deleteAttr(row) {

      this.$confirm(`此操作将永久删除${row.attrName}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await this.$API.attr.reqDeleteAttr(row.id)
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.isShow = true
          this.getAttrList()
        }
      }).catch(() => {

        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style scoped lang="less"></style>