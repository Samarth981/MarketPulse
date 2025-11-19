import React from 'react';

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5">
        <h1>Charges</h1>
        <h3 className="text-muted mt-3 fs-4">List of all charges and taxes</h3>
      </div>
      <div className="row text-center">
        <div className="col-4 p-3">
          <img src="media\images\pricingEquity.svg" alt="Image" />
          <h2 className="text-muted mb-4">Free equity delivery</h2>
          <p className="midPera text-muted lh-base">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\intradayTrades.svg" alt="Image" />
          <h2 className="text-muted mb-4">Intraday and F&O trades</h2>
          <p className="midPera text-muted lh-base">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3 mb-5">
          <img src="media\images\pricingEquity.svg" alt="Image" />
          <h2 className="text-muted mb-4">Free direct MF</h2>
          <p className="midPera text-muted lh-base">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
