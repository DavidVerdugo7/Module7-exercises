import { useEmojiContext } from "../exercise3/ContextEmoji";
import UseBitcoinRates from "../exercise2/UseBitcoinRates";
const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function Bitcoinprice() {
  const { price, currency } = UseBitcoinRates(); // Using here the costume hook of btcrates
  const { currentEmoji, changeEmoji } = useEmojiContext(); // using the context from contextemoji

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
      {/* showing emoji */}
      <div>
        <p>Current Emoji: {currentEmoji}</p>
      </div>
    </div>
  );
}
