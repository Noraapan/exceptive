import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      animation: {
        "scroll-down": "scrollDown 1.5s infinite",
        rotate: "rotate 1s ease-in-out forwards",
        slideBottom: "slideBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        scrollDown: {
          "0%": { transform: "translateY(-32px)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(65px)" },
        },
        rotate: {
          "0%": { transform: "rotateX(0)" },
          "100%": { transform: "rotateX(-360deg)" },
        },
        slideBottom: {
          "0%": { transform: "translateY(-100px)" },
          "100%": { transform: "translateY(0)" },
        },
      },

      colors: {
        black: {
          50: "#E6E6E6FF",
          100: "#CCCCCCFF",
          200: "#999999FF",
          300: "#666666FF",
          400: "#333333FF",
          500: "#000000FF",
          600: "#000000FF",
          700: "#000000FF",
          800: "#000000FF",
          900: "#000000FF",
          950: "#000000FF",
        },
        blue: {
          50: "#E4E5FBFF",
          100: "#CDD0F9FF",
          200: "#979DF2FF",
          300: "#666EEBFF",
          400: "#2F3BE4FF",
          500: "#1925C0FF",
          600: "#141D99FF",
          700: "#0F1675FF",
          800: "#0A0E4DFF",
          900: "#050829FF",
          950: "#020312FF",
        },
      },
      spacing: {
        xxs: "8px",
        xs: "16px",
        s: "24px",
        sm: "32px",
        m: "40px",
        ml: "48px",
        lg: "64px",
        xl: "80px",
        "2xl": "96px",
        "3xl": "112px",
        "4xl": "128px",
        "5xl": "208px",
        "6xl": "268px",
        "7xl": "320px",
        "8xl": "344px",
        "9xl": "376px",
        "10xl": "431px",
        "11xl": "468px",
      },
      boxShadow: {
        "drop-50": "0 4px 4px 0 rgba(76, 73, 65, 0.5)",
        "inner-25": "inset 0 4px 4px 0 rgba(76, 73, 65, 0.25)",
      },
      borderRadius: {
        32: "32px",
        9: "9px",
        none: "0px",
      },
      fontWeight: {
        regular: "400",
        bold: "700",
        black: "900",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      letterSpacing: {
        cooper: "0px",
      },
      fontSize: {
        h1: ["205px", { lineHeight: "auto", letterSpacing: "0px" }],
        h2: ["85px", { lineHeight: "91px", letterSpacing: "0px" }],
        h3: ["27px", { lineHeight: "auto", letterSpacing: "0px" }],
        body: ["25px", { lineHeight: "auto", letterSpacing: "0px" }],
        link: ["12px", { lineHeight: "auto", letterSpacing: "0px" }],
        bodyDeco: ["21px", { lineHeight: "32px", letterSpacing: "0px" }],
        h1Md: ["110px", { lineHeight: "auto", letterSpacing: "0px" }],
        h2Md: ["56px", { lineHeight: "91px", letterSpacing: "0px" }],
        h1Sm: ["50px", { lineHeight: "auto", letterSpacing: "0px" }],
        h2Sm: ["28px", { lineHeight: "32px", letterSpacing: "0px" }],
        h3Sm: ["18px", { lineHeight: "auto", letterSpacing: "0px" }],
        bodySm: ["12px", { lineHeight: "auto", letterSpacing: "0px" }],
        linkSm: ["10px", { lineHeight: "auto", letterSpacing: "0px" }],
        bodyDecoSm: ["8px", { lineHeight: "auto", letterSpacing: "0px" }],
      },
    },
  },
  plugins: [typography, forms, aspectRatio, containerQueries],
};
