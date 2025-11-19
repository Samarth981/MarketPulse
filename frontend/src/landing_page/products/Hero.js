import React from 'react';
function Hero() {
  return (
    <div className="container border-bottom">
      <div className="text-center mt-5 p-5">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our
          <a href="" className="textDeco p-1">
            investment offerings
            <i
              class="fa fa-long-arrow-right"
              aria-hidden="true"
              style={{ marginLeft: '4px' }}
            ></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
