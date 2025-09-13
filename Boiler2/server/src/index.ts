import express from "express";
import cors from "cors";
import mysql from 'mysql2/promise';
import OrderRouter from "./routes/order_routes";
import { connectToDatabase } from "./utils/databaseConnection";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/order", OrderRouter);

connectToDatabase();

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});

app.get("/status", (req, res) => {
  res.json({ status: mongoose.connection.readyState })
});

app.get("/", (req, res) => {
    res.json({ message: "Hello World!"});
});

