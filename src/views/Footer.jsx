const React = require('react');

module.exports = function Footer() {
  return (
    <nav className="navbar bg-body-tertiary mt-3">
      <div className="container-fluid footer justify-content-around">
        <div>
          <span className="font-weight-bold">Enjoy socks</span>
          <span className=""> e-mail: info@enjoysocks.ru</span>
        </div>
        <div>
          <span className="">Адрес: г. Москва, Шоссе Энтузиастов 12 стр. 2</span><br />
          <span>Телефон: +7 999 666 36 36</span>
        </div>
      </div>
    </nav>
  );
};
