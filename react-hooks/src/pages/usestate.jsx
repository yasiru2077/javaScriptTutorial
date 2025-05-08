import React from "react";
import { useState } from "react";

function Usestate() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 2);
    setCount((prev) => prev + 2);
  };

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={increaseCount}>increase</button>
    </div>
  );
}

export default Usestate;
