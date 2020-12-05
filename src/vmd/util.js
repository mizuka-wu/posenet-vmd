const SHJIS_UTF_LABEL = 'shift_jis'

const encoder = new TextEncoder(SHJIS_UTF_LABEL)
const decoder = new TextDecoder(SHJIS_UTF_LABEL)

/**
 * 生成一个Array
 * @param {number} length
 * @param {number} [initValue]
 * @returns {number[]}
 */
export function generateArray (length, initValue = 0) {
  if (!length) {
    throw new Error('length is required')
  }
  return Array.from(new Array(length)).map(() => initValue)
}

/**
 * buffer转string
 * @param {ArrayBuffer} arrayBuffer
 */
export function buffer2string (arrayBuffer) {
  /**
   * 这里因为长度的问题，其实buffer里填充用的，需要过滤掉
   */
  const uint8Array = new Uint8Array(arrayBuffer)
  const emptyFillIndex = uint8Array.indexOf(0)
  const buffer = arrayBuffer.slice(0, emptyFillIndex === -1 ? undefined : emptyFillIndex)
  const text = decoder.decode(buffer)

  return text
}

export function string2buffer (string) {
  return encoder.encode(string)
}
