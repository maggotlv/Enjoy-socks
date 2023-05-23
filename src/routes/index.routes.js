const router = require('express').Router();

const Home = require('../views/Home');

// const {  } = require('../../db/models');

router.get('/', (req, res) => {
  const title = 'Home';
  res.render(Home, { title });
});

module.exports = router;

