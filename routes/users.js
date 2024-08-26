import express from "express";
const router = express.Router();
import { User } from "../model/User.js";

/* GET users listing. */
router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

router.post("/", async (req, res) => {
  const user = new User(req.body); //user document of User Model
  await user.save();
  res.status(201).send("user has been added")
});

export default router;
