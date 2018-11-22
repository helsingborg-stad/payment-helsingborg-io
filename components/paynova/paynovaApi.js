const router = require('express').Router();
const paynova = require('./dalPaynova');

router.post('/addresses', async (req, res) => {
    try {
        const { countryCode, pno } = req.body;

        const response = await paynova.addresses(countryCode, pno);

        return res.json(
            response
        );
    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

router.post('/options', async (req, res) => {
    try {
        const { totalAmount, currencyCode, paymentChannelId, countryCode, languageCode } = req.body;

        const response = await paynova.paymentOptions({
            totalAmount,
            currencyCode,
            paymentChannelId,
            countryCode,
            languageCode
        });

        return res.json(
            response
        );
    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

router.post('orders/create', async (req, res) => {
    try {

    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

module.exports = router;
