import React from 'react';

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero illustration showcasing the home page"
          className="mb-5"
        />
        <h1 className="mt-4">Invest in everything</h1>
        <p className="fs-5 fst-normal text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary mb-5 fs-5"
          style={{ width: '15%', margin: '0 auto' }}
        >
          Singup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
