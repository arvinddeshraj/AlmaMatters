# controllers

## The Format

```js
import { Router } from 'express';

import { someThing, .... } from '../controllers/someController'

const router = new Router();

router.get('/', someThing);
router.get('/...', ...);

export default router;
```

---------------------------------------------------------------

# Endpoints

## defaultRoutes.ts
'/' - just for pinging purpose

## postRoutes.ts
| EndPoint   | Verb      | Protected | Controller | Body                 | Response                       |
|------------|-----------|-----------|-----------|----------------------|--------------------------------|
| /post/add/ | POST      | Yes       | addPost   | { userId, postBody } | { post: { userId(ID), postBody(String - Mark(up/down) } } |
| /post/delete/ | POST | Yes | deletePost | { postId } | { message(String) } |
| /post/get | POST | No | getPosts | { userName } | { posts(Array) } |
| /post/recent | POST | Yes |  |  |
| /post/unpublished | POST | Yes |  |  |

## eventRoutes