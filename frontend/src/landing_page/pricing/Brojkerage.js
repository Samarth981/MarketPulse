import React from 'react';

function Brojkerage() {
  return (
    <div className="container ml-4">
      <h2>Charges explained</h2>
      <div className="row mt-5">
        <div className="col">
          <h6>Securities/Commodities transaction tax</h6>
          <p className="BrokerageP">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="BrokerageP">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h6>Transaction/Turnover Charges</h6>
          <p className="BrokerageP">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="BrokerageP">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="BrokerageP">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p className="BrokerageP">
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h6>Call & trade</h6>
          <p className="BrokerageP">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h6>Stamp charges</h6>
          <p className="BrokerageP">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <h6>NRI brokerage charges</h6>
          <ul className="Brokerageli">
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>
          <h6>Account with debit balance</h6>
          <p className="BrokerageP">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
          <ul className="Brokerageli">
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>
          <h6>Margin Trading Facility (MTF)</h6>
          <ul className="Brokerageli">
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li>
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
          </ul>
        </div>
        <div className="col p-4">
          <h6>GST</h6>
          <p className="BrokerageP">
            Tax levied by the government on the services rendered. 18% of
            (brokerage + SEBI charges + transaction charges).
          </p>

          <h6>SEBI Charges</h6>
          <p className="BrokerageP">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h6>DP (Depository Participant) Charges</h6>
          <p className="BrokerageP">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="BrokerageP">
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="BrokerageP">
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <h6>Pledging Charges</h6>
          <p className="BrokerageP">₹30 + GST per pledge request per ISIN.</p>

          <h6>AMC (Account Maintenance Charges)</h6>
          <ul className="Brokerageli">
            <li>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000.
            </li>
            <li>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days).
            </li>
          </ul>

          <h6>Corporate Action Order Charges</h6>
          <p className="BrokerageP">
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>

          <h6>Off-Market Transfer Charges</h6>
          <p className="BrokerageP">₹25 per transaction.</p>

          <h6>Physical CMR Request</h6>
          <p className="BrokerageP">
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>

          <h6>Payment Gateway Charges</h6>
          <p className="BrokerageP">
            ₹9 + GST (Not levied on transfers done via UPI).
          </p>

          <h6>Delayed Payment Charges</h6>
          <p className="BrokerageP">
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
          </p>

          <h6>Trading Using 3-in-1 Account with Block Functionality</h6>
          <ul className="Brokerageli">
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <h6>Disclaimer</h6>
        <p className="BrokerageP">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
      <div className="row mt-5">
        <h4 className="text-muted">Charges for account opening</h4>
        <table
          class="table table-borderless table-striped text-muted fs-6"
          style={{ margin: '40px auto' }}
        >
          <colgroup>
            <col style={{ width: '80%' }} />
            <col style={{ width: '20%' }} />
          </colgroup>
          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span class="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span class="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row mt-4">
        <h4 className="text-muted">
          Charges for optional value added services
        </h4>
        <table className="table table-borderless table-striped text-muted fs-6 mt-5">
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frquency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 2000 | Historical: 2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brojkerage;
