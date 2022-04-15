var assert = require('assert');
const request = require('supertest');
const app = require('../../app')


describe('GET /api/slx-20-d/get-tokens/rn9r2Nn7AGn7GdyPfqWqkZxKZzHdqKUG1R', function () {
    it('get minted tokens', function (done) {
        request(app)
            .get('/api/slx-20-d/get-tokens/rn9r2Nn7AGn7GdyPfqWqkZxKZzHdqKUG1R')
            .expect(200, done);
    });
});