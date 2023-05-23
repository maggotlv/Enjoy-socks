const React = require("react");
const Layout = require("./Layout");

module.exports = function Registration() {
  return (
    <Layout>
      <form name="regForm">
        <h3>Registration</h3>
        <input
          required
          className=""
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          required
          className=""
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <input
          required
          className=""
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

