import express from "express";
import { getAllSocieties, societyRegister } from "../controllers/controllers";

let router = express.Router();

router.post("/societyRegister", societyRegister);
router.get("/getAllSocieties", getAllSocieties);

export default router;
