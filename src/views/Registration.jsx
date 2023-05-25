const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div id="registration" className="container-sm">

        <form name="regForm">
          <h3>Регистрация</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Имя пользователя</label>
            <input name="name" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">E-mail</label>
            <input name="email" type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input name="password" type="tpassword" className="form-control" />
          </div>
          <button type="submit" className="btn btn-warning">Отправить</button>

        </form>
      </div>

    </Layout>
  );
};
