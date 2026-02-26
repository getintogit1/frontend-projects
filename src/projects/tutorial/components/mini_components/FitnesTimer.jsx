import { useState, useEffect, useRef } from "react";

function FitnesTimer(params) {
  const [pauseDuration, setPauseDuration] = useState(0);
  const [sets, setSets] = useState(0);
  const [setDuration, setSetDuration] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [setPhase, setSetPhase] = useState(false);
  const [pausePhase, setPausePhase] = useState(false);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  // Countdown-Logik
  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s === 0) {
            if (pausePhase) {
              if (sets > 0) {
                setPausePhase(false);
                setSets((se) => (se = se - 1));
                return setDuration;
              } else {
                reset();
              }
            } else {
              setPausePhase(true);
              return pauseDuration;
            }
          }
          return s - 1;
        });
      }, 1000);

      return () => clearInterval(intervalIdRef.current);
    }
  }, [isRunning, pausePhase, pauseDuration, setDuration, sets]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "sets") setSets(value);
    if (name === "pauseDuration") setPauseDuration(value);
    if (name === "setDuration") setSetDuration(value);
  }

  function start(params) {
    setIsRunning(true);
    setSets((s) => (s = s - 1));
    setSeconds(setDuration);
  }

  function pause_timer(params) {
    setIsRunning(false);
  }

  function reset(params) {
    setIsRunning(false);
    setSetDuration(0);
    setPauseDuration(0);
    setSeconds(0);
    setSets(0);
    setPausePhase(false);
  }

  return (
    <div className="card">
      <div className="container">
        <p>
          You have {seconds} remaining on {pausePhase ? "pause" : "set"}
        </p>
        <p> You have {sets} sets to do </p>

        <div className="inputs">
          <label>How many sets</label>
          <input
            type="number"
            name="sets"
            value={sets}
            onChange={handleChange}
          />

          <label>How long for a pause?</label>
          <input
            type="number"
            name="pauseDuration"
            value={pauseDuration}
            onChange={handleChange}
          />

          <label>How long for a set?</label>
          <input
            type="number"
            name="setDuration"
            value={setDuration}
            onChange={handleChange}
          />
          <div className="buttons">
            <button onClick={start} className="secondary-btn">
              Start
            </button>
            <button onClick={pause_timer} className="secondary-btn">
              Pause
            </button>
            <button onClick={reset} className="secondary-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitnesTimer;
