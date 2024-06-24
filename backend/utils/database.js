const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected ${connect.connection.host} `)
    }catch(err){
        console.error(`Error ${err.message}`);
        process.exit();
    }
}

module.exports = connectDB