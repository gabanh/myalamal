/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // <<< חשוב
  theme: {
    extend: {
      colors: {
        // פלטת ים-מודרנית
        skyblue: "#A7D8F0",
        ocean: "#0077B6",
        wave: "#90E0EF",
        sand: "#F8F9FA",
        // פלטת מצב לילה (כהה)
        night: "#1A202C",     // רקע כהה
        mist: "#E2E8F0"       // טקסט בהיר
      }
    }
  },
  plugins: []
};
