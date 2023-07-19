/** @type {import('tailwindcss').Config} */

const reservedColors = [
  "neutral",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "indigo",
  "purple",
  "pink",
];

module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    ...reservedColors.flatMap((name) => [
      `text-${name}-500`,
      `bg-${name}-300/10`,
      `dark:bg-${name}-400/10`,
    ]),
  ],
  theme: {},
  plugins: [],
};
