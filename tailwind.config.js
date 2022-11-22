/** @type {import('tailwindcss').Config} */

const brandColors = {
  typescript: "#3178C6",
  swift: "#F05138",
  sketch: "#F7B500",
  blender: "#F5792A",
  switch: "#E60012",
  netflix: "#E50914",
  photography: "#0ea5e9",
  twitter: "#1DA1F2",
  github: "#a855f7",
  instagram: "#E4405F",
  email: "#f97316",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    ...Object.entries(brandColors).flatMap(([name]) => [
      `bg-${name}`,
      `text-${name}`,
      `hover:bg-${name}`,
      `hover:text-${name}`,
    ]),
  ],
  theme: {
    extend: {
      colors: {
        ...brandColors,
      },
      animation: {
        fluid: "5s linear 0s infinite alternate fluid",
      },
      keyframes: {
        fluid: {
          "0%": {
            transform: "rotate(0deg) scale(1, 1)",
            filter: "blur(5rem) hue-rotate(0deg)",
          },
          "50%": {
            transform: "rotate(60deg) scale(1.5, 1.2)",
            filter: "blue(10rem) hue-rotate(40deg)",
          },
          "100%": {
            transform: "rotate(90deg) scale(1, 1.5)",
            filter: "blur(8rem) hue-rotate(-30deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
