import { pool } from "../config/db.js";

// Get all data muslim clothing in database
export const getAllClothing = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM muslim_clothing");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
