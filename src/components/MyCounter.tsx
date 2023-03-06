import React, { useState } from "react";

const MyCounter = ({ value = 0 }: {
  value?: number;
}) => {
  const [counter, setCounter] = useState(value);

  const onMinus = () => {
    setCounter((prev) => prev - 1);
  };

  const onPlus = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  );
};

export default MyCounter;
