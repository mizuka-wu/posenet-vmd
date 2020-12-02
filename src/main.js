import Vue from 'vue'
import App from './App.vue'
import Vmd from './vmd'

fetch('/models/mmd/vmds/test.vmd', {

})
  .then(res => res.blob())
  .then(blob => blob.arrayBuffer())
  .then((data) => {
    const vmd = new Vmd(data)
    console.log(vmd)
  })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
