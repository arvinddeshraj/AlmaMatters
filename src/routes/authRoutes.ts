import { Router } from 'express';

import { authIndex, jesseIndex, getToken, logout } from '../controllers/authControllers';

const router = new Router();

router.get('/jesse', jesseIndex);
router.post('/getToken', getToken);
router.get('/logout', logout);
router.get('/*', authIndex);

export default router;