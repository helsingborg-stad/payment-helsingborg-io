'use strict';

const Joi = require('joi');
const globalSchema = require('./globalSchema');

module.exports = Joi.object().keys({
    TransactionId: Joi.string().required(),
    TotalAmount: globalSchema.totalAmount
});
