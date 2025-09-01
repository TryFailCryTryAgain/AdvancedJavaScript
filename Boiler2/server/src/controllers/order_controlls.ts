import { Request, Response } from "express";

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