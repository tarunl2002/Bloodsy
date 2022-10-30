const router = require('express').Router();
let Blood  = require('../models/blood.model');

router.route('/').get((req, res) => {
    Blood.find()
        .then(bloods => res.json(bloods))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const donername = req.body.donername;
    const group = req.body.group;
    const date = Date.parse(req.body.date);

    const newBlood = new Blood({
        donername,
        group,
        date,
    });

    newBlood.save()
        .then(() => res.json('Blood added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Blood.findById(req.params.id)
    .then(bloods => res.json(bloods))
    .catch(err => res.status(400).json('Error: ' + err));    
});

router.route('/:id').delete((req, res) => {
    Blood.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blood deleted'))
    .catch(err => res.status(400).json('Error: ' + err));    
});

router.route('update/:id').post((req, res) => {
    Blood.findById(req.params.id)
    .then(bloods => {
        bloods.donername = req.body.donername;
        bloods.group = req.body.group;
        bloods.date = Date.parse(req.body.date);

        bloods.save()
            .then(() => res.json('Blood Updated!'))
            .catch(err => res.status(400).json('Error: ' + err));    
        })

    
    .catch(err => res.status(400).json('Error: ' + err));    
})

module.exports = router;