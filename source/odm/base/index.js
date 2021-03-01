import mongoose from 'mongoose';

import { addHash as hashPlugin } from '../helpers';

mongoose.plugin(hashPlugin, { unique: true });

const baseSchema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
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
        discriminatorKey: 't',
    },
);

baseSchema.index({ 'name.first': 1, 'name.last': 1 });
baseSchema.index({ 'name.first': 'text', description: 'name.first' });
baseSchema.index({ 'name.last': 'text', description: 'name.last' });

export const base = mongoose.model('users', baseSchema);
