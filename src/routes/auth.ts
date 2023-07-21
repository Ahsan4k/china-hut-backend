const express = require("express")
const router = express.Router();

router.route("/signup").post(Register);
router.route("/login").patch(Login);
router.route("/forgotpassword").patch(Forgot);
router.route("/verify").post(verifyNumber);
router.route("/logout").delete(Logout);
router.get("/get", (req:any, res:any) => {
  res.send("Success");
});

module.exports = router;