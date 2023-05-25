const router = require('express').Router();

const Home = require('../views/Home');
const mailClient = require('../lib/sendEmailer');

const { Socks } = require('../../db/models');

router.get('/', async (req, res) => {
  const title = 'Магазин носков "Enjoy socks"';
  try {
    const socksData = await Socks.findAll({
      limit: 4,
      order: [['createdAt', 'DESC']],
      raw: true,
    });
    res.render(Home, { title, socksData });
  } catch (error) {
    res.render(Error, { msg: error.message });
  }
});

router.get('/mail', (req, res) => {
  try {
    mailClient(
      'enjoy.socks@mail.ru',
      'Новый заказ на сайте Enjoy socks',
      'Заказаны носки в количестве -----'
    );
    res.render(Error, {
      msg: 'Сообщение отправлено, хотя так не нужно делать',
    });
  } catch (e) {
    // console.log('Не удалось отправить сообщение');
    res.render(Error, { msg: 'Не удалось отправить сообщение' });
  }
  res.end();
});

module.exports = router;
