import React from 'react';
import { Link } from 'react-router-dom';

function RaisTicket() {
  return (
    <div className="container">
      <div className="row my-5">
        <h4 className="fs-2 text-muted">
          To create a ticket, select a relevant topic
        </h4>
      </div>

      {/* Wrap columns inside a row */}
      <div className="row">
        <div className="col-4 d-flex flex-column gap-3 text-body">
          <a
            href="https://support.zerodha.com/category/your-zerodha-account/login-credentials"
            style={{ textDecoration: 'none', color: 'rgb(54, 54, 54)' }}
          >
            <h5 className="mb-0">
              <i className="fa-solid fa-circle-plus"></i>&nbsp;&nbsp; Account
              Opening
            </h5>
          </a>
          <a href="" className="textDeco">
            Getting started
          </a>
          <a href="" className="textDeco">
            Online
          </a>
          <a href="" className="textDeco">
            Offline
          </a>
          <a href="" className="textDeco">
            Charges
          </a>
          <a href="" className="textDeco">
            Company, Partnership and HUF
          </a>
          <a href="" className="textDeco">
            Non Resident Indian (NRI)
          </a>
        </div>

        <div className="col-4 d-flex flex-column gap-3 text-body">
          <a
            href="https://support.zerodha.com/category/account-opening/getting-started"
            style={{ textDecoration: 'none', color: 'rgb(54, 54, 54)' }}
          >
            <h5 className="mb-0">
              <i class="fa-solid fa-user"></i>&nbsp;&nbsp; Your Zerodha Account
            </h5>
          </a>
          <a href="" className="textDeco">
            Login credentials
          </a>
          <a href="" className="textDeco">
            Your Profile
          </a>
          <a href="" className="textDeco">
            Account modification and segment addition
          </a>
          <a href="" className="textDeco">
            CMR & DP ID
          </a>
          <a href="" className="textDeco">
            Nomination
          </a>
          <a href="" className="textDeco">
            Transfer and conversion of shares
          </a>
        </div>

        <div className="col-4 d-flex flex-column gap-3 text-body ">
          <a
            href="https://support.zerodha.com/category/trading-and-markets/trading-faqs"
            style={{ textDecoration: 'none', color: 'rgb(54, 54, 54)' }}
          >
            <h5 className="mb-0">
              <i class="fa fa-bar-chart" aria-hidden="true"></i>&nbsp;&nbsp;
              Trading and Markets
            </h5>
          </a>
          <a href="" className="textDeco">
            Trading FAQs
          </a>
          <a href="" className="textDeco">
            Kite
          </a>
          <a href="" className="textDeco">
            Margins
          </a>
          <a href="" className="textDeco">
            Product and order types
          </a>
          <a href="" className="textDeco">
            Corporate actions
          </a>
          <a href="" className="textDeco">
            Kite features
          </a>
        </div>

        <div className="col-4 d-flex flex-column gap-3 text-body mt-5">
          <a
            href="https://support.zerodha.com/category/funds/fund-withdrawal"
            style={{ textDecoration: 'none', color: 'rgb(54, 54, 54)' }}
          >
            <h5 className="mb-0">
              <i class="fa fa-credit-card" aria-hidden="true"></i>&nbsp;&nbsp;
              Funds
            </h5>
          </a>
          <a href="" className="textDeco">
            Fund withdrawal
          </a>
          <a href="" className="textDeco">
            Adding funds
          </a>
          <a href="" className="textDeco">
            Adding bank accounts
          </a>
          <a href="" className="textDeco">
            eMandates
          </a>
        </div>

        <div className="col-4 d-flex flex-column gap-3 text-body mt-5">
          <a
            href="https://support.zerodha.com/category/console/ipo"
            style={{ textDecoration: 'none', color: 'rgb(54, 54, 54)' }}
          >
            <h5 className="mb-0">
              <i class="fa-solid fa-circle-notch"></i>&nbsp;&nbsp; Console
            </h5>
          </a>
          <a href="" className="textDeco">
            Console
          </a>
          <a href="" className="textDeco">
            IPO
          </a>
          <a href="" className="textDeco">
            Portfolio
          </a>
          <a href="" className="textDeco">
            Funds statement
          </a>
          <a href="" className="textDeco">
            Profile
          </a>
          <a href="" className="textDeco">
            Reports
          </a>
          <a href="" className="textDeco">
            Referral program
          </a>
        </div>

        <div className="col-4 d-flex flex-column gap-3 text-body mt-5">
          <a
            href="https://support.zerodha.com/category/mutual-funds/understanding-mutual-funds"
            style={{ textDecoration: 'none', color: 'rgb(54, 54, 54)' }}
          >
            <h5 className="mb-0">
              <i class="fa-solid fa-coins"></i>&nbsp;&nbsp; Coin
            </h5>
          </a>
          <a href="" className="textDeco">
            Understanding mutual funds and Coin
          </a>
          <a href="" className="textDeco">
            Coin app
          </a>
          <a href="" className="textDeco">
            Coin web
          </a>
          <a href="" className="textDeco">
            Transactions and reports
          </a>
          <a href="" className="textDeco">
            National Pension Scheme (NPS)
          </a>
        </div>
      </div>
    </div>
  );
}

export default RaisTicket;
