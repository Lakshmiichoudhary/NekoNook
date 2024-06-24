const express = require("express")
const userController = require("../controller/user-controller")

const router = express.Router()

router.post("/signup",userController.resisterUser);
router.post("/login",userController.loginUser);

module.exports = router