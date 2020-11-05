const request = require('supertest');
const app = require('../../app');

describe('Label API', () => {
  let agent;

  beforeAll(() => {
    agent = request(app);
  });

  test('GET /issues/:issue-number', async (done) => {
    const issueNumber = 1;
    const res = await agent.get(`/issue/${issueNumber}`);
    const { body } = res;
    expect(res.statusCode).toBe(200);
    expect(body.success).toBe(true);
    expect(body.content).toHaveProperty('labels');
    expect(body.content).toHaveProperty('milestone');
    expect(body.content).toHaveProperty('assignees');
    expect(body.content).toHaveProperty('isOpen');
    expect(body.content.isOpen).toBe(true);
    expect(body.content).toHaveProperty('comments');
    expect(Array.isArray(body.content.comments)).toBe(true);
    done();
  });
});
