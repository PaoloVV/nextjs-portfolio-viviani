/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        midnight: "rgb(25,25,112)",
        midnightLight: "rgb(25,25,112,0.5)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        my_image: "url('/fotoBackPc.jpg')",
        my_image_mobile: "url('/fotoPc.jpg')",
      },
      boxShadow: {
        neonSky20: "0 0 10px #0369a1, 0 0 20px #0369a1",
        neonSky40: "0 0 10px #0369a1, 0 0 20px #0369a1, 0 0 40px #0369a1",
        neonSky80:
          "0 0 10px #0369a1, 0 0 20px #0369a1, 0 0 40px #0369a1, 0 0 80px #0369a1",
        neonSky160:
          "0 0 10px #0369a1, 0 0 20px #0369a1, 0 0 40px #0369a1, 0 0 80px #0369a1, 0 0 160px #0369a1",
        neonMidnight20: "0 0 10px #191970, 0 0 20px #191970",
        neonMidnight40: "0 0 10px #191970, 0 0 20px #191970, 0 0 40px #191970",
        neonMidnight80:
          "0 0 10px #191970, 0 0 20px #191970, 0 0 40px #191970, 0 0 80px #191970",
        neonMidnight160:
          "0 0 10px #191970, 0 0 20px #191970, 0 0 40px #191970, 0 0 80px #191970, 0 0 160px #191970",
        neonWhite20: "0 0 10px #FFFFFF, 0 0 20px #FFFFFF",
        neonWhite40: "0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 40px #FFFFFF",
        neonwhite80:
          "0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 40px #FFFFFF, 0 0 80px #FFFFFF",
        neonwhite160:
          "0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 40px #FFFFFF, 0 0 80px #FFFFFF, 0 0 160px #FFFFFF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
