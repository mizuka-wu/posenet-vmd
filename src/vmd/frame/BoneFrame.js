export default class BoneFrame {
  /**
   * @param {import('../BufferStream').default} [stream]
   */
  constructor (stream) {
    /**
     * 骨骼名称 BoneName
     */
    this.boneName = ''
    /**
     * 关键帧时间 FrameTime
     */
    this.frameTime = 0
    /**
     * x,y,z空间坐标 Translation.xyz
     */
    this.translation = [0, 0, 0]
    /**
     * 旋转四元数x,y,z,w Rotation.xyzw
     */
    this.rotation = [0, 0, 0, 0]
    /**
     * 补间曲线x的坐标 XCurve
     */
    this.curveX = [0, 0, 0, 0]
    /**
     * 补间曲线y的坐标 YCurve
     */
    this.curveY = [0, 0, 0, 0]
    /**
     * 补间曲线z的坐标 ZCurve
     */
    this.curveZ = [0, 0, 0, 0]
    /**
     * 补间曲线旋转的坐标 RCurve
     */
    this.curveR = [0, 0, 0, 0]

    if (stream) {
      this.boneName = stream.readString(15)
      this.frameTime = stream.readInt()
      this.translation = this.translation.map(() => stream.readFloat())
      this.rotation = this.rotation.map(() => stream.readFloat())
      this.curveX = this.curveX.map(() => stream.readFloat())
      this.curveY = this.curveY.map(() => stream.readFloat())
      this.curveZ = this.curveZ.map(() => stream.readFloat())
      this.curveR = this.curveR.map(() => stream.readFloat())
    }
  }
}
