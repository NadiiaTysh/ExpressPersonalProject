import express from 'express';

import { login } from './route';

const router = express.Router();
router.post('/auth/login', login);

export { router as auth };
