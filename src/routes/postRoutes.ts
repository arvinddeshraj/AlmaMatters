import { Router } from 'express';

import { addPost, deletePost, getPosts } from '../controllers/postControllers';

const router = new Router();

router.post('/add', addPost);
router.post('/delete', deletePost);
router.post('/get', getPosts);

export default router;