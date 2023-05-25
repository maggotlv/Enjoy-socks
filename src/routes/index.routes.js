const router = require('express').Router();

const Home = require('../views/Home');
const mailClient = require('../lib/sendEmailer');

router.get('/', (req, res) => {
  const title = 'Home';
  res.render(Home, { title });
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
