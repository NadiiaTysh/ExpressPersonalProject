import express from 'express';

import { get, post } from './route';
import { getByHash, updateByHash, deleteByHash } from './hash';

// Utils
import { limiter, validator, authenticate } from '../../helpers';

// Schemas
import { customerSchema } from '../../schemas';

const router = express.Router();

router.get('/', [ limiter(2, 1000 * 60), authenticate ], get);
router.post('/', [ validator(customerSchema) ], post);

router.get('/:customerHash', [ limiter(2, 1000 * 60), authenticate ], getByHash);
router.put('/:customerHash', [ validator(customerSchema), authenticate ], updateByHash);
router.delete('/:customerHash', [ authenticate ], deleteByHash);

export { router as customers };
