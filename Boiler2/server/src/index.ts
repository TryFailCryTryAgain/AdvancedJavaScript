import express from "express";
import cors from "cors";
import mysql from 'mysql2/promise';
import OrderRouter from "./routes/order_routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

async function createConnection() {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

app.use("/order", OrderRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.json({ message: "Hello World!"});
});

