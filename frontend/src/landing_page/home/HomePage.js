import React from 'react';

import Hero from './Hero';
import Awards from './Awards';
import Trust from './Trust';
import Pricing from './Pricing';
import Education from './Education';

import OpenAcc from '../OpenAcc';

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Trust />
      <Pricing />
      <Education />
      <OpenAcc />
    </>
  );
}

export default HomePage;
