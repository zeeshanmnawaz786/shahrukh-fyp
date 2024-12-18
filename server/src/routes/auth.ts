import express from "express";
import {
  getAllUsers,
  loginUser,
  registerUser,
} from "../controllers/controllers";
let router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getAllUsers", getAllUsers);

export default router;
