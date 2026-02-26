import React, { useState } from "react";

function Counter(params) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="card bg-[#fec795] p-10 rounded-xl">
      <div className="container items-center justify-center ">
        <div>
          <p className="text-lg font-bold bg-green-75 p-10 rounded-xl">
            {counter}
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            className="w-10 h-10 bg-green-75 flex items-center justify-center rounded-md  hover:bg-green-75/80 transition-colors"
            onClick={incrementCounter}
          >
            +
          </button>
          <button className="secondary-btn" onClick={resetCounter}>
            Reset
          </button>
          <button
            className="w-10 h-10 bg-green-75 flex items-center justify-center rounded-md  hover:bg-green-75/80 transition-colors"
            onClick={decrementCounter}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
