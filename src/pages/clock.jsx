import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString());
    }, 1000);

    return () => clearInterval(timerId);
  },[]);

  return (
    <div className="text-center mt-20 sm:mt-40">
      <h1 className="text-2xl font-bold sm:text-4xl md:text-6xl">{currentTime}</h1>
      <p className="text-sm sm:text-base md:text-xl mt-2">{currentDate}</p>
    </div>
  );
};

export default Clock;
