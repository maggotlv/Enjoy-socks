const React = require('react');
const Layout = require('./Layout');

module.exports = function LogIn() {
  return (
    <Layout>
      <h3 className="welcome">Вход</h3>
      <div id="registration" className="container-sm">
        <form name="logForm">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Подтверждаю, что хочу носочки
            </label>
          </div>
          <button className="btn btn-warning">Войти</button>
        </form>
      </div>

    </Layout>
  );
};
