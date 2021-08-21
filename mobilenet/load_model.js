import * as tf from '@tensorflow/tfjs';
//const model = await tf.loadLayersModel('file:///Users/davidcrawford/Documents/tensorflow-web/output_converter_model/model.json');


export const load_model = async () => {
    const model = await tf.loadGraphModel('https://raw.githubusercontent.com/DaveAldon/tensorflow-web/master/output_converter_model/model.json');

    const sequence_length = 100
    let seed = "hello"
    let s = seed
    const n_chars = 10;
    let generated = "";

    /* const p = await model.executeAsync(
        { 'lstm_input' : tf.zeros([1, 100, 10]) },
        [ 'dense'])
        tf.print(p) */

    for (let i in [...Array(n_chars).keys()]) {
         const X = tf.zeros([1, 100, 10], 'float32')
        for (const [index, element] of seed.split('').entries()) {
            X[0, (sequence_length - seed.length) + index, element.charCodeAt(0)] = 1;
        } 
        //const predicted = await model.executeAsync(tf.zeros([1, 100, 10]))
        //const predicted = model.predict(tf.zeros([1, 100, 10]));
        const predicted = await model.executeAsync(X);

        console.log("OUT:",predicted[1])
        /* const predicted = await model.executeAsync(
        { 'lstm_input' : tf.zeros([1, 100, 10]) },
        [ 'dense']) */

        //const next_index = tf.argMax(predicted)
        const next_char = String.fromCharCode(predicted)
        //console.log("next:",predicted)
        generated += next_char
        seed = seed.slice(1) + next_char
    }

    console.log("generated:",generated, s)


    /* const inputData = tf.tensor(sample_text, [1, 3]);
    const predictions = model.predict(inputData)
    console.log(predictions); */
}