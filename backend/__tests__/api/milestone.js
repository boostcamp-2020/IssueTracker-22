const request = require('supertest');
const app = require('../../app');

describe('Milestone API', () => {
  let agent;

  beforeAll(() => {
    agent = request(app);
  });

  test('GET /milestones', async (done) => {
    const res = await agent.get('/milestones');
    const { body } = res;
    expect(res.statusCode).toBe(200);
    expect(body.success).toBe(true);
    expect(body.content).toHaveProperty('milestones');
    expect(Array.isArray(body.content.milestones)).toBe(true);
    done();
  });

  test('POST /milestones', async (done) => {
    agent
      .post('/milestones')
      .send({ title: 'test', description: 'test', due_date: new Date() })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const { body } = res;
        expect(body.success).toBe(true);
        expect(body.content.id).not.toBeUndefined();
        done();
      });
  });
});
