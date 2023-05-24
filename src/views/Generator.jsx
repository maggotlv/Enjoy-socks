const React = require('react');
const Layout = require('./Layout');

module.exports = function Generator() {
  return (
    <Layout>
      <h1>Generator</h1>
      <div className="generator-container">
        <div className="generator">
          <div className="sockBckg" style={{background: '#FFFFFF'}}/>
          <img className="sockPattern" src="/img/patterns/gorokhoviy.png" />
          <img className="sockLogo" src="/img/images/кактус.png" />
          <img className="sock" src="/img/sock.png" />
        </div>

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

        <div id="carouselExample-two" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item color active">
              <div  data-color="#FFFFFF" className="color-div" style={{background: '#FFFFFF'}}>Белый</div>
            </div>
            <div className="carousel-item color">
            <div data-color="#FFD407" className="color-div" style={{background: '#FFD407'}}>Желтый</div>
            </div>
            <div className="carousel-item">
            <div data-color="#C707FF" className="color-div" style={{background: '#C707FF'}}>Фиолетовый</div>
            </div>
            <div className="carousel-item">
            <div data-color="#FF8B86" className="color-div" style={{background: '#FF8B86'}}>Розовый</div>
            </div>
            <div className="carousel-item">
            <div data-color="#DAFF86" className="color-div" style={{background: '#DAFF86'}}>Салатовый</div>
            </div>
            <div className="carousel-item">
            <div data-color="#86F4FF" className="color-div" style={{background: '#86F4FF'}}>Голубой</div>
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



      </div>
      <script defer src="/js/generator.js" />

    </Layout>
  );
};
