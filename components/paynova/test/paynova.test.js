process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const assert = require('assert');

chai.use(chaiHttp);

describe('Basic Mocha String Test', function () {
    it('should return number of charachters in a string', function () {
        assert.strictEqual('Hello'.length, 5);
    });
    it('should return first charachter of the string', function () {
        assert.strictEqual('Hello'.charAt(0), 'H');
    });
});
