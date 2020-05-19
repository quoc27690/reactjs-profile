import React, { useState } from "react";

import Header from "../Header";

import Slide from "react-reveal/Slide";

// const axios = require("axios");

const exchangeRate = {
  VND: {
    USD: 0.000043,
    JPY: 0.0046,
  },
  USD: {
    VND: 23391,
    JPY: 100,
  },
};

function exchange(amount, from, to) {
  return exchangeRate[from][to] * amount;
}

// function exchange(amount, from, to) {
//   return axios.get(
//     `https://nodejs-express-demo-quoc276.herokuapp.com/api/exchange?amount=${amount}&from=${from}&to=${to}`
//   );
// }

export default function MoneyExchange() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("VND");
  const [to, setTo] = useState("USD");
  const [returnedAmount, setReturnedAmount] = useState(null);
  return (
    <div>
      <Header />
      <Slide>
        <div className="container mt-5">
          <h1 className="text-center text-primary">Money Exchange</h1>
          <br />
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <form>
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                  />
                </div>
                <div className="form-group">
                  <label>From</label>
                  <select
                    className="form-control"
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value="VND">VND</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>To</label>
                  <select
                    className="form-control"
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option value="VND">VND</option>
                    <option value="USD">USD</option>
                    <option value="JPY">JPY</option>
                  </select>
                </div>
                <div className="form-group text-center">
                  <button
                    className="form-control btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      const returnedValue = exchange(amount, from, to);
                      setReturnedAmount(returnedValue);
                    }}

                    // Call API
                    // onClick={async (e) => {
                    //   e.preventDefault();
                    //   const res = await exchange(amount, from, to);
                    //   const { returnedAmount } = res.data;
                    //   setReturnedAmount(returnedAmount);
                    // }}
                  >
                    Convert
                  </button>
                  <div>
                    {amount} {from} {to}
                  </div>
                  <div>{returnedAmount}</div>
                </div>
              </form>
            </div>

            <div className="col"></div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
