const { mdc } = require('../../mdc');

describe('Cálculo do Máximo Divisor Comum', () => {

    it('Deve calcular o MDC entre 48 e 81', () => {
        expect(mdc(48, 81)).to.equal(3);
    });

    it('Deve retornar 1 para números coprimos', () => {
        expect(mdc(48, 79)).to.equal(1);
    });

    it('Deve calcular o MDC entre 15 e 105', () => {
        expect(mdc(15, 105)).to.equal(15);
    });

    it('Deve retornar o próprio número quando ambos forem iguais', () => {
        expect(mdc(20, 20)).to.equal(20);
    });

});