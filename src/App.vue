<template>
  <div id="app">
    <VideoPlayer :pose="currentPose" @loadeddata="calculate" />
    <MmdPlayer :pose="currentPose" />
    <input type="file" @change="change" />
  </div>
</template>

<script>
import posenet, { getAdjacentKeyPoints } from './posenet'
import VideoPlayer from './components/VideoPlayer'
import MmdPlayer from './components/MmdPlayer'

export default {
  name: 'App',
  components: {
    VideoPlayer,
    MmdPlayer
  },
  data () {
    return {
      net: null,
      currentPose: null,
      poses: []
    }
  },
  methods: {
    change (e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = function () {
        console.log(reader.result)
      }
      reader.readAsBinaryString(file)
    },
    async calculate (image) {
      if (!this.net) return
      const pose = await this.net.estimateSinglePose(image, {
        flipHorizontal: false
      })
      this.poses.push(pose)
      this.currentPose = getAdjacentKeyPoints(pose)
      if (this.poses.length > 100) {
        this.poses.splice(0)
      }
    }
  },
  async created () {
    const net = await posenet()
    this.net = net
  }
}
</script>
