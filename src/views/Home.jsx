const React = require('react');
const Layout = require('./Layout');

function Home({ title, user, socksData }) {
  return (
    <Layout user={user}>
      <div className="d-flex flex-column">
        <h3>{title}</h3>
        <h5>Самое время быть уникальным! Смоделируй свою любимую пару носков!</h5>
        <br />
        <div className="home-group row">
          {socksData.map((sock) => (
            <div className="col-sm" key={sock.id} id={sock.id}>
              <div className="shadow d-flex flex-column" key={sock.id} id={sock.id}>
                <div className="generator sock-card-h">
                  <div className="sockBckg" style={{ backgroundColor: `${sock.colour}` }} />
                  <img className="sockPattern" src={`/img/patterns/${sock.pattern}`} alt="" />
                  <img className="sockLogo" src={`/img/images/${sock.image}`} alt="" />
                  <img className="sock" src="/img/sock.png" alt="Готовый носок" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <a href="/socks"><button className="btn btn-lg btn-success mt-3 px-5">Сгенерировать носок</button></a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
