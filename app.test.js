const { sumar } = require('./app');

test('Sumar 1 + 2 debe ser 3', () => {
    expect(sumar(1, 2)).toBe(3);
});

test('Sumar -1 + 1 debe ser 0', () => {
    expect(sumar(-1, 1)).toBe(0);
});

test('Sumar 0 + 0 debe ser 0', () => {
    expect(sumar(0, 0)).toBe(0);
});
