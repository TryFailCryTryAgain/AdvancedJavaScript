import express from "express";
import { Request, Response } from "express";
import { getResult, InsertOrder } from "../controllers/order_controlls";

const OrderRouter = express.Router();

OrderRouter.get("/", getResult);
OrderRouter.post("/", InsertOrder);

export default OrderRouter;