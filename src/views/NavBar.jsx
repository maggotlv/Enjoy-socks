const React = require('react');

module.exports = function NavBar(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="container-fluid">
            <img src="/img/logo.png" alt="" width="50" height="50" />
            {/* <span className="navbar-brand h1">ENJOY SOCKS</span> */}
          </div>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="/">Main</a>

              {props?.user ? (
                <>
                  <a className="nav-link" href="/socks">
                    Generator
                  </a>
                  <a className="nav-link" href="/favorites">
                    Favorites
                  </a>
                  <a className="nav-link" href="/cart">
                    Cart
                  </a>
                  <a className="nav-link" href="/login/logout">
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a className="nav-link" href="/login/registration">
                    Registration
                  </a>
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
