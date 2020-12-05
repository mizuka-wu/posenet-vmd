
export default class MorphFrame {
  /**
   * @param {import('../ReadBufferStream').default} stream
   */
  constructor (stream) {
    /**
     * 表情名称 MorphName
     * byte*15(ShiftJIS)
     */
    this.morphName = ''
    /**
     * 关键帧时间 FrameTime
     * uint32_t
     */
    this.frameTime = 0
    /**
     * 程度 Weight
     * float
     */
    this.weight = 0

    if (stream) {
      this.morphName = stream.readString(15)
      this.frameTime = stream.readInt()
      this.weight = stream.readFloat()
    }
  }
}
