import { Router } from 'express';

import { authIndex, jesseIndex, getToken } from '../controllers/authControllers';

const router = new Router();

router.get('/jesse', jesseIndex);
router.post('/getToken', getToken);
router.get('/*', authIndex);

export default router;