export default class CameraFrame {
  /**
   * @param {import('../BufferStream').default} stream
   */
  constructor (stream) {
    return stream.readBuffer(61, false)
  }
}
