const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ title, user, favorites }) {
  return (
    <Layout user={user}>
      <div className="d-flex flex-column">
        <h3>{title}</h3>
        <br />
        <div className="favorites-group d-flex flex-wrap">
          {favorites.map((sock) => (
            <div className="sock-card-f d-flex flex-column justify-content-between mt-3" key={sock.id} id={sock.id}>
              <h5>{`${sock.id} ${sock.sockname}`}</h5>
              <div className="border border-1 p-3 m-2 shadow d-flex flex-column" key={sock.id} id={sock.id}>
                <a style={{ alignSelf: 'end' }} href="/favorites/delete/${sock.id}"><img className="close-button" style={{ stroke: 'red' }} src="/img/closesm.svg" alt="" width="50" height="50" /></a>
                <div className="generator">
                  <div className="sockBckg" style={{ backgroundColor: `${sock.colour}` }} />
                  <img className="sockPattern" src={`/img/patterns/${sock.pattern}`} alt="" />
                  <img className="sockLogo" src={`/img/images/${sock.image}`} alt="" />
                  <img className="sock" src="/img/sock.png" alt="Готовый носок" />
                </div>
                <br />
                <div className="d-flex flex-column align-items center">
                  <button className="btn btn-success tocart" type="button">В корзину</button>
                  <br />
                  <div className="sharebuttons">
                    <a className="sharebutton whatsapp" rel="nofollow noreferrer" href={`https://api.whatsapp.com/send?text=%D0%9C%D0%BE%D0%B9%20%D0%BD%D0%BE%D1%81%D0%BE%D0%BA%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5%20Enjoy%20socks%20http%3A%2F%2Flocalhost%3A3000%2Fone%2F${sock.id}%20`} target="_blank" />
                    {/* <a className="sharebutton viber" rel="nofollow noreferrer" href={`viber://forward?text=Мой%20носок%20на%20сайте%20Enjoy%20socks%20http%3a%2f%2flocalhost:3000%2fone%2f${sock.id}`} target="_blank" /> */}
                    <a className="sharebutton telegram" rel="nofollow noreferrer" href={`https://t.me/share/url?text=Мой%20носок%20на%20сайте%20Enjoy%20socks&url=http%3a%2f%2flocalhost:3000%2fone%2f${sock.id}`} target="_blank" />
                    <a className="sharebutton facebook" rel="nofollow noreferrer" href={`https://www.facebook.com/sharer.php?src=sp&amp;title=Мой%20носок%20на%20сайте%20Enjoy%20socks%20&amp;url=http%3a%2f%2flocalhost:3000%2fone%2f${sock.id}`} target="_blank" />
                    <a className="sharebutton vk" rel="nofollow noreferrer" href={`https://vk.com/share.php?title=Мой%20носок%20на%20сайте%20Enjoy%20socks%20&amp;url=http%3a%2f%2flocalhost:3000%2fone%2f${sock.id}`} target="_blank" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script defer src="/js/favorites.js" />
    </Layout>
  );
};
