const request = require('supertest');
const app = require('../../app');

describe('Issue API', () => {
  let agent;

  beforeAll(() => {
    agent = request(app);
  });

  test('GET /issues', async (done) => {
    const res = await agent.get('/issues');
    const { body } = res;
    expect(res.statusCode).toBe(200);
    expect(body.success).toBe(true);
    expect(body.content).toHaveProperty('issues');
    expect(Array.isArray(body.content.issues)).toBe(true);
    done();
  });
});
