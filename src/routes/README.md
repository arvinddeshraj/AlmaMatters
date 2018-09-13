## controllers

# The Format

```js
import { Router } from 'express';

import { someThing, .... } from '../controllers/someController'

const router = new Router();

router.get('/', someThing);
router.get('/...', ...);

export default router;
```