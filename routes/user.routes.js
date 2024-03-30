import db from "../database/db.js";
import { Router } from "express";
import express from "express";
import { assignTasks, login, register } from "../controller/user.controller.js";

const router = Router();

router.use(express.urlencoded({ extended: true }));

router.get("/login", (req, res) => {
  res.render("login.ejs");
});
router.post("/login", login);
router.post("/register", register);
router.post("/trips", assignTasks);

db.connect();

export default router;
