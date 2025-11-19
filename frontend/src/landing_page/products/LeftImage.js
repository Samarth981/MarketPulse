import React from 'react';
function LeftImage({
  imgURL,
  imgeRedirect,
  productName,
  projuctDeccription,
  trayDemo,
  learnMore,
  googlePlaceStore,
  Appstore,
}) {
  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-4 p-5">
          <a href={imgeRedirect}>
            <img src={imgURL} alt="Store" />
          </a>
        </div>
        <div className="col-3"></div>
        <div className="col-5 p-5 mt-5">
          <h1 className="pb-3" style={{ opacity: 0.9 }}>
            {productName}
          </h1>
          <p className="productDec">{projuctDeccription}</p>
          {(trayDemo || learnMore) && (
            <div className="d-flex flex-row">
              {trayDemo && (
                <a href={trayDemo} className="textDeco">
                  Try Demo
                  <i
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                    style={{ marginLeft: '4px' }}
                  ></i>
                </a>
              )}
              {learnMore && (
                <a href={learnMore} className="px-5 mx-5 textDeco">
                  Learn More
                  <i
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                    style={{ marginLeft: '4px' }}
                  ></i>
                </a>
              )}
            </div>
          )}
          <div className="mt-4 d-flex flex-row gap-5">
            <a href={googlePlaceStore}>
              <img src="media\images\googlePlayBadge.svg" alt="Store" />
            </a>
            <a href={Appstore}>
              <img src="media\images\appstoreBadge.svg" alt="Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
