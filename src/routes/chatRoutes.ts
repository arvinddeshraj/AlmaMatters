import { getChats } from '../controllers/chatControllers'
import { Router } from 'express';

const router = new Router();

router.post('/get', getChats);

export default router;