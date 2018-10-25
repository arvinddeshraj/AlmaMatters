import { Router } from 'express';

import {
  getProfile
} from '../controllers/profileControllers';

const router = new Router();

router.get('/', getProfile);

export default router;