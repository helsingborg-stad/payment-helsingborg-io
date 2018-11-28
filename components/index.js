const express = require('express');
const router = express.Router();

router.use('/payment', require('./payment/paymentApi'));

module.exports = router;
