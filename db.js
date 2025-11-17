const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/hotel");

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mngodb server");
})
module.exports = db;