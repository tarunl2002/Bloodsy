const router = require('express').Router();
let Doner = require('../models/doner.model');

router.route('/').get((req, res) => {
    Doner.find()
        .then(doners => res.json(doners))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const donername = req.body.donername;

    const newDoner = new Doner({donername});

    newDoner.save()
        .then(() => res.json('Doner added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;