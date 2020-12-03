import { buffer2string } from './util'
import { MODEL_NAME_LENGTH, UNIT } from './const'
/**
 * 解析vmd
 */
export default class Vmd {
  constructor (value) {
    if (!value || !(value instanceof ArrayBuffer)) {
      return this
    }
    this._buffer = value
    this._bufferIndex = 0

    this.version = this.readBuffer(30) // 版本
    this.name = this.readBuffer(MODEL_NAME_LENGTH[this.version], false)

    // 骨骼
    this.frameTime = this.readBufferByUnit(UNIT.FRAME_TIME)[0]
    this.frames = Array.from(new Array(this.frameTime)).map(() => this.readBuffer(111, false))
    // this.frames = Array.from(new Array(this.frameTime)).map(() => {
    //   const frame = {}

    //   frame.boneName = this.readBuffer(15)
    //   frame.translation = [this.readBufferByUnit(UNIT.FRAME_TRANSITION), this.readBufferByUnit(UNIT.FRAME_TRANSITION), this.readBufferByUnit(UNIT.FRAME_TRANSITION)]

    //   frame.rotation = [this.readBufferByUnit(UNIT.FRAME_ROTATION), this.readBufferByUnit(UNIT.FRAME_ROTATION), this.readBufferByUnit(UNIT.FRAME_ROTATION), this.readBufferByUnit(UNIT.FRAME_ROTATION)]

    //   frame.curve = [UNIT.FRAME_CURVE.map(UNIT => this.readBufferByUnit(UNIT)), UNIT.FRAME_CURVE.map(UNIT => this.readBufferByUnit(UNIT)), UNIT.FRAME_CURVE.map(UNIT => this.readBufferByUnit(UNIT)), UNIT.FRAME_CURVE.map(UNIT => this.readBufferByUnit(UNIT))]

    //   return frame
    // })

    // 表情
    this.morphKeyFrameTime = this.readBufferByUnit(Uint32Array)[0]
    this.morphKeyFrames = Array.from(new Array(this.morphKeyFrameTime)).map(() => this.readBuffer(23, false))

    // 镜头
    this.cameraKeyFrameTime = this.readBufferByUnit(Uint32Array)[0]
    this.cameraKeyFrames = Array.from(new Array(this.cameraKeyFrameTime)).map(() => this.readBuffer(61, false))

    // 光线
    this.lightKeyFrameTime = this.readBufferByUnit(Uint32Array)[0]
    this.lightKeyFrames = Array.from(new Array(this.lightKeyFrameTime)).map(() => this.readBuffer(28, false))
  }

  readBuffer (length = 0, readAsString = true) {
    if (length <= 0) {
      return ''
    }

    const buffer = this._buffer.slice(this._bufferIndex, this._bufferIndex + length)
    this._bufferIndex = length + this._bufferIndex
    return readAsString ? buffer2string(buffer) : buffer
  }

  /**
   * 读取并格式化为具体类型
   * @param { Uint16ArrayConstructor | Uint32ArrayConstructor | Uint8ArrayConstructor } Unit
   * @returns { Uint16Array | Uint32Array | Uint8Array }
   */
  readBufferByUnit (Unit) {
    const buffer = this.readBuffer(Unit.BYTES_PER_ELEMENT, false)
    return new Unit(buffer)
  }
}
