import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import TurnTransition from '@/components/TurnTransition'
import DynamicTransition from '@/components/DynamicTransition'
import StateAnimationAndListener from '@/components/StateAnimationAndListener'
import ColorInCss from '@/components/ColorInCss'
import Add from '@/components/Add'
import navigation from '@/components/navigation'
import editText from '@/components/editText'
import orderList from '@/components/orderList'
import searchPage from '@/components/searchPage'
import switchLayouts from '@/components/switchLayouts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/turn',
      name: 'TurnTransition',
      component: TurnTransition
    },
    {
      path: '/dynamic',
      name: 'DynamicTransition',
      component: DynamicTransition
    },
    {
      path: '/lister',
      name: 'StateAnimationAndListener',
      component: StateAnimationAndListener
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/css',
      name: 'ColorInCss',
      component: ColorInCss
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: navigation
    },
    {
      path: '/edit',
      name: 'editText',
      component: editText
    },
    {
      path: '/order',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/search',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/layout',
      name: 'switchLayouts',
      component: switchLayouts
    }
  ]
})
