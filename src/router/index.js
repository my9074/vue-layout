import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Table from '@/views/table/Table'
import Form from '@/views/form/Form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/table',
      component: Home,
      redirect: {name: 'table'},
      children: [
        {
          path: 'apps',
          name: 'table',
          component: Table
        }
      ]
    },
    {
      path: '/form',
      component: Home,
      redirect: {name: 'from'},
      children: [
        {
          path: 'app',
          name: 'from',
          component: Form
        }
      ]
    }
  ]
})
