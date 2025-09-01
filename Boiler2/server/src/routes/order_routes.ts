import express from "express";
import { Request, Response } from "express";
import { getResult } from "../controllers/order_controlls";

const OrderRouter = express.Router();

OrderRouter.get("/", getResult);

export default OrderRouter;