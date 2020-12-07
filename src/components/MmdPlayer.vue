<template>
  <div></div>
</template>

<script>
import * as THREE from 'three'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader'
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper.js'
import { createPose } from '../util'

const modelFile = '/models/mmd/miku/miku_v2.pmd'

const clock = new THREE.Clock()

export default {
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      loader: null,
      animationHelper: null,
      pose: createPose()
    }
  },
  methods: {
    animate () {
      requestAnimationFrame(this.animate)
      this.animationHelper.update(clock.getDelta())
      this.renderer.render(this.scene, this.camera)
      this.loadPose()
    },
    loadPose () {
      if (this.mesh) {
        this.animationHelper.pose(this.mesh, this.pose)
      }
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
    this.loader.load(modelFile, (mesh) => {
      this.mesh = mesh
      this.mesh.position.y = -10
      this.scene.add(this.mesh)
    })
  }
}
</script>

<style>
</style>
