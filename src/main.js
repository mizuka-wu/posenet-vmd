import Vue from 'vue'
import App from './App.vue'
import Vmd from 'vmd.js'

fetch('/models/mmd/vmds/test.vmd', {

})
  .then(res => res.blob())
  .then(blob => blob.arrayBuffer())
  .then((data) => {
    const vmd = new Vmd(data)
    window.vmd = vmd
    const arrayBuffer = vmd.write()
    const url = URL.createObjectURL(new Blob([arrayBuffer]))
    window.vmdUrl = url

    new Vue({
      render: h => h(App)
    }).$mount('#app')
  })

Vue.config.productionTip = false
