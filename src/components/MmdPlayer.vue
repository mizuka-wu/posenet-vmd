<template>
  <div></div>
</template>

<script>
import * as THREE from 'three'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader'
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper.js'

const modelFile = '/models/mmd/miku/miku_v2.pmd'
const vmdFile = '/models/mmd/vmds/test.vmd'
const clock = new THREE.Clock()

export default {
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      loader: null,
      animationHelper: null
    }
  },
  methods: {
    animate () {
      requestAnimationFrame(this.animate)
      this.animationHelper.update(clock.getDelta())
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    this.loader = new MMDLoader()
    this.animationHelper = new MMDAnimationHelper({ afterglow: 2.0 })
    this.camera = new THREE.PerspectiveCamera(70, 960 / 480, 0.01, 100)
    this.camera.position.z = 30

    this.scene = new THREE.Scene()
    this.scene.color = '#ffffff'

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(960, 480)
    this.$el.appendChild(this.renderer.domElement)
    this.$nextTick(() => {
      this.animate()
    })
    /**
     * 加载mmd
     */

    this.loader.loadWithAnimation(modelFile, vmdFile, (mmd) => {
      this.mesh = mmd.mesh
      this.mesh.position.y = -10
      this.scene.add(this.mesh)
      this.animationHelper.add(this.mesh, {
        animation: mmd.animation,
        physics: true
      })
    })
  }
}
</script>

<style>
</style>
