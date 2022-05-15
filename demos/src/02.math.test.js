const { sum, multiply, divide } = require('./02.math');

/** normalmente cada function tiene que tener su porpio set de pruebas
 */
describe('test for math', () => {
  describe('test for sum', () => {
    test('add 1 +3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe('test for multiply', () => {
    test('multiply 1 * 4 should be 4', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  });

  describe('test for divide', () => {
    test('divide 4 / 1 should be 4', () => {
      const rta = divide(4, 1);
      expect(rta).toBe(4);
    });
  });
});
