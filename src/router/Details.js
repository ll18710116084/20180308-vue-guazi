import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/pages/details/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Details',
      component: Details
    }
  ]
})
