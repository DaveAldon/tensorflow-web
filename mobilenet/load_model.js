import * as tf from '@tensorflow/tfjs';
//const model = await tf.loadLayersModel('file:///Users/davidcrawford/Documents/tensorflow-web/output_converter_model/model.json');


export const load_model = async () => {
    const model = await tf.loadGraphModel('https://raw.githubusercontent.com/DaveAldon/tensorflow-web/master/output_converter_model/model.json');

    const sample_text = ['The movie was cool. The animation and the graphics ','were out of this world. I would recommend this movie.', "sdfsd"]
    const sequence_length = 100
    const seed = "hello"
    const n_chars = 10;
    let generated = "";

    const p = await model.executeAsync(
        { 'lstm_input' : tf.zeros([1, 100, 10]) },
        [ 'dense'])
        tf.print(p)

    for (let i in [...Array(n_chars).keys()]) {
        const X = tf.zeros([1, 100, 10])
        console.log(X)
        for (const [index, element] of seed.split('').entries()) {
            X[0, (sequence_length - seed.length) + index, element.charCodeAt(0)] = 1;
        }
        const predicted = model.predict(X);
        //console.log(predicted)
    }



    /* const inputData = tf.tensor(sample_text, [1, 3]);
    const predictions = model.predict(inputData)
    console.log(predictions); */
}