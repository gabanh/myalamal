import React from "react";

export default function WeatherCard({ day, temp }) {
  return (
    <div className="rounded-2xl p-4 text-center border shadow-sm
                    bg-sand text-ocean border-wave/40
                    dark:bg-night/70 dark:text-mist dark:border-white/10 transition-colors">
      <p className="font-bold">{day}</p>
      <p className="text-xl mt-2">☀️ {temp}°C</p>
    </div>
  );
}
