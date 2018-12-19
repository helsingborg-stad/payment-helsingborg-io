const express = require('express');
const router = express.Router();

router.use('/payment', require('./payment/api'));

module.exports = router;
