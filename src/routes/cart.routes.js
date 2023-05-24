const router = require('express').Router();
const nodemailer = require('nodemailer');

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

router.post('/api/plus', async (req, res) => {
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

router.post('/api/minus', async (req, res) => {
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

router.delete('/api/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Carts.destroy({ where: { id } });
    return res.json({ status: 200, text: 'Запись удалена' });
  } catch (error) {
    return res.json(error);
  }
});

router.get('/mail', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'enjoysocksStore@gmail.com',
      pass: 'enjoysocks123!',
    },
  });

  const mailOptions = {
    from: 'enjoysocksStore@gmail.com',
    to: 'enjoysocksStore@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
});

module.exports = router;
