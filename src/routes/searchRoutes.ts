import { Router } from 'express';

import {
  searchbyName,
  searchbyCompany,
  searchbyInterest
} from '../controllers/searchControllers';

const router = new Router();

router.post('/name', searchbyName);
router.post('/company', searchbyCompany);
router.post('/interest', searchbyInterest);

export default router;