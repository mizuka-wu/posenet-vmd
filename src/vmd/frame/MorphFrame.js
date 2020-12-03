export default class MorphFrame {
  /**
   * @param {import('../BufferStream').default} stream
   */
  constructor (stream) {
    /**
     * 表情名称 MorphName
     */
    this.morphName = ''
    /**
     * 关键帧时间 FrameTime
     */
    this.frameTime = 0
    /**
     * 程度 Weight
     */
    this.weight = 0

    if (stream) {
      this.morphName = stream.readBytes(15)
      this.frameTime = stream.readInt()
      this.weight = stream.readFloat()
    }
  }
}
