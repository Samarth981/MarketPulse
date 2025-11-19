import React from 'react';
import Hero from './Hero.js';
import LeftImage from './LeftImage.js';
import RightImage from './RightImage.js';
import Universe from './Universe.js';

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftImage
        imgURL="media\images\kite.png"
        imgeRedirect="https://zerodha.com/products/kite"
        productName="Kite"
        projuctDeccription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trayDemo="https://kite-demo.zerodha.com/"
        learnMore="https://zerodha.com/products/kite"
        googlePlaceStore="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        Appstore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightImage
        imgURL="media\images\varsity.png"
        imgeRedirect="https://zerodha.com/products/console"
        productName="Console"
        projuctDeccription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://zerodha.com/products/console "
      />
      <LeftImage
        imgURL="media\images\coin.png"
        imgeRedirect="https://coin.zerodha.com/"
        productName="Coin"
        projuctDeccription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trayDemo="https://coin.zerodha.com/"
        googlePlaceStore="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        Appstore="https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554"
      />
      <RightImage
        imgURL="media\images\kiteconnect.png"
        imgeRedirect="https://kite.trade/"
        productName="Kite Connect API"
        projuctDeccription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://kite.trade/"
      />
      <LeftImage
        imgURL="media\images\varsity.png"
        imgeRedirect="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        productName="Varsity mobile"
        projuctDeccription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlaceStore="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        Appstore="https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554"
      />
      <p className="text-center fs-5 text-muted fw-medium mb-5">
        Want to know more about our technology stack? Check out the
        <a href="https://zerodha.tech/" className="textDeco px-1">
          Zerodha.tech
        </a>
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
