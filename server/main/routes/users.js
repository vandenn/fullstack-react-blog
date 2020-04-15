var express = require('express');
var router = express.Router();
var pool = require('../db');

router.get('/', (req, res) => {
  const username = String(req.query.username);
  pool.query(
    `SELECT * FROM users
  WHERE username=$1`,
    [username],
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

router.get('/:id', (req, res) => {
  pool.query(
    `SELECT * FROM users
  WHERE uid=$1`,
    [req.params.id],
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

router.get('/:id/posts', (req, res) => {
  pool.query(
    `SELECT * FROM posts
  WHERE user_id=$1`,
    [req.params.id],
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

router.post('/', (req, res) => {
  const { username, email, email_verified } = req.body;
  pool.query(
    `INSERT INTO users (username, email, email_verified, date_created, last_login)
  VALUES ($1, $2, $3, NOW(), NOW())
  ON CONFLICT (username) DO UPDATE 
  SET email_verified = EXCLUDED.email_verified,
  last_login = EXCLUDED.last_login`,
    [username, email, email_verified],
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

module.exports = router;
