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

describe('POST /api/slx-20-d/token-mint', function () {
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


describe('POST /api/slx-20-d/create-sell-offer', function () {
    it('create sell offer', function (done) {
        request(app)
            .post('/api/slx-20-d/create-sell-offer')
            .send({
                "secretKey": "spvu1gbcn5tbmPszsFvH28mvNeMVQ",
                "tokenId": "000100002D644F1C21276B10D7BFFF1C1DD8F064672F980016E5DA9C00000001",
                "amount": "2000000"
            })
            .expect(201, done);
    });
});

describe('GET /api/slx-20-d/get-sell-offer/000100002D644F1C21276B10D7BFFF1C1DD8F064672F980016E5DA9C00000001', function () {
    it('get sell offers', function (done) {
        request(app)
            .get('/api/slx-20-d/get-sell-offer/000100002D644F1C21276B10D7BFFF1C1DD8F064672F980016E5DA9C00000001')
            .expect(200, done);
    });
});


describe('POST /api/slx-20-d/create-buy-offer', function () {
    it('create buy offer', function (done) {
        request(app)
            .post('/api/slx-20-d/create-buy-offer')
            .send({
                "secretKey": "spvu1gbcn5tbmPszsFvH28mvNeMVQ",
                "tokenId": "000100002D644F1C21276B10D7BFFF1C1DD8F064672F980016E5DA9C00000001",
                "amount": "2000000",
                "owner": "rn9r2Nn7AGn7GdyPfqWqkZxKZzHdqKUG1R"
            })
            .expect(201, done);
    });
});

describe('GET /api/slx-20-d/get-buy-offer/000100002D644F1C21276B10D7BFFF1C1DD8F064672F980016E5DA9C00000001', function () {
    it('get buy offers', function (done) {
        request(app)
            .get('/api/slx-20-d/get-buy-offer/000100002D644F1C21276B10D7BFFF1C1DD8F064672F980016E5DA9C00000001')
            .expect(200, done);
    });
});


describe('DELETE /api/slx-20-d/burn-token', function () {
    it('burn token', function (done) {
        request(app)
            .delete('/api/slx-20-d/burn-token')
            .send({
                "secretKey": "spvu1gbcn5tbmPszsFvH28mvNeMVQ",
                "tokenId": "000100002D644F1C21276B10D7BFFF1C1DD8F064672F980016E5DA9C00000001"
            })
            .expect(200, done);
    });
});