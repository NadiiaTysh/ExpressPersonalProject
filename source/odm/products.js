import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuidv4';

const productSchema = new mongoose.Schema({
    hash: {
        type:     String,
        required: true,
        unique:   true,
        default:  uuidv4,
    },
    title: {
        type:     String,
        required: true,
    },
    description: String,
    price:       {
        type:     Number,
        required: true,
        min:      0,
    },
    discount: {
        type: Number,
        min:  0,
        max:  50,
    },
    total: {
        type:     Number,
        required: true,
    },
}, { timestamps: { createdAt: 'created', updatedAt: 'modified' } });

export const products = mongoose.model('products', productSchema);
