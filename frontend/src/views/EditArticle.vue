<template>
  <div>
    <!-- 定義element表單預設事件 -->
    <el-form
      @submit.native.prevent="saveArticle"
      ref="form"
      :model="form"
      label-width="120px"
    >
      <el-form-item label="文章標題">
        <el-input v-model="article.title"></el-input>
      </el-form-item>

      <el-form-item label="文章內容">
        <el-input type="textarea" v-model="article.doy"></el-input>
      </el-form-item>

      <el-form-item>
        <!-- native type表示它是提交按鈕 -->
        <el-button type="primary" native-type="submit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  /* name: {
    CreateArticle,
  }, */
  data() {
    return {
      article: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
    },
    fetch() {
      this.$http.get(`articles/${this.route.params.id}`).then((res) => {
          this.article = res.data
      });
    },
    saveArticle() {
      console.log(this.article);
      this.$http
        .put(`articles/${this.$route.params.id}`, this.article)
        .then(() => {
          this.$message({
            message: "文章創建成功",
            type: "succaess",
          });
          this.$router.push("/articles/index");
        })
        .catch(
          this.$message({
            message: "文章創建失敗",
            type: "error",
          })
        );
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style></style>
