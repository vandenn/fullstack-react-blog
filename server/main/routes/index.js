var express = require('express');
var router = express.Router();

router.get('/hello', (req, res) => {
  res.json('Hello world!');
});

router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
router.use('/users', require('./users'));

module.exports = router;
