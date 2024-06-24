const express = require("express");
const connectDB = require("./utils/database")

// routes
const userRoute = require("./routes/userRouter");

require("dotenv").config();
connectDB()

const app = express();

app.use("/user",userRoute);


app.listen(3000,()=>{
    console.log("connected")
})