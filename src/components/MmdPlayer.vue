<template>
  <div></div>
</template>

<script>
import * as THREE from 'three';
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader';
				const modelFile = '/models/mmd/miku/miku_v2.pmd';
export default {
    data() {
        return {
            camera: null,
            scene: null,
            renderer: null,
            mesh: null,
        }
    },
    methods: {
        animate() {
            requestAnimationFrame(this.animate)
    this.renderer.render( this.scene, this.camera );
        }
    },
    mounted() {
    this.camera = new THREE.PerspectiveCamera( 70, 960 / 480, 0.01, 100 );
    this.camera.position.z = 30;
 
    this.scene = new THREE.Scene();
    this.scene.color = '#ffffff'

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( 960, 480 );
    this.$el.appendChild( this.renderer.domElement );
    this.$nextTick(() => {
        this.animate()
    })
    /**
     * 加载mmd
     */
    const loader = new MMDLoader()

    loader.load(modelFile, (mesh) => {
        this.mesh = mesh
        this.mesh.position.y = -10

        this.scene.add(this.mesh)
    })
    }
}
</script>

<style>
</style>