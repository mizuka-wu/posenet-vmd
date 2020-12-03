// eslint-disable-next-line
import { MODEL_NAME_LENGTH, VERSION_BUFFER_LENGTH, UNIT, VERSION } from './const'
import BufferStream from './BufferStream'
import BoneFrame from './frame/BoneFrame'
import CameraFrame from './frame/CameraFrame'
import LightFrame from './frame/LightFrame'
import MorphFrame from './frame/MorphFrame'

export default class Vmd {
  /**
   * @param { ArrayBuffer } [buffer]
   */
  constructor (buffer) {
    /**
     * @type {string} 版本
     */
    this.version = VERSION.V2

    /**
     * @type {string} 当前使用的模型名字
     */
    this.modelName = ''

    /**
     * @type {BoneFrame[]} 骨骼关键帧
     */
    this.boneFrames = [] // 骨骼关键帧
    this.morphFrames = [] // 表情关键帧
    this.cameraFrames = [] // 镜头关键帧
    this.lightFrames = [] // 光线关键帧

    /**
     * 自动生成
     */
    if (buffer) {
      const stream = new BufferStream(buffer)
      this.version = stream.readBuffer(VERSION_BUFFER_LENGTH)
      this.modelName = stream.readBuffer(MODEL_NAME_LENGTH[this.version])
      // 需要按照顺序生成
      this.boneFrames = stream.readArray(BoneFrame)
      this.morphFrames = stream.readArray(MorphFrame)
      this.cameraFrames = stream.readArray(CameraFrame)
      this.lightFrames = stream.readArray(LightFrame)

      console.log(stream)
    }
  }
}
