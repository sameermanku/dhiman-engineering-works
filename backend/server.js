require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 5000;

// Allow frontend access (CORS)
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Middleware
app.use(bodyParser.json());

// PostgreSQL Connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Handle Contact Form Submission
app.post("/contact", async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const result = await pool.query(
      "INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, subject, message]
    );

    console.log("Inserted Data:", result.rows[0]);
    res.json({ success: true, message: "Message successfully sent!", data: result.rows[0] });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
