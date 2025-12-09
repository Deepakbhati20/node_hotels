require('dotenv').config();
const express = require("express");
const app = express();
const db = require("./db");
const personRoute = require("./routes/personRoute")
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port,(req,res)=>{
   console.log("server running at port",port);
})

const logrequest = (req,res,next)=>{
    console.log(`${new Date().toLocaleString()} request made to ${req.originalUrl}`);
    next();
}

app.use(logrequest);

app.get("/",(req,res)=>{
    res.send("hi");
})

app.use("/person",personRoute);