import Vue from 'vue'
import App from './App.vue'
import Vmd from './vmd'

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
    /**
     * 对比
     */
    const source = new Uint8Array(data)
    const target = new Uint8Array(arrayBuffer)
    console.log(source, target)
  })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
