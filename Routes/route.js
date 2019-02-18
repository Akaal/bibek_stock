const express = require('express');
const router = express.Router();

const Employee = require('../Models/employee');

router.get('/', (req, res, next) => {
    Employee.find((err, employee) => {
        res.json(employee);
    });
});

router.post('/', (req, res, next) => {
    let newEmployee = new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newEmployee.save((err, employee) => {
        if (err) {
            res.json({status: 'Status Code', message: 'Data couldn\'t be saved'});
        } else {
            res.json({status: 200, message: 'Data saved successfully'});
        }
    });
});

router.delete('/:id', (req, res, next) => {
    Employee.remove({_id: req.param._id}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;