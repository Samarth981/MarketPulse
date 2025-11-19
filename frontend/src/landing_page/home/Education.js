import React from 'react';

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="media\images\education.svg"
            alt="Education"
            style={{ width: '70%' }}
          />
        </div>
        <div className="col-6 mt-5">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="textDeco">
            Varsity
            <i
              class="fa fa-long-arrow-right"
              aria-hidden="true"
              style={{ marginLeft: '4px' }}
            ></i>
          </a>
          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="textDeco">
            TradingQ&A
            <i
              class="fa fa-long-arrow-right"
              aria-hidden="true"
              style={{ marginLeft: '4px' }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
