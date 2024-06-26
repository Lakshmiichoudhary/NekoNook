const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

const auth = async (req,res,next) => {
    if(!req.cookies.token) {
        res.status(400).send({ error: "You need to login first" })
    }

    try{
        let decoded = jwt.verify(res.cookies.token,process.env.JWT_KEY);
        let user = await userModel
            .findOne({ email : decoded.email })
            .select("-password");
        req.user = user;
        next();
    }catch(error){
        res.status(400).send({error : error.message})
    }
}

module.exports = auth;