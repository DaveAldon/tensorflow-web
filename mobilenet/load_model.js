import * as tf from '@tensorflow/tfjs';

//const model = await tf.loadLayersModel('file:///Users/davidcrawford/Documents/tensorflow-web/output_converter_model/model.json');


export const load_model = async () => {
    const model = await tf.loadGraphModel('https://gist.githubusercontent.com/DaveAldon/d383f20b1148b15c3bba7c93aabbae9c/raw/583b5a568d1ae858f97af4231830d04f43156bb4/model.json');

    const result = model.predict(tf.tensor("hello"))
    console.log(result);
}