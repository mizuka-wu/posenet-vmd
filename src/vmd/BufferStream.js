import { buffer2string } from './util'
import { TYPE } from './const'
export default class BufferStream {
  /**
   * arrayBuffer
   * @param {ArrayBuffer} [buffer]
   */
  constructor (buffer) {
    this.buffer = buffer || new ArrayBuffer(0)
    this.index = 0
  }

  /**
   * 获取数组
   * @param {*} Constructor
   * @returns {*[]}
   */
  readArray (Constructor) {
    const totalNumber = this.readInt()
    const result = []

    for (let i = 0; i < totalNumber; i++) {
      const data = new Constructor(this)
      result.push(data)
    }

    return result
  }

  /**
   * 读取指定字节的数据
   * @param {*} length
   */
  readBytes (length = 0) {
    if (typeof length !== 'number') {
      throw new Error('readBytes failed, place check arg')
    }

    if (length <= 0) {
      return ''
    }

    if (this.index + length > this.buffer.byteLength) {
      throw new Error(`Stackoverflow ${this.index + length} / ${this.buffer.byteLength}`)
    }

    const buffer = this.buffer.slice(this.index, this.index + length)
    this.index = length + this.index
    return buffer
  }

  /**
   * 读取uint32_t
   * @returns number
   */
  readInt () {
    return this.readBytesByType(TYPE.uint32_t)
  }

  /**
   * 读取float
   * @returns number
   */
  readFloat () {
    return this.readBytesByType(TYPE.float)
  }

  /**
   * 读取文字
   * @param {number} [length]
   * @returns {string}
   */
  readString (length = 0) {
    const buffer = this.readBytes(length)
    return buffer2string(buffer)
  }

  /**
   * 读取并格式化为具体类型
   * @param { Uint16ArrayConstructor | Uint32ArrayConstructor | Uint8ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor } Type
   * @returns { number }
   */
  readBytesByType (Type, offset = 0, littleEndian = true) {
    const buffer = this.readBytes(Type.BYTES_PER_ELEMENT, false)
    const view = new DataView(buffer, 0)
    const method = `get${Type.name.replace('Array', '')}`
    return view[method](offset, littleEndian)
  }

  /**
   * 获取剩余的bytes
   */
  get restBytes () {
    return this.buffer.byteLength - this.index
  }
}
