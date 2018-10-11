import { Router } from 'express';

import { apiIndex } from '../controllers/apiControllers'

const router = new Router();

router.get('/', apiIndex);

export default router;