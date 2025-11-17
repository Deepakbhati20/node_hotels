const express = require("express");
const app = express();
const db = require("./db");
const personRoute = require("./routes/personRoute")
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

const port = 3000;
app.listen(port,(req,res)=>{
   console.log("server running at port",port);
})

app.get("/",(req,res)=>{
    res.send("hi");
})

app.use("/person",personRoute);