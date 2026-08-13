/*  
    Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
*/
function encontrarIndices(num) {

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let a = 1; a < num.length; a++) {
        if (num[a] > num[indiceMaior]) {
            indiceMaior = a;
        }

        if (num[a] < num[indiceMenor]) {
            indiceMenor = a;
        }
    }
        return {
            indiceMaior,
            indiceMenor
        }
}

    module.exports = { encontrarIndices }