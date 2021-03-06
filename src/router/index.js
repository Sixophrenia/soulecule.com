import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
Vue.use(Router)

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
Vue.use(VueMaterial)
/*
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
Vue.use(Buefy)*/

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
