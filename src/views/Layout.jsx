const React = require("react");
const NavBar = require("./NavBar");

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="/css/style.css" rel="stylesheet" />
        <script defer src="/js/client.js" />
        <script defer src="/js/auth.js" />
        <title>{}</title>
      </head>
      <body className="body">
        <div className="container">
          <NavBar user={user} />
          {children}
        </div>
      </body>
    </html>
  );
};

