import { useEffect, useState } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export function UseBitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((res) => res.json())
      .then((result) => {
        //console.log()to check how is the answer from api
        console.log("this is the result from api", result);

        setPrice(result.bitcoin[currency.toLowerCase()]);
        //to lowercase bc the answer from api is lowercase
      });
  }, [currency]);

  return { price, currency };
}

export default UseBitcoinRates;
