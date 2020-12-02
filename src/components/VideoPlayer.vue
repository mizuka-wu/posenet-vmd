<template>
  <div class="player">
    <div class="control">
      <button @click="openUserMedia">使用摄像头</button>
      <input
        @change="uploadVideo"
        accept="video/mp4"
        ref="input"
        type="file"
      />
    </div>
    <video
      loop
      ref="video"
      style="display: none;"
    />
    <canvas ref="pose"></canvas>
    <canvas
      ref="canvas"
      style="z-index: -1;"
    ></canvas>
  </div>
</template>

<script>
function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
  ctx.beginPath();
  ctx.moveTo(ax * scale, ay * scale);
  ctx.lineTo(bx * scale, by * scale);
  ctx.lineWidth = 4;
  ctx.strokeStyle = color;
  ctx.stroke();
}
function toTuple({y, x}) {
  return [y, x];
}
export default {
    name: 'VideoPlayer',
    props: {
        pose: {
            type: Array
        }
    },
    data() {
        return {
            camera: null
        }
    },
    methods: {
        /**
         * 录制视频
         */
        record() {
            const { video, canvas } = this.$refs
            if (!video || !canvas || video.ended) {
                return
            }

            const context = canvas.getContext("2d");
            context.drawImage(video, 0, 0, canvas.width, canvas.height)
            this.$emit('loadeddata', canvas)

            requestAnimationFrame(() => {
                this.record()
            })
        },
        startRecord(media) {
            const video = this.$refs.video
            video.defaultMuted = false
            video.src = null
            video.srcObject = null
            video.pause()

            video[typeof media === 'object' ? 'srcObject' : 'src'] = media
            video.play()
            this.record()
        },
        /**
         * 重制按钮状态
         */
        resetSource() {
            this.$refs.input.value = ''
                        if (this.camera) {
                this.camera.stop()
                this.camera = null
            }
        },
        /**
         * 打开文件
         */
        uploadVideo() {
            const file = this.$refs.input.files[0]
            this.resetSource()
            if (!file) {
                return
            }
                const url = URL.createObjectURL(file);
                this.startRecord(url)
        },
        /**
         * 打开摄像头
         */
        openUserMedia() {
            if (!navigator.mediaDevices) {
                alert('不支持使用摄像头')
            }

            this.resetSource()

            navigator.mediaDevices.getUserMedia({
                video: { width: 1920, height: 1080 }
            })
            .then(mediaStream => {
                this.camera = mediaStream.getTracks()[0]
                this.startRecord(mediaStream)
            })
            .catch(e => {
                console.error(e)
                alert('未开启摄像头')
            })
        }
    },
    watch: {
        pose(pose) {
            const poseCanvas = this.$refs.pose
            if (!poseCanvas) {
                return
            }
            const context = poseCanvas.getContext('2d')
                    context.clearRect(0,0,poseCanvas.width,poseCanvas.height);
            if (!pose) {
                return
            }
            // 画骨骼
  pose.forEach((keypoints) => {
    drawSegment(
        toTuple(keypoints[0].position), toTuple(keypoints[1].position), '#67C23A',
        1, context);
  });
        }
    },
}
</script>
<style scoped>
.player {
  display: flex;
  flex-direction: column;
  height: 520px;
  position: relative;
}
canvas,
video {
  width: 960px;
  height: 480px;
  position: absolute;
  bottom: 0;
}
</style>