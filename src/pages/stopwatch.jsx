import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = () => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const Min = min < 10 ? "0" + min : min;
    const Sec = sec < 10 ? "0" + sec : sec;
    return `${Min}:${Sec}`;
  };

  const Start = () => {
    setIsRunning(true);
  };

  const Pause = () => {
    setIsRunning(false);
  };

  const Reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-black">{formatTime()}</h1>
      <div className="mt-6 flex justify-center gap-4">
        {!isRunning ? (
          <button
            onClick={Start}
            className="bg-black text-white  hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full"
          >
            Start
          </button>
        ) : (
          <button
            onClick={Pause}
            className="bg-black text-white  hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full"
          >
            Pause
          </button>
        )}
        <button
          onClick={Reset}
          className="bg-black text-white  hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
