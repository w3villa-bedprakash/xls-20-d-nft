var assert = require('assert');
const request = require('supertest');
const app = require('../../app')
describe('GET /api/slx-20-d/get-balance/rn9r2Nn7AGn7GdyPfqWqkZxKZzHdqKUG1R', function () {
    it('Get balance', function (done) {
        request(app)
            .get('/api/slx-20-d/get-balance/rn9r2Nn7AGn7GdyPfqWqkZxKZzHdqKUG1R')
            .expect(200, done);
    });
});

describe('GET /api/slx-20-d/get-tokens/rn9r2Nn7AGn7GdyPfqWqkZxKZzHdqKUG1R', function () {
    it('get minted tokens', function (done) {
        request(app)
            .get('/api/slx-20-d/get-tokens/rn9r2Nn7AGn7GdyPfqWqkZxKZzHdqKUG1R')
            .expect(200, done);
    });
});

describe('POST {{baseUrl}}/api/slx-20-d/token-mint', function () {
    it('mint a token', function (done) {
        request(app)
            .post('/api/slx-20-d/token-mint')
            .send({
                "secretKey": "spvu1gbcn5tbmPszsFvH28mvNeMVQ",
                "metadataUrl":"ipfs://QmdPMSfnxexxPb5AaKybWnL5sT37wfAhq8bnsTsAL7b8C3"
            })
            .expect(201, done);
    });
});