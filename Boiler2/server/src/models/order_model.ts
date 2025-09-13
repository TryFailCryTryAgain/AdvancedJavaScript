import mongoose, { Schema, model, Document } from "mongoose";

export interface Orders extends Document {
    user_id: string;
    order_id: string;
    created_at: Date;
}

const OrderSchema: Schema = new Schema<Orders>({
    user_id: { type: String, required: true },
    order_id: { type: String, required: true },
    created_at: { type: Date },
});

export const Order = model<Orders>('Orders', OrderSchema, 'Order');