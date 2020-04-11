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

router.get('/:id/comments', (req, res) => {
  pool.query(
    `SELECT * FROM comments
  WHERE post_id=$1`,
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

router.put('/', (req, res) => {
  const { title, body, uid, pid, username } = req.body;
  pool.query(
    `UPDATE posts SET title=$1, body=$2, user_id=$3, author=$5, date_created=NOW()
  WHERE pid=$4`,
    [title, body, uid, pid, username],
    (q_err, q_res) => {
      console.log(q_res);
      console.log(q_err);
    }
  );
});

router.put('/:id/likes', (req, res, next) => {
  pool.query(
    `UPDATE posts 
  SET like_user_id = like_user_id || $1, likes = likes+1
  WHERE NOT (like_user_id @> $1)
  AND pid = ($2)`,
    [req.body.uid, req.params.id],
    (q_err, q_res) => {
      if (q_err) return next(q_err);
      console.log(q_res);
      res.json(q_res.rows);
    }
  );
});

router.delete('/:id', (req, res) => {
  pool.query(
    `DELETE FROM posts WHERE pid=$1`,
    [req.params.id],
    (q_err, q_res) => {
      res.json(q_res.rows);
      console.log(q_err);
    }
  );
});

router.delete('/:id/comments', (req, res) => {
  pool.query(
    `DELETE FROM comments WHERE post_id=$1`,
    [req.params.id],
    (q_err, q_res) => {
      res.json(q_res.rows);
      console.log(q_err);
    }
  );
});

module.exports = router;
