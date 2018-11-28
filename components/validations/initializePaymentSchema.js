'use strict';

const Joi = require('joi');
const globalSchema = require('./globalSchema');

module.exports = Joi.object().keys({
    OrderId: Joi.string().required(),
    TotalAmount: globalSchema.totalAmount,
    PaymentChannelId: globalSchema.paymentChannelId,
    PaymentMethods: Joi.array().items(
        Joi.object().keys({
            Id: Joi.number().required()
        })
    ),
    InterfaceOptions: Joi.object().keys({
        InterfaceId: Joi.number().required(),
        LayoutName: Joi.string(),
        CustomerLanguageCode: Joi.string().min(3).max(3).required(),
        UrlRedirectSuccess: Joi.string().required(),
        UrlRedirectCancel: Joi.string().required(),
        UrlRedirectPending: Joi.string().required()
    })
});
