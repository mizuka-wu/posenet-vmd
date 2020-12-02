import '@tensorflow/tfjs'
import * as Posenet from '@tensorflow-models/posenet'

let net = null

export default async function () {
    if (!net) {
        net = await Posenet.load({
            architecture: 'MobileNetV1',
            outputStride: 16,
            inputResolution: { width: 640, height: 480 },
            multiplier: 0.75
        })
    }

    return net
}