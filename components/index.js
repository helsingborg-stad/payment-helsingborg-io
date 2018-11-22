const express = require('express');
const router = express.Router();

router.use('/payment', require('./paynova/paynovaApi'));

module.exports = router;
