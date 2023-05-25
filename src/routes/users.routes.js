const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Users, Carts } = require('../../db/models');

const Login = require('../views/Login');
const Registration = require('../views/Registration');

router.get('/', (req, res) => {
  const title = 'Login';
  res.render(Login, { title });
});

router.get('/registration', (req, res) => {
  const title = 'Registration';
  res.render(Registration, { title });
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email } });
    const cartsData = await Carts.findOne({
      where: { user: user.id },
      raw: true,
    });
    if (user) {
      const passwordIsValid = await bcrypt.compare(password, user.password);

      if (!passwordIsValid) {
        return res.sendStatus(401);
      }
      req.session.user = await user.get({ plain: true });
      req.session.user.cart = !!cartsData;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const sikret = await bcrypt.hash(password, 10);

    const [newUser, create] = await Users.findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
        password: sikret,
      },
    });
    if (create) {
      req.session.user = newUser;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(401);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((e) => {
    if (e) {
      console.log(e);
      return;
    }
    res.clearCookie('JaysCookie');
    res.redirect('/');
  });
});

module.exports = router;
