import { Router } from 'express';

import {
  createEvent,
  deleteEvent,
  getEvents
} from '../controllers/eventControllers'

const router = new Router();

router.post('/create', createEvent);
router.post('/delete', deleteEvent);
router.post('/all', getEvents);

export default router;