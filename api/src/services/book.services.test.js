const { generateManyBooks } = require('../fakes/book.fake');
const BookServices = require('./books.service');

const mockGetAll = jest.fn();

/* const MongoLibStub = {
  getAll: spyGetAll,
  create: () => {},
}; */

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('testing for bookservices', () => {
  let service;
  beforeEach(() => {
    service = new BookServices();
    jest.clearAllMocks();
  });
  describe('testing for getBooks', () => {
    test('should return a list of books', async () => {
      // arrange
      // return a direct value, (not a promise)
      // mockGetAll.mockReturnValue(fakeBooks);
      // este valor si retorna una promesa
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      const books = await service.getBooks({});
      // assert
      expect(books.length).toBe(20);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
