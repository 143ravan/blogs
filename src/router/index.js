import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Blog = () => import(/* webpackChunkName: "p-blog" */ '@/pages/Blog/Blog.vue')
const BlogDetails = () => import(/* webpackChunkName: "p-blog-details" */ '@/pages/BlogDetails/BlogDetails.vue')

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog-details/:slug',
      name: 'BlogDetails',
      component: BlogDetails
    }
  ],
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
