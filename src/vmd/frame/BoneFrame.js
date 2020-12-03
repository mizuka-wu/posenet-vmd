export default class BoneFrame {
  /**
   * @param {import('../BufferStream').default} stream
   */
  constructor (stream) {
    return stream.readBuffer(111, false)
  }
}
