/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
     
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    extend: {},
  },
  plugins: [],
}

