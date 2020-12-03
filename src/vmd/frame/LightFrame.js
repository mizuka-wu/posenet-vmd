export default class LightFrame {
  /**
   * @param {import('../BufferStream').default} stream
   */
  constructor (stream) {
    /**
     * 关键帧时间 FrameTime
     */
    this.frameTime = 0
    /**
     * RGB颜色空间 color.rgb
     */
    this.rgb = [0, 0, 0]
    /**
     * xyz投射方向 Direction.xyz
     */
    this.direction = [0, 0, 0]

    if (stream) {
      this.frameTime = stream.readInt()
      this.rgb = this.rgb.map(() => stream.readFloat())
      this.direction = this.direction.map(() => stream.readFloat())
    }
  }
}
