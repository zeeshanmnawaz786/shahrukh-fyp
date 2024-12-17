import express from "express";
import { societyRegister } from "../controllers/controllers";

let router = express.Router();

router.post("/societyRegister", societyRegister);

export default router;
