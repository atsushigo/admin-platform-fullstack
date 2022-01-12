import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from "../views/ListArticle"
import CreateArticle from "../views/CreateArticle"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/articles/index"
  },
  {
    path: '/articles/index',
    name: 'list-article',
    component: ListArticle
  },
  {
    path: "/articles/create",
    name: "create-article",
    component: CreateArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
