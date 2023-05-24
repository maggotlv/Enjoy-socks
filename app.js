require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const ssr = require('./src/middlewares/ssr');
const isAuth = require('./src/middlewares/isAuth');

const app = express();

const indexRoutes = require('./src/routes/index.routes');
const authRoutes = require('./src/routes/users.routes');
const socksRoutes = require('./src/routes/socks.routes')

const { COOKIE_SECRET } = process.env;
const { PORT } = process.env || 3000;
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(ssr);
app.use(morgan('dev'));
app.use(express.json());
app.use(
  session({
    name: 'JaysCookie',
    store: new FileStore(),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 2,
      httpOnly: true,
    },
  }),
);

app.use('/', indexRoutes);
app.use('/login', authRoutes);
// app.use(isAuth);
app.use('/socks/', isAuth, socksRoutes)


app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Servidor rondundo, señor! http://localhost:${PORT}`);
});
