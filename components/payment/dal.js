/* eslint-disable no-undef */
const axios = require('axios');

exports.addresses = async (requestData) => {
    const response = await client.get(process.env.PAYNOVA_API_URL + `/addresses/${requestData.countryCode}/${requestData.GovernmentId}`);
    console.log('addresses', response.data);
    return handleResponse(response);
};

exports.paymentOptions = async (requestData) => {
    const response = await client.post(process.env.PAYNOVA_API_URL + '/paymentoptions/', requestData);
    // console.log('paymentoptions', response.data);
    return handleResponse(response);
};

exports.createOrder = async (requestData) => {
    const response = await client.post(process.env.PAYNOVA_API_URL + '/orders/create/', requestData);
    return handleResponse(response);
};

exports.initializePayment = async (orderId, requestData) => {
    const response = await client.post(process.env.PAYNOVA_API_URL + `/orders/${orderId}/initializePayment`, requestData);
    // console.log('initializePayment', response.data);
    return handleResponse(response);
};

exports.authorizePayment = async (orderId, requestData) => {
    const response = await client.post(process.env.PAYNOVA_API_URL + `/orders/${orderId}/authorizePayment`, requestData);
    // console.log('authorizePayment', response.data);
    return handleResponse(response);
};

exports.finalizePayment = async (orderId, requestData) => {
    let finalizeEndpoint = '';

    if (requestData.method === 'orderId') {
        finalizeEndpoint = `/orders/${orderId}/transactions/${transactionId}/finalize/${totalAmount}`;
    } else {
        finalizeEndpoint = `/transactions/${transactionId}/finalize/${totalAmount}`;
    }

    const response = await client.post(process.env.PAYNOVA_API_URL + finalizeEndpoint, requestData);
    // console.log('finalizePayment', response.data);
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
            message: `${resp.data.status.errorNumber} - ${resp.data.status.statusKey} - ${resp.data.status.statusMessage}`,
            errors: resp.data.status.errors
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
