import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { customers, products } from './';
import { uidValidator, pidValidator } from './validators';

const orderSchema = new mongoose.Schema({
    uid: {
        type:     mongoose.SchemaTypes.ObjectId,
        required: true,
        ref:      customers,
    },
    pid: {
        type:     mongoose.SchemaTypes.ObjectId,
        required: true,
        ref:      products,
    },
    hash: {
        type:     String,
        required: true,
        unique:   true,
        default:  uuidv4,
    },
    count: {
        type:     Number,
        required: true,
    },
    comment: {
        type: String,
    },
}, { timestamps: { createdAt: 'created', updatedAt: 'modified' } });

orderSchema.path('uid').validate(uidValidator);
orderSchema.path('pid').validate(pidValidator);

export const orders = mongoose.model('orders', orderSchema);
