import { TYPE } from '../const'
export default class LightFrame {
  /**
   * @param {import('../BufferStream').default} stream
   */
  constructor (stream) {
    /**
     * 关键帧时间 FrameTime
     * uint32_t
     */
    this.frameTime = 0
    /**
     * RGB颜色空间 color.rgb
     * float*3
     */
    this.rgb = [0, 0, 0]
    /**
     * xyz投射方向 Direction.xyz
     * float*3
     */
    this.direction = [0, 0, 0]

    if (stream) {
      this.frameTime = stream.readInt()
      this.rgb = stream.readArrayByType(3, TYPE.float)
      this.direction = stream.readArrayByType(3, TYPE.float)
    }
  }
}
