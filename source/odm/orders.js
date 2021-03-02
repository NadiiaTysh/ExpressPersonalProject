import mongoose from 'mongoose';

import { customers, products } from './';
import { uidValidator, pidValidator } from './helpers';
import { addHash as hashPlugin } from './helpers';

mongoose.plugin(hashPlugin, { unique: true });

const orderSchema = new mongoose.Schema(
    {
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
            min:      1,
        },
        comment: {
            type: String,
        },
    },
    {
        timestamps: { createdAt: 'created', updatedAt: 'modified' },
        toJSON:     { virtuals: true },
    },
);

orderSchema.path('uid').validate(uidValidator);
orderSchema.path('pid').validate(pidValidator);

orderSchema.virtual('product', {
    ref:          products,
    localField:   'pid',
    foreignField: '_id',
    justOne:      true,
});

orderSchema.virtual('customer', {
    ref:          customers,
    localField:   'uid',
    foreignField: '_id',
    justOne:      true,
});

export const orders = mongoose.model('orders', orderSchema);
