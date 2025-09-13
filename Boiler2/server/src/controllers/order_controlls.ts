import { Request, Response } from "express";
import { Order } from "../models/order_model";

export const getResult = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = FindResult();
        res.json(result);
    } catch (err) {
        res.status(500).json({message: "Error"});
    }
}

function FindResult() {
    return { 
        randomNumber: Math.random(),
        message: "Order data retrieved successfully",
        timestamp: new Date().toISOString()
    };
}

export const InsertOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user_id, order_id } = req.body;

        if (!user_id) {
            res.status(400).json({ user_id: "user_id is required! "});
            return;
        }
        if (!order_id) {
            res.status(400).json({ message: "order_id is required! "});
            return;
        }

        const order = await Order.findOne({ order_id });
        if (order) {
            res.status(403).json({ message: "This order has already been registered once! "});
            return;
        }
        
        const newOrder = new Order({ 
            user_id: user_id, 
            order_id: order_id, 
            created_at: new Date(), 
        });
        await newOrder.save();

        res.status(201).json(newOrder);        

    } catch (err) {
        res.status(500).json({ message: "Failed to insert the order! "});
    }
}