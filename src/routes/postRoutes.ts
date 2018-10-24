import { Router } from 'express';

import { addPost,
		 deletePost,
		 getPosts,
	   } from '../controllers/postControllers';

const router = new Router();

router.post('/add', addPost) // <user> add post page
router.post('/delete', deletePost) // <user> settings page
router.post('/get', getPosts) // in search page

export default router;