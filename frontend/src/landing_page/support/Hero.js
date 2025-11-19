import React from 'react';
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href=" " id="supportHeroA">
          Track tickets
        </a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-4">
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div className="search-container">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              className="search-input"
            />
          </div>

          <br />
          <a href="" id="supportHeroA">
            Track account opening
          </a>
          <a href="" id="supportHeroA" className="SupportMargin">
            Track segment activation
          </a>
          <a href="" id="supportHeroA" className="SupportMargin">
            Intraday margins
          </a>
          <a href="" id="supportHeroA" className="SupportMargin">
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" id="supportHeroA">
                Trading holiday on account of Maha Shivaratri on February 26,
                2025
              </a>
            </li>
            <li>
              <a href="" id="supportHeroA">
                Offer for sale (OFS) - February 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
