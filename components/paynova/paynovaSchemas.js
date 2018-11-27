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

const adressesSchema = Joi.object().keys({
    CountryCode: countryCode,
    GovernmentId: governmentId
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

const optionsSchema = Joi.object().keys({
    TotalAmount: totalAmount,
    CurrencyCode: currencyCode,
    PaymentChannelId: paymentChannelId,
    CountryCode: countryCode,
    LanguageCode: Joi.string().min(3).max(3).required()
});

const ordersCreateSchema = Joi.object().keys({
    OrderNumber: Joi.string().min(4).max(50).required(),
    TotalAmount: totalAmount,
    CurrencyCode: currencyCode,
    Customer: Joi.object().keys({
        CustomerId: Joi.string().allow(''),
        GovernmentId: governmentId,
        EmailAddress: Joi.string().email(),
        TaxIdentificationNumber: Joi.string().min(14).max(14),
        Name: Joi.object().keys({
            CompanyName: name,
            Title: Joi.string().min(1).max(10),
            FirstName: name,
            MiddleNames: Joi.string().min(1).max(100),
            LastName: name,
            Suffix: Joi.string().min(1).max(10)
        }),
        HomeTelephone: telephone,
        WorkTelephone: telephone,
        MobileTelephone: telephone
    }),
    BillTo: nameAndAddress,
    ShipTo: nameAndAddress,
    LineItems: lineItems,
    OrderDescription: Joi.string().min(1).max(255),
    PurchaseReference: Joi.string().min(30).max(30)
});

const authorizePaymentSchema = Joi.object().keys({
    AuthorizationType: Joi.string().required(),
    TotalAmount: totalAmount,
    ProfilePaymentOptions: Joi.object().keys({
        ProfileId: Joi.string().required()
    })
});

const initializePaymentSchema = Joi.object().keys({
    OrderId: Joi.string().required(),
    TotalAmount: totalAmount,
    PaymentChannelId: paymentChannelId,
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

module.exports = {
    '/addresses': adressesSchema,
    '/options': optionsSchema,
    '/orders/create': ordersCreateSchema,
    '/orders/:orderid/authorizePayment': authorizePaymentSchema,
    '/orders/:orderid/initializePayment': initializePaymentSchema
};
