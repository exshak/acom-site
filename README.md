<p align="center">
  <a href="https://apex-apparel.herokuapp.com">
    <img src="./client/src/assets/icons/logo-full.svg" alt="Apex Apparel" width="300" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/exshak/acom-site">
    <img src="https://img.shields.io/badge/build-passing-success.svg" alt="build: status"/>
  </a>
  <a href="https://sass-lang.com">
    <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20sass-orange.svg?colorB=daa357&colorA=db748e" alt="style: sass"/>
  </a>
  <a href="https://firebase.google.com">
    <img src="https://img.shields.io/badge/database-firebase-00bbcc.svg" alt="database: firebase"/>
  </a>
  <a href="https://airbnb.io/enzyme">
    <img src="https://img.shields.io/badge/tests-enzyme-00cc99.svg" alt="tests: enzyme"/>
  </a>
  <a href="https://apex-apparel.herokuapp.com">
    <img src="https://heroku-badge.herokuapp.com/?app=apex-apparel" alt="heroku: status"/>
  </a>
</p>

---

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have a great idea to contribute? Make a pull request, I'm always looking for ways to improve [Apex Apparel](https://apex-apparel.herokuapp.com)._

## Features

- Carousel & Gallery
- Cloud Firestore noSQL
- Firebase Authentication
- Google Forms & OAuth 2.0
- React Lazy, Suspense, Memo
- Redux Hydrate & Persist
- Stripe Checkout
- Heroku CD
- PWA
- SEO

## Quick Start

Clone repository, install dependencies, start server

```sh
git clone https://github.com/exshak/acom-site.git
cd acom-site && yarn   # npm install
cd client && yarn      # npm install
cd .. && yarn dev      # npm start
# to deploy
yarn build             # npm build
```

Visit site at _`localhost:3000`_

## Built With

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Redux Saga](https://redux-saga.js.org)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Reselect](https://github.com/reduxjs/reselect)
- [Sass](https://sass-lang.com)
- [Firebase](https://firebase.google.com)
- [Enzyme](https://airbnb.io/enzyme)
- [Heroku](https://netlify.com)

#### Folder Structure

```sh
client/
├── public            # SEO manifest
├── src
│   ├── assets        # Icons and images
│   ├── components    # Javascript and css
│   ├── firebase      # Firebase/store config
│   ├── pages         # Site index and routes
│   └── redux         # Actions, reducers, sagas
└── index.tsx         # Store, router, persistgate
```

## License

[MIT](./LICENSE)
