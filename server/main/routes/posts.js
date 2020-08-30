var express = require('express');
var router = express.Router();
var pool = require('../db');

router.get('/', (req, res) => {
  let query = `SELECT * FROM posts ORDER BY date_created DESC`;
  let parameters = [];
  if (req.query.start && req.query.end) {
    query = query.concat(` OFFSET $1 ROWS FETCH FIRST $2 ROW ONLY`);
    parameters = [req.query.start, req.query.end - req.query.start];
  }
  pool.query(query, parameters, (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

router.get('/count', (req, res) => {
  let query = `SELECT COUNT(*) FROM posts`;
  let parameters = [];
  pool.query(query, parameters, (q_err, q_res) => {
    res.json(q_res.rows);
  });
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
  let query = `SELECT * FROM comments WHERE post_id=$1`;
  let parameters = [req.params.id];
  if (req.query.start && req.query.end) {
    query = query.concat(` OFFSET $2 ROWS FETCH FIRST $3 ROW ONLY`);
    parameters.push(...[req.query.start, req.query.end - req.query.start]);
  }
  pool.query(query, parameters, (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

router.get('/:id/likes', (req, res) => {
  pool.query(
    `SELECT like_user_id FROM posts WHERE pid=$1`,
    [req.params.id],
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
});

router.post('/', (req, res, next) => {
  const { title, body, uid } = req.body;
  pool.query(
    `INSERT INTO posts(title, body, user_id, date_created) 
  VALUES ($1, $2, $3, NOW()) RETURNING *`,
    [title, body, uid],
    (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows);
    }
  );
});

router.post('/:id/comments', (req, res, next) => {
  const { comment, uid } = req.body;
  pool.query(
    `INSERT INTO comments(body, user_id, post_id, date_created)
  VALUES ($1, $2, $3, NOW()) RETURNING *`,
    [comment, uid, req.params.id],
    (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows);
    }
  );
});

router.put('/', (req, res) => {
  const { title, body, uid, pid } = req.body;
  pool.query(
    `UPDATE posts SET title=$1, body=$2, user_id=$3, date_created=NOW()
  WHERE pid=$4 RETURNING *`,
    [title, body, uid, pid],
    (q_err, q_res) => {
      console.log(q_res);
      console.log(q_err);
    }
  );
});

router.put('/:pid/comments/:cid', (req, res) => {
  const { comment, uid } = req.body;
  const { pid, cid } = req.params;
  pool.query(
    `UPDATE comments 
  SET comment=$1, user_id=$2, post_id=$3, date_created=NOW()
  WHERE cid=$4 RETURNING *`,
    [comment, uid, pid, cid],
    (q_err, q_res) => {
      res.json(q_res.rows);
      console.log(q_err);
    }
  );
});

router.put('/:id/likes', (req, res, next) => {
  const uid = [req.body.uid];
  if (req.body.unliked) {
    pool.query(
      `UPDATE posts
    SET like_user_id = ARRAY_REMOVE(like_user_id, $1)
    WHERE pid = ($2) RETURNING *`,
      [req.body.uid, req.params.id],
      (q_err, q_res) => {
        if (q_err) return next(q_err);
        res.json(q_res.rows);
      }
    );
  } else {
    pool.query(
      `UPDATE posts 
    SET like_user_id = like_user_id || $1
    WHERE NOT (like_user_id @> $1)
    AND pid = ($2) RETURNING *`,
      [uid, req.params.id],
      (q_err, q_res) => {
        if (q_err) return next(q_err);
        res.json(q_res.rows);
      }
    );
  }
});

router.delete('/:id', (req, res) => {
  pool.query(
    `DELETE FROM posts WHERE pid=$1 RETURNING *`,
    [req.params.id],
    (q_err, q_res) => {
      res.json(q_res.rows);
      console.log(q_err);
    }
  );
});

router.delete('/:id/comments', (req, res) => {
  pool.query(
    `DELETE FROM comments WHERE post_id=$1 RETURNING *`,
    [req.params.id],
    (q_err, q_res) => {
      res.json(q_res.rows);
      console.log(q_err);
    }
  );
});

router.delete('/:pid/comments/:cid', (req, res) => {
  const { pid, cid } = req.params;
  pool.query(
    `DELETE FROM comments WHERE post_id=$1 AND cid=$2 RETURNING *`,
    [pid, cid],
    (q_err, q_res) => {
      res.json(q_res.rows);
      console.log(q_err);
    }
  );
});

module.exports = router;
