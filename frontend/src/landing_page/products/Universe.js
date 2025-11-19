import React from 'react';

function Universe() {
  return (
    <div className="container">
      <div className="row p-5 mt-4 text-center">
        <h1 style={{ opacity: 0.9 }}>The Zerodha Universe</h1>
        <p className="mt-3 mb-5 ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <a href="https://smallcase.zerodha.com/">
            <img src="media\images\smallcaseLogo.png" alt="Image" />
          </a>
          <p className="smallPera">
            Thematic investing platform <br /> that helps you invest in
            diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <a href="https://sensibull.com/">
            <img
              src="media\images\sensibullLogo.svg"
              alt="Image"
              className="productMidImg"
            />
          </a>
          <p className="smallPera">
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <a href="https://www.tijorifinance.com/ideas-dashboard/">
            <img
              src="media\images\tijori.svg"
              alt="Image"
              className="productMidImg"
            />
          </a>
          <p className="smallPera">
            Investment research platform <br /> that offers detailed insights on
            stocks, diversified <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="https://www.streak.tech/home">
            <img
              src="media\images\streakLogo.png"
              alt="Image"
              className="productMidImg"
            />
          </a>
          <p className="smallPera">
            Systematic trading platform <br /> that allows you to create and
            backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="https://www.zerodhafundhouse.com/">
            <img
              src="media\images\zerodhaFundhouse.png"
              alt="Image"
              className="productMidImg"
            />
          </a>
          <p className="smallPera">
            Our asset management venture <br /> that is creating simple and
            transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="https://joinditto.in/">
            <img
              src="media\images\dittoLogo.png"
              alt="Image"
              className="productMidImg"
            />
          </a>
          <p className="smallPera">
            Personalized advice on life <br /> and health insurance. No spam{' '}
            <br />
            and no mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary mb-4 mt-5 fs-5"
          style={{ width: '15%', margin: '0 auto' }}
        >
          Sing up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
