const { somaMultiplos } = require('../../function');

describe('Soma dos múltiplos de 5 ou 7', () => {

    it('Deve calcular a soma dos múltiplos abaixo de 10', () => {
        expect(somaMultiplos(10)).to.equal(12);
    });

    it('Deve calcular a soma dos múltiplos abaixo de 20', () => {
        expect(somaMultiplos(20)).to.equal(51);
    });

    it('Deve retornar zero quando não houver múltiplos', () => {
        expect(somaMultiplos(5)).to.equal(0);
    });

    it('Deve calcular a soma dos múltiplos abaixo de 1000', () => {
        expect(somaMultiplos(1000)).to.equal(156361);
    });

});