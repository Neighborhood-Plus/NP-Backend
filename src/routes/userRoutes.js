import express from 'express';
import {
  getAllCafes,
  getCafe
} from '../controllers/cafeController.js';

const router = express.Router();

router.get('/cafes', getAllCafes);
router.get('/cafes/:id', getCafe);

export default router;
