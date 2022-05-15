const Person = require('./06.person');

describe('test para person', () => {
  let person;
  /** ARRANGE /GIVEN */
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('should return down', () => {
    /** ARRANGE /GIVEN */
    person.weight = 45;
    /** ACT / WHEN */
    const imc = person.calcIMC();
    /** ASSERT / THEN  */
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
