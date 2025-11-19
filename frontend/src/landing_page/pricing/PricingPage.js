import React, { useState } from 'react';
import Hero from './Hero';
import Table from './Table';
import Brojkerage from './Brojkerage';
import OpenAccount from '../OpenAcc.js';

function PricingPage() {
  const [activeTab, setActiveTab] = useState('equity'); // Default to "equity"

  return (
    <>
      <Hero />

      {/* Navigation Tabs for Changing Tables */}
      <nav className="mt-4 text-center">
        <div className="d-flex justify-content-center gap-4 border-bottom">
          <button
            className={`btn border-0 fs-4 fw-medium ${
              activeTab === 'equity'
                ? 'text-dark border-bottom border-2 border-primary pb-3'
                : 'text-muted'
            }`}
            onClick={() => setActiveTab('equity')}
          >
            Equity
          </button>

          <button
            className={`btn border-0 fs-4 fw-medium ${
              activeTab === 'currency'
                ? 'text-dark border-bottom border-2 border-primary pb-3'
                : 'text-muted'
            }`}
            onClick={() => setActiveTab('currency')}
          >
            Currency
          </button>

          <button
            className={`btn border-0 fs-4 fw-medium ${
              activeTab === 'commodities'
                ? 'text-dark border-bottom border-2 border-primary pb-3'
                : 'text-muted'
            }`}
            onClick={() => setActiveTab('commodities')}
          >
            Commodities
          </button>
        </div>
      </nav>

      {/* Pass the active tab to Table Component */}
      <Table activeTab={activeTab} />

      <OpenAccount />
      <Brojkerage />
    </>
  );
}

export default PricingPage;
