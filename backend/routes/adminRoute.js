const express = require("express");
const adminController = require("../controller/admin-controller");

const route = express.Router();

route.post("/login",adminController.loginAdmin);
adminController.createAdmin()

module.exports = route;