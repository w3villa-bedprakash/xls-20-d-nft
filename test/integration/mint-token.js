var assert = require('assert');
const request = require('supertest');
const app = require('../../app')
describe('GET /api/slx-20-d/test', function () {
    it('Adds a task', function (done) {
        // Use supertest to run assertions for our API
        request(app)
            .post('/api/slx-20-d/test')
            .send({ title: "API testing rocks!" })
            .expect(201, done);
    });
});