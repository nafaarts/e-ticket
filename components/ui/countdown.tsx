"use client";

import React, { useEffect, useState } from "react";

export default function Countdown() {
  const [seconds, setSeconds] = useState(1800); // jumlah detik

  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [seconds]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-row md:flex-col justify-between items-center text-white">
      <div className="text-xs">
        <p>Waktu yang tersisa untuk memesan tiket</p>
        <small className="md:hidden">proses tiket anda segera :)</small>
      </div>
      <h3 className="text-xl font-semibold">{formatTime(seconds)}</h3>
    </div>
  );
}
