const { mdc } = require('./mdc');
const { indiceMaior, indiceMenor } = require('./indice');
const {soma} = require('./function');

describe('mdc', () => {

    it('deve calcular o MDC de dois números', () => {
        const result = mdc(48, 81);
        expect(result).toBe(3);
        const result2 = mdc(48, 79);
        expect(result2).toBe(1);
        const result3 = mdc(15, 105);
        expect(result3).toBe(15);
    });

});

describe('indiceMaior e indiceMenor', () => {

    const { indiceMaior, indiceMenor } = require('./indice');

    it('deve encontrar o índice do maior valor', () => {
        expect(indiceMaior).toBe(2);
    });

    it('deve encontrar o índice do menor valor', () => {
        expect(indiceMenor).toBe(1);
    });

});

describe('soma', () => {

    it('deve calcular a soma de todos os múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(soma).toBe(156361);
    });
});