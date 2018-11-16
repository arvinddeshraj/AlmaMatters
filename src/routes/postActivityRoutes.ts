import { Router } from 'express';

import {
  likeUnlike,
  commentPost
} from '../controllers/postActivityControllers';

const router = new Router();

router.get('/likeunlike', likeUnlike);
router.get('/comment', commentPost);

export default router