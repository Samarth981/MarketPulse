require("dotenv").config();
const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_KEY;
const DEFAULT_EXCHANGE = (process.env.DEFAULT_EXCHANGE || "BSE").toUpperCase();
const symbolMap = require("./symbolMap");

const { ValidationError } = require("../utils/ExpressError");

const symbols = [
  "INFY",
  "ONGC",
  "TCS",
  "KPITTECH",
  "QUICKHEAL",
  "WIPRO",
  "RELIANCE",
  "HUL",
];

const toApiSymbol = (symbol) => {
  const mapped = symbolMap[symbol.toUpperCase()] || symbol;
  if (/.(BSE|NSE)$/i.test(mapped)) return mapped;
  return `${mapped}.${DEFAULT_EXCHANGE}`;
};

const cache = {};

router.get("/watchlist", async (req, res) => {
  const results = [];

  for (const symbol of symbols) {
    try {
      const response = await axios.get("https://www.alphavantage.co/query", {
        params: {
          function: "GLOBAL_QUOTE",
          symbol: toApiSymbol(symbol),
          apikey: API_KEY,
        },
        timeout: 15000,
      });

      const data = response.data["Global Quote"];
      if (data) {
        const price = parseFloat(data["05. price"]);
        const change = parseFloat(data["09. change"]);
        const changePercent = data["10. change percent"];

        cache[symbol] = {
          name: symbol,
          price: Number.isFinite(price) ? price : 0,
          percent: changePercent || "0.00%",
          isDown: Number.isFinite(change) ? change < 0 : false,
          lastUpdated: new Date().toISOString(),
        };
      } else {
        console.log("No data returned");
      }
    } catch (err) {
      console.log("data not available");
    }

    // always return cached data if available
    if (cache[symbol]) results.push(cache[symbol]);

    // shorter delay (e.g., 12s) to respect API limits
    await new Promise((r) => setTimeout(r, 12000));
  }

  res.json(results);
});

module.exports = router;
