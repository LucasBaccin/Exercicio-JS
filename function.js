/*
    3 + 5 + 6 + 9 = 23
    Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.
*/
function somaMultiplos(limite) {
    let soma = 0;

    for (let a = 1; a < limite; a++) {
        if (a % 5 === 0 || a % 7 === 0) {
            soma += a;
        }
    }

    return soma;
}


module.exports = { somaMultiplos }