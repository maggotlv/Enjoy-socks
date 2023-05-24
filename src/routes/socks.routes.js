const router = require('express').Router();
const {
  Users, Socks, Carts, Favorites,
} = require('../../db/models');

const Generator = require('../views/Generator');

router.get('/', (req, res) => {
  res.render(Generator, {});
});

module.exports = router;
