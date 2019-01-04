'use strict';

const Joi = require('joi');
const globalSchema = require('./globalSchema');

module.exports = Joi.object().keys({
    TotalAmount: globalSchema.totalAmount,
    CurrencyCode: globalSchema.currencyCode,
    PaymentChannelId: globalSchema.paymentChannelId,
    CountryCode: globalSchema.countryCode,
    LanguageCode: Joi.string().min(3).max(3).required()
});
