import { Router } from 'express';

import { authIndex, jesseIndex, getDetails } from '../controllers/authControllers';

const router = new Router();

router.get('/jesse', jesseIndex);
router.get('/getToken', getDetails);
router.get('/*', authIndex);

export default router;