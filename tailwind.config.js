// tailwind.config.js
export default {
  content: [
    './index.html',                // ✅ include this!
    './src/**/*.{js,jsx,ts,tsx}',  // ✅ already here
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
