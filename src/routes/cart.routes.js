const router = require('express').Router();
const nodemailer = require('nodemailer');
const mailClient = require('../lib/sendEmailer');

const Cart = require('../views/Cart');

const { Carts } = require('../../db/models');
const { Socks } = require('../../db/models');

router.get('/', async (req, res) => {
  const userId = req.session.user.id;
  const cartData = await Carts.findAll({
    where: { user: userId },
    order: [['id', 'ASC']],
    include: Socks,
    raw: true,
  });
  res.render(Cart, { cartData });
});

router.post('/api/plus', async (req, res) => {
  const { id } = req.body;
  try {
    const count = await Carts.findOne({ where: { id }, raw: true });
    const newCount = count.count + 1;
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
    const cartData = await Carts.findOne({
      where: { user: req.session.user.id },
      raw: true,
    });
    req.session.user.cart = !!cartData;
    req.session.save(() => {
      res.json({ status: 200, text: 'Запись удалена' });
    });
  } catch (error) {
    return res.json(error);
  }
});

router.put('/mail', (req, res) => {
  // console.log(req.body.orderNum, req.body.sum, req.session.user.email);
  const title = `Заказ №${req.body.orderNum} сформирован`;
  mailClient(title, req.body.cart, 'enjoy.socks@mail.ru');
  mailClient(title, req.body.cart, req.session.user.email);

  return res.end;
});

module.exports = router;
