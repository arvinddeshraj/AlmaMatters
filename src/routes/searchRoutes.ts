import { Router } from 'express';

import {
  searchByBatch,
  getAllByName,
  searchByName,
  searchByCompany,
  searchByInterest
} from '../controllers/searchControllers';

const router = new Router();

router.post('/batch', searchByBatch);
router.post('/getAllByName', getAllByName);
router.post('/name', searchByName);
router.post('/company', searchByCompany);
router.post('/interest', searchByInterest);

export default router;