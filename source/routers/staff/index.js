import express from 'express';

import { get, post } from './route';

// Utils
import { limiter, validator, authenticate } from '../../helpers';

// Schemas
import { staffSchema } from '../../schemas';

const router = express.Router();

router.get('/', [ limiter(2, 1000 * 60), authenticate ], get);
router.post('/', [ validator(staffSchema) ], post);

export { router as staff };
