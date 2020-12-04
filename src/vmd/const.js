/**
 * 一些配置
 */
export const CODE = 'shift_jis'

export const VERSION = {
  V1: 'Vocaloid Motion Data file',
  V2: 'Vocaloid Motion Data 0002'
}

export const VERSION_BUFFER_LENGTH = 30

export const MODEL_NAME_LENGTH = {
  [VERSION.V1]: 10,
  [VERSION.V2]: 20
}

export const INT_LENGTH = 4
export const FLOAT_LENGTH = 4

export const TYPE = {
  int8_t: Int8Array,
  uint8_t: Uint8Array,
  int16_t: Int16Array,
  uint16_t: Uint16Array,
  int32_t: Int32Array,
  uint32_t: Uint32Array,
  float: Float32Array,
  double: Float64Array
}
