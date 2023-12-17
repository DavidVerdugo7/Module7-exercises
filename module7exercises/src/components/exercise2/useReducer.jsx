//this hook is not currrently used, costume hook is working with Bitcoinrates.jsx

import { useEffect, useReducer } from "react"; // first import the usereducer

// here definition of action s
const ACTIONS = {
  SET_PRICE: "SET_PRICE",
  SET_CURRENCY: "SET_CURRENCY",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PRICE:
      return { ...state, price: action.payload };
    case ACTIONS.SET_CURRENCY:
      return { ...state, currency: action.payload };
    default:
      return state;
  }
}

function UseBitcoinRates() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

  //here update usereducer to manage usestate
  const [state, dispatch] = useReducer(reducer, {
    currency: currencies[0],
    price: 0,
  });

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${state.currency}`
    )
      .then((res) => res.json())
      .then((result) => {
        const bitcoinPrice = result.bitcoin[state.currency.toLowerCase()];

        //using dispatch:
        dispatch({ type: ACTIONS.SET_PRICE, payload: bitcoinPrice });
      });
  }, [state.currency]);
  //here return the function and finally export it to beable to use it
  return { price: state.price, currency: state.currency };
}

export default UseBitcoinRates;
