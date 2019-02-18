const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);