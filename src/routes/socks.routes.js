const router = require('express').Router();
const { request } = require('express');
const { Users, Socks, Carts, Favorites } = require('../../db/models');

const Generator = require('../views/Generator');

const trans = {
  'rgb(255, 255, 255)': 'Белый',
  'rgb(255, 212, 7)': 'Жёлтый',
  'rgb(199, 7, 255)': 'Фиолетовый',
  'rgb(255, 139, 134)': 'Розовый',
  'rgb(218, 255, 134)': 'Салатовый',
  'rgb(134, 244, 255)': 'Голубой',
  'cactus.png': 'Кактус',
  'duck.png': 'Уточка',
  'llama.png': 'Лама',
  'yoda.png': 'Йода',
  'gorokhoviy.png': 'гороховый',
  'nauchniy.png': 'научный',
  'sovremenniy.png': 'современный',
  'zvezdniy.png': 'звёздный',
};

router.get('/', (req, res) => {
  res.render(Generator, {});
});

router.post('/addFav', async (req, res) => {
  try {
    const sockData = await req.body.sockData;
    const createSock = await Socks.create({
      colour: sockData.colour,
      pattern: sockData.pattern,
      image: sockData.image,
      author: req.session.user.id,
      sockname: `${trans[sockData.colour]} ${trans[sockData.pattern]} носочек ${
        trans[sockData.image]
      }`,
    });
    const favouriteSock = await Favorites.create({
      user: createSock.author,
      sock: createSock.id,
    });
    res.json(createSock);
  } catch (error) {
    console.log(error);
  }
});

router.post('/addCart', async (req, res) => {
  try {
    const sockData = await req.body.sockData;
    const createSock = await Socks.create({
      colour: sockData.colour,
      pattern: sockData.pattern,
      image: sockData.image,
      author: req.session.user.id,
      sockname: `${trans[sockData.colour]} ${trans[sockData.pattern]} носочек ${
        trans[sockData.image]
      }`,
    });
    const cartSock = await Carts.create({
      user: createSock.author,
      sock: createSock.id,
      count: 1,
    });
    req.session.user.cart = true;
    res.json(createSock);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
