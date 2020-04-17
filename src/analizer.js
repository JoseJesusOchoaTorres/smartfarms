import * as tf from '@tensorflow/tfjs';
// import * as tfd from '@tensorflow/tfjs-data';

async function loadModel () {
  const model = await tf.loadLayersModel('/model/model.json')
  const layer = model.getLayer('activation_5')

  return tf.model({ inputs: model.inputs, outputs: layer.output })
}

async function init (imgs) {
  const model = await loadModel() // tf.loadLayersModel('/model/model.json')

  let responses = []

  imgs.forEach( img => {
    const example = tf.browser.fromPixels(img).resizeBilinear([150,150]) // for example
    example.shape = [1, ...example.shape]

    const prediction = model.predict(example, { batch_size: 10 })

    responses.push({ img, prediction})
    console.log(img)
    console.table(prediction)
  })
  return responses
}

export { init }
