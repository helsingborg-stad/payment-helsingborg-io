module.exports = {
    '/addresses': require('./adressesSchema'),
    '/options': require('./optionsSchema'),
    '/orders/create': require('./ordersCreateSchema'),
    '/orders/:orderid/authorizePayment': require('./adressesSchema'),
    '/orders/:orderid/initializePayment': require('./initializePaymentSchema'),
    '/orders/finalizePayment': require('./finalizePaymentSchema')
};
