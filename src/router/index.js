import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TabCom from '@/components/TabCom'
import DatePicker from '@/components/DatePicker'
import Drawer from '@/components/Drawer'
import Bar from '@/components/Bar'
import Dialog from '@/components/Dialog'
import SelectList from '@/components/SelectList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Drawer',
      redirect: '/HelloWorld',
      component: Drawer,
      children: [
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/DatePicker',
          name: 'DatePicker',
          component: DatePicker
        },
        {
          path: '/TabCom',
          name: 'TabCom',
          component: TabCom
        },
        {
          path: '/Bar',
          name: 'Bar',
          component: Bar
        },
        {
          path: '/Dialog',
          name: 'Dialog',
          component: Dialog
        },
        {
          path: '/SelectList',
          name: 'SelectList',
          component: SelectList
        }]
    }
  ]
})
