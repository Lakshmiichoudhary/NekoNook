const express = require("express");
const connectDB = require("./utils/database")

require("dotenv").config();
connectDB()

const app = express();


app.listen(3000,()=>{
    console.log("connected")
})