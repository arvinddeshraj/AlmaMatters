import { Router } from 'express';

import { authIndex, jesseIndex } from '../controllers/authControllers';

const router = new Router();

router.get('/jesse', jesseIndex);
router.get('/*', authIndex);

export default router;