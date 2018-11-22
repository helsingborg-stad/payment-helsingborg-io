/* eslint-disable no-undef */
const axios = require('axios');
const https = require('https');
const path = require('path');
var fs = require('fs');

exports.get = async () => {
    return 'hello world';
};

const client = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000
});
