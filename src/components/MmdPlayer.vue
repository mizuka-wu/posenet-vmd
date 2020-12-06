<template>
  <div></div>
</template>

<script>
import * as THREE from 'three'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader'
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper.js'

const modelFile = '/models/mmd/miku/miku_v2.pmd'
const vpdFiles = [
  'models/mmd/vpds/01.vpd',
  'models/mmd/vpds/02.vpd',
  'models/mmd/vpds/03.vpd',
  'models/mmd/vpds/04.vpd',
  'models/mmd/vpds/05.vpd',
  'models/mmd/vpds/06.vpd',
  'models/mmd/vpds/07.vpd',
  'models/mmd/vpds/10.vpd'
]

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
      poses: []
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
      if (this.poses.length > 0) {
        const index = Math.floor(Math.random() * (this.poses.length - 1))
        const pose = this.poses[index]
        if (pose) {
          this.animationHelper.pose(this.mesh, pose)
        } else {
          this.mesh.pose()
        }
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

      /**
       * 加载所有vpd
       */
      vpdFiles.forEach((file) => {
        this.loader.loadVPD(file, false, (pose) => {
          this.poses.push(pose)
        })
      })
    })
  }
}
</script>

<style>
</style>
