import express from 'express';

import { get, post } from './route';
import { getByHash, updateByHash, deleteByHash } from './hash';

// Utils
import { limiter, validator, authenticate } from '../../helpers';

// Schemas
import { productSchema } from '../../schemas';

const router = express.Router();

router.get('/', [ limiter(2, 1000 * 60), authenticate ], get);
router.post('/', [ validator(productSchema) ], post);

router.get('/:productHash', [ limiter(2, 1000 * 60), authenticate ], getByHash);
router.put('/:productHash', [ validator(productSchema), authenticate ], updateByHash);
router.delete('/:productHash', [ authenticate ], deleteByHash);

export { router as products };
