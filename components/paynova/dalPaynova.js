/* eslint-disable no-undef */
const axios = require('axios');

exports.addresses = async (countryCode, pno) => {
    const response = await client.get(process.env.PAYNOVA_API_URL + `/addresses/${countryCode}/${pno}`);
    console.log('addresses', response.data);
    return handleResponse(response);
};

exports.paymentOptions = async (payload) => {
    const response = await client.post(process.env.PAYNOVA_API_URL + '/paymentoptions/', payload);
    console.log('paymentoptions', response.data);
    return handleResponse(response);
};

handleResponse = (resp) => {
    if (!resp.data) {
        return {
            status: 400,
            message: 'Request was not succesful.'
        };
    }

    if (resp.data.status.isSuccess) {
        return resp.data;
    } else {
        return {
            status: 400,
            message: `${resp.data.status.errorNumber} - ${resp.data.status.statusKey} - ${resp.data.status.statusMessage}`
        };
    }
};

const client = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    auth: {
        username: process.env.PAYNOVA_MERCHANT_ID,
        password: process.env.PAYNOVA_API_PASSWORD
    },
    timeout: 5000
});
