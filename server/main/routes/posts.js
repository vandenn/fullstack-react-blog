var express = require('express');
var router = express.Router();
var pool = require('../db');

router.get('/', (req, res) => {
  pool.query(
    `SELECT * FROM posts 
    ORDER BY date_created DESC`,
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

router.get('/:id', (req, res) => {
  pool.query(
    `SELECT * FROM posts WHERE pid=$1`,
    [req.params.id],
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

router.post('/', (req, res, next) => {
  const { title, body, uid, username } = req.body;
  pool.query(
    `INSERT INTO posts(title, body, user_id, author, date_created) 
  VALUES ($1, $2, $3, $4, NOW())`,
    [title, body, uid, username],
    (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows);
    }
  );
});

module.exports = router;
