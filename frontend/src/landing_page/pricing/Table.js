import React from 'react';
import ChargEquality from './ChargEquality';
import ChargeCurrency from './ChargeCurrency';
import ChargeCommodities from './ChargeCommodities';

function Table({ activeTab }) {
  return (
    <div className="container mt-3">
      {activeTab === 'equity' && <ChargEquality />}
      {activeTab === 'currency' && <ChargeCurrency />}
      {activeTab === 'commodities' && <ChargeCommodities />}
    </div>
  );
}

export default Table;
