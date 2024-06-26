const userModel = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const salt = 10;

const generateToken = (user) => {
    return jwt.sign({ email : user.email, id : user._id},process.env.JWT_KEY)
}

exports.registerUser = async (req,res) => {
    try{
        //console.log(req.body)
        const { name, email, password } = req.body

        let userExist = await userModel.findOne({ email : email})
        if(userExist) return res.status(401).send("you alreay have an account")

        const hashedPassword = await bcrypt.hash(password, salt);
        let user = await userModel.create({
            name,
            email,
            password: hashedPassword,
        })
        let token = generateToken(user)
        res.cookie("token",token)
        res.status(201).json({ message: "User created successfully", token });
    }catch(error){
        res.status(500).json({ message: "Failed to create user",error : error.message });
    }
}

exports.loginUser = async (req,res) => {
    try{
        const { email, password } = req.body;

        let user = await userModel.findOne({ email : email})
        if(!user) return res.status(401).send("Invalid email and password")
        
        const matchPassword = await bcrypt.compare(password,user.password);
        if(!matchPassword) return res.status(401).send("Invalid email or password");

        let token = generateToken(user);
        res.cookie("token",token);
        res.status(200).json({ message: "Login successful", token });
    }catch(error){
        res.status(500).json({ message: "Failed to login user", error: error.message });
    }
}