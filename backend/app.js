require("dotenv").config();

const express = require("express");
const connectDB = require("./utils/database")
const cookieParser = require("cookie-parser")
const cors = require("cors")

connectDB()
const PORT = process.env.PORT || 4040

// routes
const userRoute = require("./routes/userRouter");

const app = express();

//console.log('MONGO_URI:', process.env.MONGO_URI)
//console.log('JWT_KEY:', process.env.JWT_KEY)

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173/",
    credentials: true 
}))

app.use("/user",userRoute);


app.listen(PORT,()=>{
    console.log("connected")
})