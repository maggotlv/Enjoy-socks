const React = require('react');
const Layout = require('./Layout');

function Home({ title, user }) {
  return (
    <Layout user={user}>
      <div>
        <h2>{title}</h2>
      </div>
    </Layout>
  );
}

module.exports = Home;

