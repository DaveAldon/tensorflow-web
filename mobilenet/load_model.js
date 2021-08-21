import * as tf from '@tensorflow/tfjs';

//const model = await tf.loadLayersModel('file:///Users/davidcrawford/Documents/tensorflow-web/output_converter_model/model.json');


export const load_model = async () => {
    const model = await tf.loadGraphModel('https://raw.githubusercontent.com/DaveAldon/tensorflow-web/master/output_converter_model/model.json');

    const result = model.predict(tf.tensor("hello"))
    console.log(result);
}