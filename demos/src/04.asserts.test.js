// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  expect(data).toEqual({ name: 'nico' });
});

test('test obj', () => {
  const data = null;
  expect(data).toBeNull();
  /* un valor null puede ser definido */
  expect(data).toBeDefined();
});
