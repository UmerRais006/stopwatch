import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Timer = () => {
  const [inputMinutes, setInputMinutes] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);

      }, 1000);
    }

    if (secondsLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);


 const startTimer = () => {
  const minutes = Number(inputMinutes);
  if (minutes > 0 && minutes <= 60) {
    setSecondsLeft(minutes * 60);
    setIsRunning(true);
  }
};

  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(0);
    setInputMinutes("");
  };

const formatTime = () => {
  const min = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;
  const Min = min < 10 ? "0" + min : min;
  const Sec = sec < 10 ? "0" + sec : sec;

  return Min + ":" + Sec;
};


  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-black">{formatTime()}</h1>




      {!isRunning && secondsLeft === 0 && (
        <div className="mt-4">
          <input
            type="number"
            min="1"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
            placeholder="Enter minutes"
            className="border border-black px-3 py-2  w-40 text-center focus-black rounded-full"
          />
        </div>
      )}



      <div className="mt-6 flex justify-center gap-4 ">
        {!isRunning && secondsLeft === 0 && (
          <button
            onClick={startTimer}
            className="bg-black text-white  hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full"
          >
            Start
          </button>
        )}



        {isRunning && (
          <button
            onClick={pauseTimer}
            className="bg-black text-white  hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full"
          >
            Pause
          </button>
        )}




        {!isRunning && secondsLeft > 0 && (
          <button
            onClick={startTimer}
            className="bg-white text-black  font-semibold px-4 py-2 rounded">
            Resume
          </button>
        )}




        {(secondsLeft > 0 || isRunning) && (
          <button
            onClick={resetTimer}
            className="bg-black text-white  hover:bg-[rgb(201,94,86)] hover:border-2 hover:border-black font-semibold px-4 py-2 rounded-full"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
