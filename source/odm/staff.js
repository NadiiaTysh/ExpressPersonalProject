import mongoose from 'mongoose';

import { base } from './base';

export const staff = base.discriminator(
    'staff',
    new mongoose.Schema({
        role: {
            type:     String,
            required: true,
        },
        disabled: Boolean,
    }),
);
