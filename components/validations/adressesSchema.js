'use strict';

const Joi = require('joi');
const globalSchema = require('./globalSchema');

module.exports = Joi.object().keys({
    CountryCode: globalSchema.countryCode,
    GovernmentId: globalSchema.governmentId
});
