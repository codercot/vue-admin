<template>
  <div class="tradeMark">
    <el-button class=" el-icon-plus" type="primary" style="margin: 10px 0 0 10px;" @click="add">添加</el-button>

    <el-table style="width: 100% ;margin: 10px 0 0 10px;" border :data="list">
      <el-table-column prop="date" label="序号" width="80px" align="center" type=index>
      </el-table-column>
      <el-table-column prop="tmName" label="品牌名称">
      </el-table-column>
      <el-table-column prop="address" label="品牌LOGO">
        <template v-slot="{ row }">
          <img :src="row.logoUrl" alt="" style="width: 130px; height: 80px;">
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <el-button type="warning" size="mini" @click="xiugai()">修改</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination :total="total" :current-page="page" :page-size="limit" :page-sizes="[3, 5, 8]"
      layout=" prev, pager, next,->,sizes,total" style="text-align: center;margin-top: 10px;"
      @current-change="currentPage" @size-change="sizeChange">
    </el-pagination>

    <!-- 添加修改 -->
    <el-dialog title="添加商品" :visible.sync="dialogFormVisible">
      <el-form :model="tmForm">
        <el-form-item label="商品名称" label-width="100px" style="width: 80%;">
          <el-input autocomplete="off" v-model="tmForm.tmName"></el-input>
        </el-form-item>

        <el-form-item label="商品LOGO" label-width="100px" style="width: 80%;">
          <el-upload class="avatar-uploader" action="/dev-api/admin/product/fileUpload" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="quxiao">取 消</el-button>
        <el-button type="primary" @click="addorUploadMark">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'tradeMark',
  data() {
    return {
      // 当前页
      page: 1,
      // 每页展示多少数据
      limit: 3,
      total: 0,
      // 列表数据
      list: [],
      dialogFormVisible: false,
      imageUrl: '',
      tmForm: {
        tmName: '',
        logoUrl: '',
      }
    }
  },
  mounted() {
    this.getTradeList()
  },
  methods: {
    // 商品列表数据
    async getTradeList() {
      const { page, limit } = this
      let res = await this.$API.tradeMark.reqTradeMarkList(page, limit)
      if (res.code == 200) {
        this.total = res.data.total
        this.list = res.data.records
      }
    },
    // 当前页数发生改变
    currentPage(page) {
      this.page = page
      this.getTradeList()
    },
    // 当前每页展示的条数发生改变
    sizeChange(size) {
      this.limit = size
      this.getTradeList()
    },
    // 添加商品
    add() {
      this.dialogFormVisible = true
    },
    // 修改商品信息
    xiugai() {
      this.dialogFormVisible = true
    },
    // 取消按钮
    quxiao() {
      this.dialogFormVisible = false
      this.tmForm.tmName = ''
      this.tmForm.logoUrl = ''
    },
    // 确定
    async addorUploadMark() {
      this.dialogFormVisible = false
      let res = await this.$API.tradeMark.reqAddorUploadTradeMark(this.tmForm)
      if (res.code == 200) {
        this.$message(this.tmForm.id ? "修改商品成功" : "添加商品成功")
        this.getTradeList()
      }
    },

    // 图片上传成功回调
    handleAvatarSuccess(res, file) {
      this.tmForm.logoUrl = res.data
      this.imageUrl = res.data
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>