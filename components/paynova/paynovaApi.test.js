/* eslint-disable no-unused-expressions */
process.env.NODE_ENV = 'test';
require('dotenv').config({ path: './.env.test' });

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const server = require('../../app');

chai.use(chaiHttp);

describe('Server', () => {
    after((done) => {
        server.close();
        done();
    });

    it('should list ALL options on /options POST', (done) => {
        chai.request(server)
            .post('/payment/options')
            .send({
                'TotalAmount': 500,
                'CurrencyCode': 'SEK',
                'PaymentChannelId': 1,
                'CountryCode': 'SE',
                'LanguageCode': 'SWE'
            })
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(200);
                res.should.be.json;
                should.exist(res.body);
                res.body.status.isSuccess.should.equal(true);
                done();
            });
    });
});
