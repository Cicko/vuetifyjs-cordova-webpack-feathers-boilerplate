import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
