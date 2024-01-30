const mongoose = require("mongoose");
const express = require("express");

app= express();
port = 3000;
app.listen(port,()=>{`server is running on ${port}`});

mongoose.connect("mongodb://localhost:27017/Node").then(()=>{
    console.log("connected successfully");
}).catch((error)=>
    console.log(error));


