/**
 * 一些配置
 */
export const CODE = 'shift-jis'

export const VERSION = {
  V1: 'Vocaloid Motion Data file',
  V2: 'Vocaloid Motion Data 0002'
}

export const MODEL_NAME_LENGTH = {
  [VERSION.V1]: 10,
  [VERSION.V2]: 20
}

export const UNIT = {
  FRAME_TIME: Uint32Array, // 帧数
  FRAME_TRANSITION: Float32Array,
  FRAME_ROTATION: Float32Array,
  FRAME_CURVE: [Uint32Array, Uint32Array, Uint32Array, Uint32Array]
}
