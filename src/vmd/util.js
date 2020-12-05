const encoder = new TextEncoder('shift_jis')
const decoder = new TextDecoder('shift_jis')
const asciiEncoder = new TextEncoder('ascii')
const asciiDecoder = new TextDecoder('ascii')

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
export function buffer2string (arrayBuffer, isAscii = false) {
  const _decoder = isAscii ? asciiDecoder : decoder
  const text = _decoder.decode(arrayBuffer)

  // const encodedBuffer = string2buffer(text).buffer
  // console.log(arrayBuffer, encodedBuffer)

  return text
}

export function string2buffer (string, isAscii = false) {
  const _encoder = isAscii ? asciiEncoder : encoder
  return _encoder.encode(string)
}
