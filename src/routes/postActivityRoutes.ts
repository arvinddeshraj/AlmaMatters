import { Router } from 'express';

import {
  likeUnlike
} from '../controllers/postActivityControllers';

const router = new Router();

router.get('/likeunlike', likeUnlike)

export default router