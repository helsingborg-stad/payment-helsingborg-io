'use strict';

const Joi = require('joi');
const globalSchema = require('./globalSchema');

module.exports = Joi.object().keys({
    OrderNumber: Joi.string().min(4).max(50).required(),
    TotalAmount: globalSchema.totalAmount,
    CurrencyCode: globalSchema.currencyCode,
    Customer: Joi.object().keys({
        CustomerId: Joi.string().allow(''),
        GovernmentId: globalSchema.governmentId,
        EmailAddress: Joi.string().email(),
        TaxIdentificationNumber: Joi.string().min(14).max(14),
        Name: Joi.object().keys({
            CompanyName: globalSchema.name,
            Title: Joi.string().min(1).max(10),
            FirstName: globalSchema.name,
            MiddleNames: Joi.string().min(1).max(100),
            LastName: globalSchema.name,
            Suffix: Joi.string().min(1).max(10)
        }),
        HomeTelephone: globalSchema.telephone,
        WorkTelephone: globalSchema.telephone,
        MobileTelephone: globalSchema.telephone
    }),
    BillTo: globalSchema.nameAndAddress,
    ShipTo: globalSchema.nameAndAddress,
    LineItems: globalSchema.lineItems,
    OrderDescription: Joi.string().min(1).max(255),
    PurchaseReference: Joi.string().min(30).max(30)
});
