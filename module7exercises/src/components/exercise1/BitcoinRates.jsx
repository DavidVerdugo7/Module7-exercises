import UseBitcoinRates from "../exercise2/UseBitcoinRates";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const { price, currency } = UseBitcoinRates(); // Usando el Custom Hook

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <h2>
        Bitcoin price is: {price} in : {currency}
      </h2>
    </div>
  );
}
