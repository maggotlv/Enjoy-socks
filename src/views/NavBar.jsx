const React = require('react');

module.exports = function NavBar({ user }) {
  return (

    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/img/logo.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
        </a>
        <a href="/">Home</a>
        <a href="/socks">Socks</a>
        <a href="/login/logout">Logout</a>
        <a href="/login">Login</a>
        <a href="/login/registration">Registration</a>
        <a href="/cart">Cart</a>
        <a href="/favorites">Favorites</a>

      </div>

      {/* {user ? (
        <>
        </>
      ) : (
        <>
        </> */}
    </nav>
  );
};
