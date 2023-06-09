const React = require('react');
const NavBar = require('./NavBar');
const Footer = require('./Footer');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Jost:ital,wght@0,500;1,100&display=swap" rel="stylesheet" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous" />
        <script defer src="/js/CartFav.js" />
        <link href="/css/style.css" rel="stylesheet" />
        <script defer src="/js/users.js" />
        <title>{}</title>
      </head>
      <body className="body">
        <div className="container">
          <NavBar user={user} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};
