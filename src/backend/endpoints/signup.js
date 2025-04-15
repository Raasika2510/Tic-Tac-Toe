const express = require("express")
const signupController = require("../database/userController");

const router = express.Router();

router.post("/signup",signupController.createUser);
module.exports = router;