<template>
  <div id="app">
    <VideoPlayer />
  </div>
</template>

<script>
import posenet from './posenet'
import VideoPlayer from './components/VideoPlayer'

export default {
  name: 'App',
  components: {
    VideoPlayer
  },
  async created() {
    const net = await posenet()
    console.log(net)
//     const pose = await net.estimateSinglePose(image, {
//   flipHorizontal: false
// });
// console.log(pose)
  }
}
</script>
