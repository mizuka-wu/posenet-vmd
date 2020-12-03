export default class MorphFrame {
  /**
   * @param {import('../BufferStream').default} stream
   */
  constructor (stream) {
    return stream.readBuffer(23, false)
  }
}
