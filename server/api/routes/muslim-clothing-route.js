import express from "express";
import { getAllClothing } from "../controllers/muslim-clothing-controller.js";

const router = express.Router();

router.get("/get-all-clothing", getAllClothing); // Get all data muslim clothing in database

export default router;
