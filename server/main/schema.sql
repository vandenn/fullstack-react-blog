CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  email_verified BOOLEAN,
  picture VARCHAR,
  date_created TIMESTAMP,
  last_login TIMESTAMP
);

CREATE TABLE posts (
  pid SERIAL PRIMARY KEY,
  title VARCHAR(255),
  body VARCHAR,
  user_id INT REFERENCES users(uid),
  date_created TIMESTAMP,
  like_user_id INT[] DEFAULT ARRAY[]::INT[]
);

CREATE TABLE comments (
  cid SERIAL PRIMARY KEY,
  body VARCHAR(255),
  user_id INT REFERENCES users(uid),
  post_id INT REFERENCES posts(pid),
  date_created TIMESTAMP
);