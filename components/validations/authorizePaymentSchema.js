'use strict';

const Joi = require('joi');
const globalSchema = require('./globalSchema');

module.exports = Joi.object().keys({
    AuthorizationType: Joi.string().required(),
    TotalAmount: globalSchema.totalAmount,
    ProfilePaymentOptions: Joi.object().keys({
        ProfileId: Joi.string().required()
    })
});
