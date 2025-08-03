import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setCurrentDate(new Date().toLocaleDateString());
    }, 500);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex justify-center mt-20 sm:mt-40">
      <div className="w-fit text-center shadow-xl p-4 rounded-full">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-6xl">{currentTime}</h1>
        <p className="text-sm sm:text-base md:text-xl mt-2">{currentDate}</p>
      </div>
    </div>
  );
};

export default Clock;
