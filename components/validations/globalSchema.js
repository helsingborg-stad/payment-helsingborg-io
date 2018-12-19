const Joi = require('joi');

const countryCode = Joi.string().min(2).max(2).required();
const totalAmount = Joi.number().required();
const currencyCode = Joi.string().min(3).max(3).required();
const governmentId = Joi.string().regex(/^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/).required();
const name = Joi.string().min(1).max(50).allow('');
const telephone = Joi.string().allow('');
const paymentChannelId = Joi.number().required();

const nameObject = Joi.object().keys({
    CompanyName: name,
    Title: Joi.string().min(1).max(10),
    FirstName: name,
    MiddleNames: Joi.string().min(1).max(100),
    LastName: name,
    Suffix: Joi.string().min(1).max(10)
});

const adressObject = Joi.object().keys({
    CompanyName: name,
    Title: Joi.string().min(1).max(10),
    FirstName: name,
    MiddleNames: Joi.string().min(1).max(100),
    LastName: name,
    Suffix: Joi.string().min(1).max(10)
});

const nameAndAddress = Joi.object().keys({
    nameObject,
    adressObject
});

const lineItem = Joi.object().keys({
    Id: Joi.number().required(),
    ArticleNumber: Joi.string().min(1).max(50).required(),
    Name: Joi.string().min(1).max(255).required(),
    Description: Joi.string().min(1).max(255),
    ProductUrl: Joi.string(),
    Quantity: Joi.number().required(),
    UnitMeasure: Joi.string().required(),
    UnitAmountExcludingTax: Joi.number().required(),
    TaxPercent: Joi.number().required(),
    TotalLineTaxAmount: Joi.number().required(),
    TotalLineAmount: Joi.number().required()
});

const lineItems = Joi.array().items(lineItem);

module.exports = {
    countryCode,
    totalAmount,
    currencyCode,
    governmentId,
    name,
    telephone,
    paymentChannelId,
    nameAndAddress,
    lineItems
};
