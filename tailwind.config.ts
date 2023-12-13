import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: `var(--foreground)`,
      },
      backgroundImage: {
        wheels: "url('/images/bg_wheels.png')",
      },
    },
  },
  plugins: [],
}
export default config
