import express from 'express';
import { comments } from './comments';
// import { users } from './users'
const router = express.Router();

router.use('/comments', comments)
// router.use('/users', users)

router.get('/', function(req, res) {
  res.render('index')
})

export { router as index }
