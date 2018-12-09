import { getAll } from '../controllers/dateControllers'
import { Router } from 'express';

const router = new Router();

router.post('/get', getAll);

export default router;