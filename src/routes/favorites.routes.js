const router = require('express').Router();

const FavoritesView = require('../views/Favorites');
const One = require('../views/One');
const Error = require('../views/Error');

const { Users, Socks, Favorites, Carts } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const favoritesData = await Favorites.findAll({
      where: { user: req.session.user.id },
      include: Socks,
    });
    const favorites = await favoritesData.map((el) =>
      el.Sock.get({ plain: true })
    );
    res.render(FavoritesView, { title: 'Избранные носки', favorites });
  } catch (error) {
    res.render(Error, { msg: error.message });
  }
});

router.get('/cart/:id', async (req, res) => {
  try {
    const favToCart = await Carts.findOne({
      where: { user: req.session.user.id, sock: req.params.id },
    });
    console.log('to cart - ', favToCart);
    if (!favToCart) {
      const newCartSockData = await Carts.create({
        user: req.session.user.id,
        sock: req.params.id,
      });
      console.log('new cart record - ', newCartSockData);
    } else {
      favToCart.count += 1;
      await favToCart.save();
    }
    res.send({ status: 'ok' });
  } catch (error) {
    res.render(Error, { msg: error.message });
  }
});

router.get('/one/:id', async (req, res) => {
  try {
    const oneSockData = await Socks.findOne({
      where: { id: req.params.id },
    });
    const sock = await oneSockData.get({ plain: true });
    res.render(One, { title: 'Твой носок', sock });
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

module.exports = router;
