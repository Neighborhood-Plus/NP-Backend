import {
  findAllComments,
  findCommentById,
  findDeleteComment,
} from '../services/commentService.js';

// DB에서 조회된 데이터 가져와서 가공
export const getAllComments = async (req, res) => {
  try {
    const comments = await findAllComments();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getComment = async (req, res) => {
  try {
    const comment = await findCommentById(req.params.id);
    res.json(comment);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const result = await findDeleteComment(req.params.id);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  } catch (err) {
    if (err.status) {
      res.status(err.status).json({ success: false, message: err.message });
    } else {
      res.status(500).json({ success: false, message: '서버 오류 발생' });
    }
  }
};
