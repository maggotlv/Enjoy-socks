const React = require('react');
const Layout = require('./Layout');

module.exports = function One({ title, user, sock }) {
  return (
    <Layout user={user}>
      <div>
        <h3>{title}</h3>
        <br />
        <h5>{sock.sockname}</h5>
        <br />
        <div className="sock-group-o">
          <div className="sock-card-o">
            <div className="generator">
              <div className="sockBckg" style={{ backgroundColor: `${sock.colour}` }} />
              <img className="sockPattern" src={`/img/patterns/${sock.pattern}`} alt="" />
              <img className="sockLogo" src={`/img/images/${sock.image}`} alt="" />
              <img className="sock" src="/img/sock.png" alt="Готовый носок" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
