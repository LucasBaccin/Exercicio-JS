/*
    Calcular o MDC (máximo divisor comum) entre dois números
    Os números escolhidos são: 48 e 81
    Sabesse que o MDC deles é 3
*/

function mdc(a, b){
    let divisor = Math.min(a, b);
    while (divisor > 0) {
        if (a % divisor === 0 && b % divisor === 0){
            return divisor;
        }

        divisor --
    }
}
console.log(mdc(48, 81));

console.log(mdc(48, 79)); //aqui como estamos com um número primo, esperamos que o retorno seja 1

console.log(mdc(15, 105));

module.exports = {mdc}