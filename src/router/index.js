import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import start from '@/components/login&registered/start'
import findPassword1 from '@/components/login&registered/findPassword1'
import findPassword2 from '@/components/login&registered/findPassword2'
import findPassword3 from '@/components/login&registered/findPassword3'
import login from '@/components/login&registered/login'
import registered from '@/components/login&registered/registered'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/start',
      name: 'start',
      component: start
    },{
      path: '/findPassword1',
      name: 'findPassword1',
      component: findPassword1
    },{
      path: '/findPassword2',
      name: 'findPassword2',
      component: findPassword2
    },{
      path: '/findPassword3',
      name: 'findPassword3',
      component: findPassword3
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/registered',
      name: 'registered',
      component: registered
    }
  ]
})
