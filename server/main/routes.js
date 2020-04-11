var express = require('express');
var router = express.Router();

router.get('/api/hello', (req, res) => {
  res.json('Hello world!');
});

module.exports = router;
