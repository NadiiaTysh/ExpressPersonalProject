import mongoose from 'mongoose';

import { customers, products } from './';
import { uidValidator, pidValidator } from './helpers';
import { addHash as hashPlugin } from './helpers';

mongoose.plugin(hashPlugin, { unique: true });

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
