import express, { Request, Response } from "express";

const router = express.Router();
const {
    MenuCreate,MenuUpdate,MenuDelete
} = require("../controllers/menuControllers");

router.route("/create").post(MenuCreate);
router.route("/update").put(MenuUpdate);
router.route("/delete/:id").delete(MenuDelete); 

module.exports = router;