import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Alarm = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer); 
  }, []);

  useEffect(() => {
    if (alarmTime) {
      const alarmHour = parseInt(alarmTime.split(":")[0]);
      const alarmMinute = parseInt(alarmTime.split(":")[1]);

      if (
        currentTime.getHours() === alarmHour &&
        currentTime.getMinutes() === alarmMinute &&
        currentTime.getSeconds() === 0
      ) {
        toast.success("Wake Up , Alarm Ringing", {
          position: "top-center",
        });
        setAlarmTime(null);
      }
    }
  }, [currentTime, alarmTime]);

  const formatTime = (time) => {
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    if (hrs < 10) hrs = "0" + hrs;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    return hrs + ":" + mins + ":" + secs;
  };

  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-4">Alarm Clock</h2>
      <p className="text-xl mb-4">Current Time: {formatTime(currentTime)}</p>

      <input
        type="time"
        onChange={(e) => setAlarmTime(e.target.value)}
        className="border border-black px-4 py-2 rounded"
      />

      {alarmTime && (
       <p className="bg-black mt-2 text-[rgb(201,94,86)] font-bold text-center rounded-full px-10 py-4 mx-auto w-fit">
  Alarm set for: {alarmTime}
</p>

      )}

      <ToastContainer />
    </div>
  );
};

export default Alarm;
