<template>
  <div>
    <button @click="openUserMedia">使用摄像头</button>
    <input
      @change="uploadVideo"
      accept="video/mp4"
      ref="input"
      type="file"
    />
    <video
      ref="video"
      style="display: none;"
    />
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
    name: 'VideoPlayer',
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
            if (video.ended) {
                return
            }

            const context = canvas.getContext("2d");
            context.drawImage(video, 0, 0, canvas.width, canvas.height)

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
    }
}
</script>