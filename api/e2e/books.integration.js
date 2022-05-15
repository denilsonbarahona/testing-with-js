const request = require('supertest')
const { generateManyBooks } = require('../src/fakes/book.fake');

const mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));


const createApp = require('../src/app');

describe("test for books",()=>{
    let app = null
    let server = null;
    beforeAll(()=> {
        app = createApp();
        server = app.listen(3001);
    })

    afterAll(async()=>{
        await server.close();
    })

    describe("test for [get] /api/v1/books",()=>{
        test('should return a list of books', async()=>{
            //Arrange
            const fakeBooks = generateManyBooks(3);
            mockGetAll.mockResolvedValue(fakeBooks);
            // act
            return request(app)
            .get('/api/v1/books')
            .expect(200)
            .then(({body})=>{
                //assert
                expect(body.length).toEqual(3)
            })
        })
    })
})
