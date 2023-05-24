const React = require("react");

module.exports = function NavBar({ user }) {
  return (
    <nav className="navBar">
      <a href="/socks">Socks</a>
      {user ? (
        <>
          <span>hello</span>
          <a href="/">
            home
          </a>
          <a href="/login/logout">
            logout
          </a>
        </>
      ) : (
        <>
          <a href="/login">
            login
          </a>
          <a href="/login/registration">
            registration
          </a>
        </>
      )}
    </nav>
  );
};

