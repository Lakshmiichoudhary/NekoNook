const express = require("express");
const connectDB = require("./utils/database")
const cookieParser = require("cookie-parser")

require("dotenv").config();
connectDB()
const PORT = process.env.PORT || 4040

// routes
const userRoute = require("./routes/userRouter");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/user",userRoute);


app.listen(PORT,()=>{
    console.log("connected")
})