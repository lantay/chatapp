// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire' // this is acting funny

Vue.config.productionTip = false

Vue.use(VueFire) // this is acting funny not registering with Code

/* eslint-disable no-new | adding comment to stage a commit */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
