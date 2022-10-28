const router = require('express').Router();
let Doner = require('../models/doner.model');

router.route('/').get((req, res) => {
    Doner.find()
    .then(doner => res.json(user))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
})