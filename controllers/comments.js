import express from 'express';
import { Comment } from '../models/comment';

const router = express.Router();

router.get('/:id', function(req, res) {
  Comment.get(req.params.id, function (err, comment) {
    res.render('comments/comment', {comment: comment})
  })
})

export { router as comments }
