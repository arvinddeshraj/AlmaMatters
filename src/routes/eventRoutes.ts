import { Router } from 'express';

import {
  createEvent,
  deleteEvent,
  getEvents,
  getAuthenticatedUserEvents
} from '../controllers/eventControllers'

const router = new Router();

router.post('/create', createEvent);
router.post('/delete', deleteEvent);
router.post('/all', getEvents);
router.get('/getMyEvents', getAuthenticatedUserEvents);

export default router;