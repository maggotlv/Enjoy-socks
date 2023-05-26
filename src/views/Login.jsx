const React = require("react");
const Layout = require("./Layout");

module.exports = function LogIn() {
  return (
    <Layout>
      <div className="logDiv">
      <form name="logForm">
        <h3>Log In</h3>
        <label for="email">e-mail:</label><br />
        <input
          name="email"
          required
          className=""
          type="text"
          placeholder="E-mail"
        /><br />
        <label for="password">Пароль:</label><br />
        <input
          name="password"
          required
          className=""
          type="password"
          placeholder="Password"
        /><br />
        <button className="btn btn-success">Submit</button>
      </form>
      </div>
    </Layout>
  );
};

