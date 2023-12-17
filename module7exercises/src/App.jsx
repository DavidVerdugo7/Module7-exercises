import "./App.css";

import Netflux from "./components/Netflux/Netflux";

import Calculator from "./components/Calculator";
import BitcoinRates from "./components/exercise1/BitcoinRates";
import EmojiChanger from "./components/exercise3/Emoji";
import { EmojiProvider } from "./components/exercise3/ContextEmoji";
import Bitcoinprice from "./components/exercise3/Bitcoinprice";

function App() {
  return (
    <>
      <EmojiProvider>
        <EmojiChanger />
        <Bitcoinprice />
      </EmojiProvider>
      <br />
      <BitcoinRates />
      //this component is just practicing the usestate.
      <Calculator />
    </>
  );
}

export default App;
