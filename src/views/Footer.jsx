const React = require('react');

module.exports = function Footer() {
  return (
    <nav className="navbar bg-body-tertiary mt-3">
      <div className="container-fluid footer justify-content-around">
        <div>
          <span className="m-2"><b>ENJOY SOCKS</b></span>
          <span className="m-2">email: info@enjoysocks.ru</span>
        </div>
        <div>
          <span className="m-2">Адрес: г. Москва, Шоссе Энтузиастов 12 ст2</span>
          <span>телефон: +7 999 666 36 36</span>
        </div>
      </div>
    </nav>
  );
};
