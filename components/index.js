const express = require('express');
const router = express.Router();

router.use('/payment', require('./payson/paysonApi'));

module.exports = router;
