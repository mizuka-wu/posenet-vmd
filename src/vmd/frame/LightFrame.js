export default class LightFrame {
  /**
   * @param {import('../BufferStream').default} stream
   */
  constructor (stream) {
    return stream.readBuffer(28, false)
  }
}
