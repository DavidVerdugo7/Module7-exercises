import { useState } from "react";

export default function Calculator() {
  const [count, setCount] = useState(4);

  function resta() {
    setCount(count - 1);
  }
  function suma() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={resta}>-</button>
      <span>{count}</span>
      <button onClick={suma}>+</button>
    </div>
  );
}
