import express from 'express';

import { get, post } from './route';
import { getByHash, updateByHash, deleteByHash } from './hash';

// Utils
import { limiter, validator, authenticate } from '../../helpers';

// Schemas
import { orderSchema } from '../../schemas';

const router = express.Router();

router.get('/', [ limiter(2, 1000 * 60), authenticate ], get);
router.post('/', [ validator(orderSchema), authenticate ], post);

router.get('/:orderHash', [ limiter(2, 1000 * 60), authenticate ], getByHash);
router.put('/:orderHash', [ validator(orderSchema), authenticate ], updateByHash);
router.delete('/:orderHash', [ authenticate ], deleteByHash);

export { router as orders };
