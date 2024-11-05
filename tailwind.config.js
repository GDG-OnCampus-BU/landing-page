/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bg-secondary': '#f0f0f0', // replace with your color
        'border-primary': '#ddd',   // replace with your color
        'muted-foreground': '#888', // replace with your color
        'foreground': '#333',       // replace with your color
        'bg-accent': '#0070f3',     // replace with your color
      },
      screens: {
          'lg': '1210px',
          'md': '1050px',
          'sm': '930px',
          'xs': '400px',
      },
    },
  },
  plugins: [],
};

