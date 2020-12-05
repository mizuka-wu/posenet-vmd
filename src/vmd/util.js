import { CODE } from './const'
const encoder = new TextEncoder(CODE)
const decoder = new TextDecoder(CODE)
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
  return _decoder.decode(arrayBuffer)
}

export function string2buffer (string, isAscii = false) {
  const _encoder = isAscii ? asciiEncoder : encoder
  return _encoder.encode(string)
}
