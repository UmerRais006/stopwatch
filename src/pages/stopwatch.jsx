import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [previousTimes, setPreviousTimes] = useState([]);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;
    const Min = min < 10 ? "0" + min : min;
    const Sec = sec < 10 ? "0" + sec : sec;
    return Min + ":" + Sec;

  };

  const Start = () => {
    setIsRunning(true);
  };

  const Pause = () => {
    setIsRunning(false);
    if (seconds > 0) {
      setPreviousTimes((prev) => [...prev, seconds]);
    }
  };

  const Reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const clearHistory = () => {
    setPreviousTimes([]);
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-black">{formatTime(seconds)}</h1>

      <div className="mt-6 flex justify-center gap-4">
        {!isRunning ? (
          <button
            onClick={Start}
            className="bg-black text-white hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full"
          >
            Start
          </button>
        ) : (
          <button
            onClick={Pause}
            className="bg-black text-white hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full"
          >
            Pause
          </button>
        )}

        <button
          onClick={Reset}
          className="bg-black text-white hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full"
        >
          Reset
        </button>
      </div>

      {previousTimes.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Previous Times:</h2>
          <ul className="list-disc list-inside">
            {previousTimes.map((time, index) => (
              <li key={index}>{formatTime(time)}</li>
            ))}
          </ul>

          <button
            onClick={clearHistory}
            className="bg-black text-white hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full mt-4"
          >
            Clear History
          </button>
        </div>
      )}
    </div>
  );
};

export default StopWatch;
