import express from 'express';
import { getAllCafes, getCafe } from '../controllers/cafeController.js';
import {
  getAllComments,
  getComment,
  deleteComment,
  createComment,
} from '../controllers/commentController.js';

const router = express.Router();

router.get('/cafes', getAllCafes);
router.get('/cafes/:id', getCafe);
router.get('/comments', getAllComments);
router.get('/comments/:id', getComment);
router.patch('/comments/:id', deleteComment);
router.post('/comments', createComment);

export default router;
