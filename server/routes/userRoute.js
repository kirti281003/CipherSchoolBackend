const express=require("express");
const { register, login, updateUser, getUser, updatepassword } = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/auth");
const router=express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update/:id").post(isAuthenticated,updateUser);
router.route("/user/:id").get(isAuthenticated,getUser);
router.route("/user/updatePassword").post(isAuthenticated,updatepassword);
module.exports=router;