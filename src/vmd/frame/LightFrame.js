export default class LightFrame {
  /**
   * @param {import('../BufferStream').default} stream
   */
  constructor (stream) {
    return stream.readBytes(28, false)
  }
}
