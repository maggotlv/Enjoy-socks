const React = require('react');
const Layout = require('./Layout');

module.exports = function Error(props) {
  const { title, user } = props;
  return (
    <Layout user={user}>
      <h2>{title}</h2>
      <h3>Ошибка</h3>
      <br />
      <h3>{props.msg}</h3>
      <br />
    </Layout>
  );
};
