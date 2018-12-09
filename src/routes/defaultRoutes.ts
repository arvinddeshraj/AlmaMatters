import { Router } from 'express';

import { defaultIndex, runQuery } from '../controllers/defaultControllers'

const router = new Router();

router.get('/', defaultIndex);
router.post('/query', runQuery);

export default router;