CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  email_verified BOOLEAN,
  picture VARCHAR,
  date_created TIMESTAMP,
  last_login TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  body VARCHAR,
  user_id INT REFERENCES users(id),
  date_created TIMESTAMP,
  latest_edit_date TIMESTAMP,
  like_user_id INT[] DEFAULT ARRAY[]::INT[]
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body VARCHAR(255),
  user_id INT REFERENCES users(id),
  post_id INT REFERENCES posts(id),
  date_created TIMESTAMP,
  latest_edit_date TIMESTAMP
);