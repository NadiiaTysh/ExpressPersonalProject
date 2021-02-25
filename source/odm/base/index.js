import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const baseSchema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
            default:  uuidv4,
        },
        name: {
            first: {
                type:     String,
                required: true,
            },
            last: {
                type:     String,
                required: true,
            },
        },
        emails: [
            {
                email: {
                    type:     String,
                    unique:   true,
                    required: true,
                },
                primary: Boolean,
            },
        ],
        phones: [
            {
                phone: {
                    type:     String,
                    unique:   true,
                    required: true,
                },
                primary: Boolean,
            },
        ],
        password: {
            type:     String,
            select:   false,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

baseSchema.index({ 'name.first': 1, 'name.last': 1 });
baseSchema.index({ 'name.first': 'text', description: 'name.first' });
baseSchema.index({ 'name.last': 'text', description: 'name.last' });

export const base = mongoose.model('users', baseSchema);
