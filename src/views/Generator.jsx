const React = require('react');
const Layout = require('./Layout');

module.exports = function Generator() {
  return (
    <Layout>
      <h1>Генератор</h1>
      <div className="generator-container">
        <div className="sockDiv">
          <div className="generator">
            <div className="sockBckg" style={{ background: 'rgb(255, 255, 255)' }} />
            <img className="sockPattern" src="/img/patterns/gorokhoviy.png" />
            <img className="sockLogo" src="/img/images/cactus.png" />
            <img className="sock" src="/img/sock.png" />
          </div>
          <div className="sockButtons">
            <button id="addFav" className="btn btn-success btn send">Add to favurites</button>
            <button id="addCart" className="btn btn-primary btn send">Add to cart</button>
          </div>
        </div>

        <div className="options">
          <h3>Узор:</h3>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/patterns/gorokhoviy.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/patterns/zvezdniy.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/patterns/nauchniy.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/patterns/sovremenniy.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <h3>Цвет:</h3>
          <div id="carouselExample-two" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item color active">
                <div data-color="rgb(255, 255, 255)" className="color-div" style={{ background: 'rgb(255, 255, 255)' }}>Белый</div>
              </div>
              <div className="carousel-item color">
                <div data-color="rgb(255, 212, 7)" className="color-div" style={{ background: 'rgb(255, 212, 7)' }}>Желтый</div>
              </div>
              <div className="carousel-item color">
                <div data-color="rgb(199, 7, 255)" className="color-div" style={{ background: 'rgb(199, 7, 255)' }}>Фиолетовый</div>
              </div>
              <div className="carousel-item color">
                <div data-color="rgb(255, 139, 134)" className="color-div" style={{ background: 'rgb(255, 139, 134)' }}>Розовый</div>
              </div>
              <div className="carousel-item color">
                <div data-color="rgb(218, 255, 134)" className="color-div" style={{ background: 'rgb(218, 255, 134)' }}>Салатовый</div>
              </div>
              <div className="carousel-item color">
                <div data-color="rgb(134, 244, 255)" className="color-div" style={{ background: 'rgb(134, 244, 255)' }}>Голубой</div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample-two" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample-two" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <h3>Лого:</h3>
          <div id="carouselExample-three" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item logo active">
                <img src="/img/images/cactus.png" className="d-block w-100 imgLogo" alt="..." />
              </div>
              <div className="carousel-item logo">
                <img src="/img/images/duck.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item logo">
                <img src="/img/images/llama.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item logo">
                <img src="/img/images/yoda.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample-three" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample-three" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>
      <script defer src="/js/generator.js" />

    </Layout>
  );
};
