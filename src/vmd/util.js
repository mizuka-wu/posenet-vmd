import { CODE } from './const'
const encoder = new TextEncoder(CODE)
const decoder = new TextDecoder(CODE)

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

export function readInt (buffer) {
  return Buffer.from(buffer).readUIntLE()
}

export function readFloat (buffer) {
  return Buffer.from(buffer).readFloatLE()
}
