import React from 'react';
function RightImage({
  imgURL,
  imgeRedirect,
  productName,
  projuctDeccription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row p-5 mt-4">
        <div className="col-5 p-5">
          <h1 className="pb-3" style={{ opacity: 0.9 }}>
            {productName}
          </h1>
          <p className="productDec">{projuctDeccription}</p>
          <div>
            <a href={learnMore} className="textDeco">
              Learn More
              <i
                class="fa fa-long-arrow-right"
                aria-hidden="true"
                style={{ marginLeft: '4px' }}
              ></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <a href={imgeRedirect}>
            <img src={imgURL} alt="Store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightImage;
