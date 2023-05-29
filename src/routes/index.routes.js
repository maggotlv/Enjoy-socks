const router = require('express').Router();

const Home = require('../views/Home');
const One = require('../views/One');
// const mailClient = require('../lib/sendEmailer');

const { Socks } = require('../../db/models');

router.get('/', async (req, res) => {
  const title = 'Магазин носков "Enjoy socks"';
  try {
    const socksData = await Socks.findAll({
      limit: 6,
      order: [['createdAt', 'DESC']],
      raw: true,
    });
    res.render(Home, { title, socksData });
  } catch (error) {
    res.render(Error, { msg: error.message });
  }
});

// router.get('/mail', (req, res) => {
//   try {
//     mailClient(
//       'enjoy.socks@mail.ru',
//       'Новый заказ на сайте Enjoy socks',
//       'Заказаны носки в количестве -----'
//     );
//     res.render(Error, {
//       msg: 'Сообщение отправлено, хотя так не нужно делать',
//     });
//   } catch (e) {
//     // console.log('Не удалось отправить сообщение');
//     res.render(Error, { msg: 'Не удалось отправить сообщение' });
//   }
//   res.end();
// });

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

module.exports = router;
