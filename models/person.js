const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name : String,
    age : {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef','waiter','manager'],
        required: true
    },
    salary: Number,
    mobile: Number,
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: String,
});

const person = mongoose.model("person",personSchema);
module.exports = person;