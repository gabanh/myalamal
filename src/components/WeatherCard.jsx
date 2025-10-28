import React from "react";

export default function WeatherCard({ day, temp }) {
  return (
    <div className="bg-white text-burgundy text-center rounded-lg p-4 shadow-md">
      <p className="font-bold">{day}</p>
      <p className="text-xl mt-2">☀️ {temp}°C</p>
    </div>
  );
}
