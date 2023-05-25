const router = require('express').Router();
const { request } = require('express');
const {
  Users, Socks, Carts, Favorites,
} = require('../../db/models');

const Generator = require('../views/Generator');

function trans(str) {
  const ru = {
    'cactus.png': 'кактус',
    'duck.png': 'уточка',
    'llama.png': 'лама',
    'yoda.png': 'Йода',
    'gorokhoviy.png': 'гороховый',
    'nauchniy.png': 'научный',
    'sovremenniy.png': 'современный',
    'zvezdniy.png': 'звёздный',
  }; const
    n_str = [];

  str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');

  for (let i = 0; i < str.length; ++i) {
    n_str.push(
      ru[str[i]]
         || ru[str[i].toLowerCase()] == undefined && str[i]
         || ru[str[i].toLowerCase()].toUpperCase(),
    );
  }

  return n_str.join('');
}

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
      sockname: trans(sockData.pattern)
    });
    res.json('sock added');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
