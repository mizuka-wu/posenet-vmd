import { CODE } from './const'
const encoder = new TextEncoder(CODE)
const decoder = new TextDecoder(CODE)

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
  return decoder.decode(arrayBuffer)
    .replace(/\0.*/, '')
}

export function string2buffer (string) {
  return encoder.encode(string)
}
