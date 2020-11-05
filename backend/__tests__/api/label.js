const request = require('supertest');
const app = require('../../app');

describe('Label API', () => {
  let agent;

  beforeAll(() => {
    agent = request(app);
  });

  test('GET /labels', async (done) => {
    const res = await agent.get('/labels');
    const { body } = res;
    expect(res.statusCode).toBe(200);
    expect(body.success).toBe(true);
    expect(body.content).toHaveProperty('labels');
    expect(Array.isArray(body.content.labels)).toBe(true);
    done();
  });
});
