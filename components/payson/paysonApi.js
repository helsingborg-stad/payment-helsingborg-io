const router = require('express').Router();
const payson = require('./dalPayson');

router.get('/', async (req, res) => {
    try {
        const response = await payson.get();

        return res.json(
            response
        );
    } catch (err) {
        console.log('err', err);
        res.json(err);
    }
});

module.exports = router;
