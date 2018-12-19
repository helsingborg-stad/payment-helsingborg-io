const router = require('express').Router();
const paynova = require('./dal');
const SchemaValidator = require('../middlewares/schemaValidators');

const validateRequest = SchemaValidator(true);

router.post('/addresses', validateRequest, async (req, res) => {
    try {
        const response = await paynova.addresses(req.body);

        return res.json(
            response
        );
    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

router.post('/options', validateRequest, async (req, res) => {
    try {
        const response = await paynova.paymentOptions(req.body);

        return res.json(
            response
        );
    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

router.post('/orders/create', validateRequest, async (req, res) => {
    try {
        const response = await paynova.createOrder(req.body);

        return res.json(
            response
        );
    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

router.post('/orders/:orderid/initializePayment', validateRequest, async (req, res) => {
    try {
        const response = await paynova.initializePayment(req.params.orderid, req.body);

        return res.json(
            response
        );
    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

router.post('/orders/:orderid/authorizePayment', validateRequest, async (req, res) => {
    try {
        const response = await paynova.authorizePayment(req.params.orderid, req.body);

        return res.json(
            response
        );
    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

router.post('/orders/finalizePayment', validateRequest, async (req, res) => {
    try {
        const response = await paynova.finalizePayment(req.params.orderid, req.body);

        return res.json(
            response
        );
    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

module.exports = router;
