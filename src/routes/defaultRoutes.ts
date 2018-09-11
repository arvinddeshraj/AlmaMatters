import { Router } from 'express';

import { defaultIndex } from '../controllers/defaultControllers'

const router = new Router();

router.get('/', defaultIndex);

export default router;