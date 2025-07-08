import { useEffect, useState } from "react";

export const Timer = ({ startSecond = 60 }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Countdown Timer
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          {timeLeft > 0 ? `Time left: ${timeLeft} seconds` : "Time’s up!"}
        </p>
      </div>
    </div>
  );
};
