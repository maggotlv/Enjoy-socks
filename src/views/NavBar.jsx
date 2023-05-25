const React = require('react');

module.exports = function NavBar(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-body-tertiary mb-3">
        <div className="container-fluid">
          <img src="/img/logo.png" alt="" width="50" height="50" />

          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
            <span className="navbar-brand h1 m-3">ENJOY SOCKS</span>
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
                  <a className="nav-link" href="/login/logout">
                    Logout
                  </a>
                  {/* <a className="nav-link" href="/cart">
                    Cart
                  </a> */}
                  <a href="/cart">
                    <button style={{ display: 'flex' }} type="button" className="btn btn-warning position-relative">
                      <img className="close-button" style={{ stroke: 'white' }} src="/img/cart.svg" alt="" width="25" height="25" />
                      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                        <span className="visually-hidden">New order</span>
                      </span>
                    </button>
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
