const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ title, user, favorites }) {
  return (
    <Layout user={user}>
      <div>
        <h2>{title}</h2>
        <br />
        {favorites.map((sock) => (
          <>
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
                <button className="share" type="button">Поделиться</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
};
