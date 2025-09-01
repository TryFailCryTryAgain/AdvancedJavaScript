import express from "express";
import cors from "cors";
import OrderRouter from "./routes/order_routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/order", OrderRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.json({ message: "Hello World!"});
});

