const router = require('express').Router();

const Cart = require('../views/Cart');

const { Carts } = require('../../db/models');
const { Socks } = require('../../db/models');

router.get('/', async (req, res) => {
  const userId = req.session.user.id;
  const cartData = await Carts.findAll({ where: { user: userId }, raw: true });
  const socksData = await Socks.findAll({ where: { author: userId }, raw: true });
  const cartArr = [];

  for (let i = 0; i < cartData.length; i++) {
    for (let j = 0; j < socksData.length; j++) {
      if (cartData[i].sock === socksData[j].id) {
        cartArr.push({
          id: cartData[i].id, sockName: socksData[j].sockname, count: cartData[i].count, price: 200,
        });
      }
    }
  }
  //   console.log('ОУ МАЙ!', cartArr);
  res.render(Cart, { cartArr });
});

router.post('/api/count/plus', async (req, res) => {
  const { id } = req.body;
  try {
    const count = await Carts.findOne({ where: { id }, raw: true });
    const newCount = count.count + 1;
    // console.log(newCount);
    await Carts.update({ count: newCount }, { where: { id } });
    return res.json(newCount);
  } catch (error) {
    console.log('ERROR ====>', error);
  }
});

router.post('/api/count/minus', async (req, res) => {
  const { id } = req.body;
  try {
    const count = await Carts.findOne({ where: { id }, raw: true });
    const newCount = count.count - 1;
    // console.log(newCount);
    await Carts.update({ count: newCount }, { where: { id } });
    return res.json(newCount);
  } catch (error) {
    console.log('ERROR ====>', error);
  }
});

module.exports = router;
