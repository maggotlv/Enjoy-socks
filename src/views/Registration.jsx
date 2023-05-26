const React = require("react");
const Layout = require("./Layout");

module.exports = function Registration() {
  return (
    <Layout>
      <div className="regDiv">
      <form name="regForm">
        <h3>Регистрация</h3>
        <label for="name">Имя:</label><br />
        <input
          required
          className=""
          type="text"
          name="name"
        /><br />
        <label for="email">e-mail:</label><br />
        <input
          required
          className=""
          type="email"
          name="email"
        /><br />
        <label for="password">Пароль:</label><br />
        <input
          required
          className=""
          type="password"
          name="password"
        /><br />
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
      </div>
    </Layout>
  );
};

