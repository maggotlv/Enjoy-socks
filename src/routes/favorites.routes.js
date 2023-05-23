const router = require('express').Router();

const FavoritesView = require('../views/Favorites');
const Error = require('../views/Error');

const { User, Socks, Favorites, Carts } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const favoritesData = await Favorites.findAll({
      where: { user: req.session.user.id },
      includes: ['Users', 'Socks'],
    });
    const favorites = favoritesData.map((sock) => sock.get({ plain: true }));
    res.render(FavoritesView, { title: 'Избранные носки', favorites });
  } catch (error) {
    res.render(Error, { msg: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const favToDelete = await Favorites.findOne({
      where: { id: req.params.id },
    });
    await favToDelete.destroy();
    res.send({ status: 'ok' });
  } catch (error) {
    res.render(Error, { msg: error.message });
  }
});

router.get('/cart', async (req, res) => {
  try {
    const favToCart = await Crts.findOne({ where: { sock: req.params.id } });
    if (!favToCart) {
      const newCartSockData = await Carts.create({
        user: req.session.user.id,
        sock: req.params.id,
      });
    } else {
      favToCart.count += 1;
      await favToCart.save();
    }
    res.redirect('/cart');
  } catch (error) {
    res.render(Error, { msg: error.message });
  }
});

module.exports = router;
