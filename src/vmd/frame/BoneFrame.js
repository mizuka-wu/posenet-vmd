import { TYPE } from '../const'
import { generateArray } from '../util'
export default class BoneFrame {
  /**
   * @param {import('../BufferStream').default} [stream]
   */
  constructor (stream) {
    /**
     * 骨骼名称 BoneName
     * byte*15(ShiftJIS)
     */
    this.boneName = ''
    /**
     * 关键帧时间 FrameTime
     * uint32_t
     */
    this.frameTime = 0
    /**
     * x,y,z空间坐标 Translation.xyz
     * float*3
     */
    this.translation = generateArray(3)
    /**
     * 旋转四元数x,y,z,w Rotation.xyzw
     * float*4
     */
    this.rotation = generateArray(4)
    /**
     * 补间曲线x的坐标 XCurve
     * uint8_t*16
     */
    this.curveX = generateArray(16)
    /**
     * 补间曲线y的坐标 YCurve
     * uint8_t*16
     */
    this.curveY = generateArray(16)
    /**
     * 补间曲线z的坐标 ZCurve
     * uint8_t*16
     */
    this.curveZ = generateArray(16)
    /**
     * 补间曲线旋转的坐标 RCurve
     * uint8_t*16
     */
    this.curveR = generateArray(16)

    if (stream) {
      this.boneName = stream.readString(15)
      this.frameTime = stream.readInt()
      this.translation = stream.readArrayByType(3, TYPE.float)
      this.rotation = stream.readArrayByType(4, TYPE.float)
      this.curveX = stream.readArrayByType(16, TYPE.uint8_t)
      this.curveY = stream.readArrayByType(16, TYPE.uint8_t)
      this.curveZ = stream.readArrayByType(16, TYPE.uint8_t)
      this.curveR = stream.readArrayByType(16, TYPE.uint8_t)
    }
  }
}
