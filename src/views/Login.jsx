const React = require("react");
const Layout = require("./Layout");

module.exports = function LogIn() {
  return (
    <Layout>
      <form name="logForm">
        <h3>Log In</h3>
        <input
          name="email"
          required
          className=""
          type="text"
          placeholder="E-mail"
        />
        <input
          name="password"
          required
          className=""
          type="password"
          placeholder="Password"
        />
        <button>Submit</button>
      </form>
    </Layout>
  );
};

