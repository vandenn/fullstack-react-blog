# fullstack-react-blog

A fullstack single page application (SPA) blog implemented in React+Redux (focusing on hooks/functional components) with Express and PostgreSQL.

## Overview

This project is my personal React.js sandbox/playground for building a fullstack web application. Here, I apply or experiment with some of the insights I gain from coding with various React+Redux, Express, and PostgreSQL libraries in the industry. I've worked and tinkered with several libraries such as Material-UI's comprehensive UI component library (https://material-ui.com/), middlewares like Redux-Saga (https://redux-saga.js.org/) and Redux-Thunk (https://github.com/reduxjs/redux-thunk), and other complementary libraries such as Reselect (https://github.com/reduxjs/reselect) and Immer (https://github.com/immerjs/immer).

This particular project uses Auth0 (https://auth0.com/) for a streamlined login solution.

## Setup

1. Install Node.js and NPM via NVM or the Node installer.

2. `cd` into your local copy of this repository then run the `init` scripts in both the client and server folders.

```
cd fullstack-react-blog/client
bash init.sh
cd ../server
bash init.sh
```

3. While in the `server` folder, run the following command.

```
npm run devstart
```

4. While in the `client` folder, run the following command.

```
npm run start
```

## Commit Format

This project follows a modified Conventional Commits format for its commit messages (https://www.conventionalcommits.org/).

## Resources

- Backend library stack and app idea inspired from the tutorial by Mohammad Iqbal: https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/
