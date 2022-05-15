describe('set ', () => {
  beforeAll(() => {
    // en casos de necesitar un setup antes de cada prueba.
    // puede ser levantar una base de datos
  });

  afterAll(() => {
    // corre despues de todos los cosos de prueba
  });

  beforeEach(() => {
    // se ejecutan antes de cada caso de prueba
  });

  afterEach(() => {
    // se ejecutan despues de cada caso de prueba
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    expect(1).toBe(1);
  });
});
