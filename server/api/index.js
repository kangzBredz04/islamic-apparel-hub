import express from "express";
import cors from "cors";
import { pool } from "./config/db.js";
import { ClothingRoute } from "./routes/muslim-clothing-route.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/muslim-clothing", ClothingRoute); // Route data muslim clothing
app.use("/", );

// start
app.get("/api", (_req, res) => {
  res.send("Selamat Datang Di Website Islamic Apparel Hub");
});

// get all data clothes
app.get("/api/muslim_clothing", async (_req, res) => {
  const result = await pool.query("SELECT * FROM muslim_clothing");
  res.json(result.rows);
});

// add  data clothes
app.post("/api/muslim_clothing", async (req, res) => {
  const result = await pool.query(
    "INSERT INTO muslim_clothing (name, description, price, stock, category, size, color) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [
      req.body.name,
      req.body.description,
      req.body.price,
      0,
      req.body.category,
      req.body.size,
      req.body.color,
    ]
  );
  res.status(200).json({
    data: result.rows[0],
    message: "Data baju berhasil ditambahkan.",
  });
});

app.listen(3000, () => console.log("server is running..."));
