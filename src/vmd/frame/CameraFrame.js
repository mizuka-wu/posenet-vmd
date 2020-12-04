export default class CameraFrame {
  /**
   * @param {import('../BufferStream').default} stream
   */
  constructor (stream) {
    /**
     * 关键帧时间 FrameTime
     */
    this.frameTime = 0
    /**
     * 距离 Distance
     */
    this.distance = 0
    /**
     * x,y,z空间坐标 Position.xyz
     */
    this.position = [0, 0, 0]
    /**
     * 旋转角度（弧度制） Rotation.xyz
     */
    this.rotation = [0, 0, 0]
    /**
     * 相机曲线 Curve
     */
    this.curve = Array.from(new Array(24)).map(() => 0)
    /**
     * 镜头FOV角度 ViewAngle
     */
    this.viewAngle = 0
    /**
     * Orthographic相机
     */
    this.orthographic = 0

    if (stream) {
      this.frameTime = stream.readInt()
      this.distance = stream.readFloat()
      this.position = this.position.map(() => stream.readFloat())
      this.rotation = this.rotation.map(() => stream.readFloat())
      this.curve = this.curve.map(() => stream.readBytes(1))
      this.viewAngle = stream.readInt()
      this.orthographic = stream.readBytes(1)
    }
  }
}
