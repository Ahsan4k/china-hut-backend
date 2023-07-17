import express, { Request, Response } from "express";

const router = express.Router();
const {
  Register,
  Login,
  Forgot,
  verifyNumber,
  Logout,
} = require("../controllers/authControllers");

router.route("/signup").post(Register);
router.route("/login").patch(Login);
router.route("/forgotpassword").patch(Forgot);
router.route("/verify").post(verifyNumber);
router.route("/logout").delete(Logout);
router.get("/get", (req:Request, res:Response) => {
  res.send("Success");
});

module.exports = router;