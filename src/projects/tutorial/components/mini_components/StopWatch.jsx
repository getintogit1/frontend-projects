import React, { useState, useEffect, useRef } from "react";

function StopWatch(params) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0");
    return `${mins}:${seconds}:${milliSeconds}`;
  }

  function start(params) {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop(params) {
    setIsRunning(false);
  }

  function reset(params) {
    setElapsedTime(0);
    setIsRunning(false);
  }

  return (
    <div className="card">
      <div className="">
        <div className="">
          <div className="">{formatTime()}</div>
          <div className="">
            <button onClick={start} className="">
              Start
            </button>
            <button onClick={stop} className="">
              Stop
            </button>
            <button onClick={reset} className="">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
