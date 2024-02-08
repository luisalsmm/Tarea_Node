// mocha.test.js

const { sumar } = require('./app');
const assert = require('assert');

describe('Operaciones', () => {
  describe('sumar', () => {
    it('debería sumar dos números correctamente', () => {
      const resultado = sumar(2, 3);
      assert.strictEqual(resultado, 5);
    });

    it('debería sumar números negativos correctamente', () => {
      const resultado = sumar(-2, -3);
      assert.strictEqual(resultado, -5);
    });

    it('debería devolver un número si se suma con cero', () => {
      const resultado = sumar(5, 0);
      assert.strictEqual(resultado, 5);
    });
  });
});
