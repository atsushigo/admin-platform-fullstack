<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="title" label="標題" width="140"> </el-table-column>
      <el-table-column prop="body" label="內容" width="220"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <!-- scope.row表示當前這一行數據對象 -->
        <template slot-scope="scope">
          {{ scope.row }}
          <el-button @click="edit(scope.row._id)" type="text" size="small"
            >編輯</el-button
          >
          <el-button @click="remove(scope.row._id)" type="text" size="small"
            >刪除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  /* name: {
    ListArticle,
  }, */
  data() {
    /* const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    }; */
    return {
      //把item對象複製 塞到空的20個數組裡面
      /* tableData: Array(20).fill(item), */
      articles: [],
    };
  },
  methods: {
    fetch(){
      this.$http.get("articles").then((res) => {
      this.articles = res.data;
    })
    },
    edit(id) {
      this.$router.push(`/articles/${id}/edit`)
    },
    //刪除數據後重新更新列表get一次
    remove(id) {
      this.$http.delete(`articles/${id}`).then(() => {
        this.$message({
          message: "文章刪除成功",
          type: "success",
        });
        this.fetch()
        });
    },
  },
  created() {
    this.fetch()
  },
};
</script>

<style></style>
