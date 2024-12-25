import React, { useState } from "react";

function Tutorial() {
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount(0);
  }

  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Tutorial;
