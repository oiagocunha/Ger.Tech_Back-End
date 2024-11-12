const operacoes = require('../operacoesController')

// ------------------------- SOMA ------------------------- //

test ('3 + 2 o resultado será 5', () => {
    const resultado = 5;
    expect(operacoes.soma(2,3)).toBe(resultado)
})

test ('27 + 10 terá o resultado 37', () => {
    const resultado = 37;
    expect(operacoes.soma(10,27)).toBe(resultado)
})

test ('81 + 61 terá o resultado 142', () => {
    const resultado = 142;
    expect(operacoes.soma(61,81)).toBe(resultado)
})

// ------------------------- SUBTRAÇÃO ------------------------- //

test ('3 - 2 o resultado será 1', () => {
    const resultado = 1;
    expect(operacoes.sub(3,2)).toBe(resultado)
})

test ('27 - 10 terá o resultado 17', () => {
    const resultado = 17;
    expect(operacoes.sub(27,10)).toBe(resultado)
})

test ('81 - 61 terá o resultado 20', () => {
    const resultado = 20;
    expect(operacoes.sub(81,61)).toBe(resultado)
})

// ------------------------- MULTIPLICAÇÃO ------------------------- //

test ('3 * 2 o resultado será 6', () => {
    const resultado = 6;
    expect(operacoes.mult(3,2)).toBe(resultado)
})

test ('27 * 10 terá o resultado 270', () => {
    const resultado = 270;
    expect(operacoes.mult(27,10)).toBe(resultado)
})

test ('81 * 61 terá o resultado 4941', () => {
    const resultado = 4941;
    expect(operacoes.mult(81,61)).toBe(resultado)
})

// ------------------------- DIVISÃO ------------------------- //

test ('4 / 2 o resultado será 2', () => {
    const resultado = 2;
    expect(operacoes.divi(4,2)).toBe(resultado)
})

test ('30 / 10 terá o resultado 3', () => {
    const resultado = 3;
    expect(operacoes.divi(30,10)).toBe(resultado)
})

test ('80 / 10 terá o resultado 8', () => {
    const resultado = 8;
    expect(operacoes.divi(80,10)).toBe(resultado)
})
