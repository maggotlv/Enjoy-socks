const React = require('react');
const Layout = require('./Layout');

module.exports = function One({ title, user, sock }) {
  return (
    <Layout user={user}>
      <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=646dd1b2413e9c001905a1dc&product=inline-share-buttons" async="async" />
      <div>
        <h2>{title}</h2>
        <br />
        <h3>{sock.sockname}</h3>
        <div className="generator-container" key={sock.id} id={sock.id}>
          <div className="generator">
            <div className="sockBckg" style={{ backgroundColor: `${sock.colour}` }} />
            <img className="sockPattern" src={`/img/patterns/${sock.pattern}`} alt="" />
            <img className="sockLogo" src={`/img/images/${sock.image}`} alt="" />
            <img className="sock" src="/img/sock.png" alt="Готовый носок" />
          </div>
          <div>
            <button className="tocart" type="button">В корзину</button>
            <button className="share" type="button">Поделиться. Хотя нет, уже поделились</button>
          </div>
        </div>
        <div className="sharethis-inline-share-buttons" />
      </div>
    </Layout>
  );
};
