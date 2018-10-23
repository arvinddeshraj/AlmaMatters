import { Router } from 'express';

import { addPost,
		 deletePost,
		 getPosts,
		 getRecentPosts,
		 getUnpublishedPosts
	   } from '../controllers/postControllers';

const router = new Router();

router.post('/add', addPost) // <user> add post page
	  .post('/delete', deletePost) // <user> settings page
	  .post('/get', getPosts) // in search page
	  .post('/recent', getRecentPosts) // <user> - <left bar> of <dashboard>
	  .post('/unpublished', getUnpublishedPosts) // <user> - <left bar> of <dashboard>

export default router;