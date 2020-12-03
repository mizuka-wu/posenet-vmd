import { readFloat, readInt, buffer2string } from './util'
export default class BufferStream {
  constructor (buffer) {
    this.buffer = buffer || new ArrayBuffer(0)
    this.index = 0
  }

  /**
   *
   * @param {} Constructor
   */
  readArray (Constructor) {}

  readBuffer (length = 0, readAsString = true) {
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
    const buffer = this.readBuffer(4)
    return readInt(buffer)
  }

  readFloat () {
    const buffer = this.readBuffer(4)
    return readFloat(buffer)
  }

  /**
   * 读取并格式化为具体类型
   * @param { Uint16ArrayConstructor | Uint32ArrayConstructor | Uint8ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor } Unit
   * @returns { number }
   */
  readBufferByUnit (Unit) {
    const buffer = this.readBuffer(Unit.BYTES_PER_ELEMENT, false)
    const view = new DataView(buffer, 0)
    const method = `get${Unit.name.replace('Array', '')}`
    return view[method]()
  }
}