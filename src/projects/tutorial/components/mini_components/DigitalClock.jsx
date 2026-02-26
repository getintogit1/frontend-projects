import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // lets do some code every 1000ms

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  function formatTime() {
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let maridium = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12; // h % 12 = 0 return 12
    return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${maridium}`;
  }

  return (
    <div className="card">
      <div
        className="bg-[url('/assets/background.svg')] bg-center bg-cover
                 flex justify-center items-center w-full h-full"
      >
        <div
          className="font-bold text-[3rem] font-sans text-center py-[10px]
                   backdrop-blur-[100vw]"
        >
          {" "}
          <span>{formatTime()}</span>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
