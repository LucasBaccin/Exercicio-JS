const { encontrarIndices } = require('../../indice');

describe('Índices do maior e menor número', () => {

    it('Deve encontrar os índices no array original', () => {
        const resultado = encontrarIndices([15, 2, 346, 52, 8]);

        expect(resultado.indiceMaior).to.equal(2);
        expect(resultado.indiceMenor).to.equal(1);
    });

    it('Deve funcionar com números negativos', () => {
        const resultado = encontrarIndices([-10, -5, -30, -1]);

        expect(resultado.indiceMaior).to.equal(3);
        expect(resultado.indiceMenor).to.equal(2);
    });

    it('Deve funcionar quando o array possui apenas um elemento', () => {
        const resultado = encontrarIndices([42]);

        expect(resultado.indiceMaior).to.equal(0);
        expect(resultado.indiceMenor).to.equal(0);
    });

});