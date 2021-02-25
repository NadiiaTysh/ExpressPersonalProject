import mongoose from 'mongoose';

import { base } from './base';

export const customers = base.discriminator(
    'customers',
    new mongoose.Schema({
        city: {
            type:   String,
            sparse: true,
            text:   true,
        },
        country: {
            type:   String,
            sparse: true,
            text:   true,
        },
    }),
);
