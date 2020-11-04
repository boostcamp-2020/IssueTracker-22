const request = require('supertest');
const app = require('../../app');

describe('Label API', () => {
  test('GET /labels', async (done) => {
    const res = await request(app).get('/labels');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.content).toHaveProperty('labels');
    done();
  });
});
