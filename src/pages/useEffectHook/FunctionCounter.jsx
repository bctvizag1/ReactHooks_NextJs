import React, { useState } from "react";

export default function FunctionCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Functional Component </h2>
      <button onClick={incrementCount}>Count :{count} </button>
    </>
  );
}
