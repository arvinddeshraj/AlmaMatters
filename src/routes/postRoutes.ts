import { Router } from 'express';

import { addPost,
		 deletePost,
		 getPosts,
		 getUserPosts
	   } from '../controllers/postControllers';

const router = new Router();

router.post('/add', addPost) // <user> add post page
router.post('/delete', deletePost) // <user> settings page
router.get('/get', getPosts)
router.get('/userposts', getUserPosts)

export default router;