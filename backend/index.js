const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/admin-platform", {
    /* useNewUrlParser: true, */
    /* useFindAndModify: true, */
    /* useCreateIndex: true, */
})

/* 建表 */
const Article = mongoose.model("Artice", new mongoose.Schema({
    title: { type: String },
    body: { type: String },
}))

app.use(require("cors")())
/* 識別客戶端傳過來的json */
app.use(express.json())

app.get("/", async (req, res) => {
    res.send("good")
})

app.get("/api/articles",async(req,res)=>{
    const articles = await Article.find()
    res.send(articles)
})

app.post("/api/articles", async (req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})

app.listen(3001, () => {
    console.log("listening good")
})