import { readFloat, readInt, buffer2string } from './util'
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

  readBytes (length = 0, readAsString = true) {
    if (typeof length !== 'number') {
      throw new Error('readBytes failed, place check arg')
    }

    if (length <= 0) {
      return ''
    }

    if (this.index + length > this.buffer.byteLength) {
      throw new Error('Stackoverflow', this.index + length, this.buffer.byteLength)
    }

    const buffer = this.buffer.slice(this.index, this.index + length)
    this.index = length + this.index
    return readAsString ? buffer2string(buffer) : buffer
  }

  readInt () {
    const buffer = this.readBytes(4, false)
    return readInt(buffer)
  }

  readFloat () {
    const buffer = this.readBytes(4, false)
    return readFloat(buffer)
  }

  /**
   * 读取并格式化为具体类型
   * @param { Uint16ArrayConstructor | Uint32ArrayConstructor | Uint8ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor } Unit
   * @returns { number }
   */
  readBytesByUnit (Unit) {
    const buffer = this.readBytes(Unit.BYTES_PER_ELEMENT, false)
    const view = new DataView(buffer, 0)
    const method = `get${Unit.name.replace('Array', '')}`
    return view[method]()
  }

  get restBytes () {
    return this.buffer.byteLength - this.index
  }
}
