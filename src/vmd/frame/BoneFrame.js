export default class BoneFrame {
  /**
   * @param {import('../BufferStream').default} [stream]
   */
  constructor (stream) {
    this.boneName = ''
    this.frameTime = 0
    this.translation = [0, 0, 0]
    this.rotation = [0, 0, 0, 0]
    this.curveX = [0, 0, 0, 0]
    this.curveY = [0, 0, 0, 0]
    this.curveZ = [0, 0, 0, 0]
    this.curveR = [0, 0, 0, 0]

    if (stream) {
      this.boneName = stream.readBytes(15)
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
