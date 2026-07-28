/*  
    Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
*/

const num = [15, 2, 346, 52, 8];

let indiceMaior = 0
let indiceMenor = 0

for (let a = 1; a < num.length; a++){
    if (num[a] > num[indiceMaior]){
        indiceMaior = a;
    }

    if (num[a] < num[indiceMenor]){
        indiceMenor = a
    }
}

console.log('Índice do maior número:', indiceMaior)
console.log('Índice do menor número:', indiceMenor)

module.exports = {indiceMaior, indiceMenor}