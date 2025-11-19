import React, { useState, useContext } from 'react';

import GeneralContext from '../context/GeneralContext';

import { Tooltip, Grow } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { watchlist } from '../data/data';

import { DoughnutChart } from './charts/DoughnutChart';

const labels = watchlist.map((subArray) => subArray['name']);

//chart
const data = {
  labels,
  datasets: [
    {
      label: 'price',
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(76, 175, 80, 0.5)',
        'rgba(244, 67, 54, 0.5)',
        'rgba(33, 150, 243, 0.5)',
        'rgba(255, 193, 7, 0.5)',
        'rgba(156, 39, 176, 0.5)',
        'rgba(0, 188, 212, 0.5)',
        'rgba(255, 152, 0, 0.5)',
        'rgba(139, 195, 74, 0.5)',
        'rgba(233, 30, 99, 0.5)',
      ],
      borderColor: [
        'rgba(46, 125, 50, 1)',
        'rgba(183, 28, 28, 1)',
        'rgba(13, 71, 161, 1)',
        'rgba(255, 143, 0, 1)',
        'rgba(106, 27, 154, 1)',
        'rgba(0, 131, 143, 1)',
        'rgba(230, 81, 0, 1)',
        'rgba(85, 139, 47, 1)',
        'rgba(173, 20, 87, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Main WatchList Component
const WatchList = () => {
  return (
    <div className="watchlist-container">
      {/* Search bar for filtering stocks */}
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        {/* Display count of stocks in the watchlist */}
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      {/* List of stocks */}
      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchlistItem stock={stock} key={index} />
        ))}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

// Individual Watchlist Item Component
const WatchlistItem = ({ stock }) => {
  // State to track if actions should be shown on hover
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  // Show actions when mouse enters the item
  const handleMouseEnter = () => setShowWatchlistAction(true);

  // Hide actions when mouse leaves the item
  const handleMouseLeave = () => setShowWatchlistAction(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        {/* Display stock name with styling based on price movement */}
        <p className={stock.isDown ? 'down' : 'up'}>{stock.name}</p>

        {/* Display stock percentage change and price */}
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" /> // Downward trend
          ) : (
            <KeyboardArrowUpIcon className="up" /> // Upward trend
          )}
          <span>{stock.price}</span>
        </div>
      </div>

      {/* call WatchlistAction */}
      {showWatchlistAction && <WatchlistAction uid={stock.name} />}
    </li>
  );
};

// Individual Watchlist Item hover then show icone
const WatchlistAction = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
