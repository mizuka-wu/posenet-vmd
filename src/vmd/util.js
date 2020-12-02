import { CODE } from './const'
const encoder = new TextEncoder(CODE)
const decoder = new TextDecoder(CODE)

export function buffer2string (arrayBuffer) {
  return decoder.decode(arrayBuffer).replaceAll('\0', '').replaceAll('\x00', '')
}

export function string2buffer (string) {
  return encoder.encode(string)
}
