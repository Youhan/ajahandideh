module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      width: {
        "screen-h": "100vh",
      },
      fontSize: {
        huge: "9rem",
      },
      inset: {
        "1/2": "50%",
      },
    },
    fontFamily: {
      display: ["Lora", "serif"],
      body: ["Rubik", "sans-serif"],
      mono: ["Cousine", "monospace"],
    },
    colors: {
      white: "#ffffff",
      gray: {
        100: "#e8e8e8",
        200: "#d0d0d0",
        300: "#b9b9b9",
        400: "#a2a2a2",
        500: "#8b8b8b",
        600: "#737373",
        700: "#5c5c5c",
        800: "#232323",
        900: "#161616",
      },
      orange: {
        100: "#fffaf0",
        200: "#feebc8",
        300: "#fbd38d",
        400: "#f6ad55",
        500: "#ed8936",
        600: "#dd6b20",
        700: "#c05621",
        800: "#9c4221",
        900: "#7b341e",
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.gray.400"),
          a: {
            color: theme("colors.orange.300"),
            "&:hover": {
              color: theme("colors.orange.500"),
              textDecoration: "underline",
            },
          },
          strong: {
            color: theme("colors.gray.300"),
            fontWeight: "500",
          },
          h1: {
            color: theme("colors.gray.300"),
            fontWeight: "500",
          },
          h2: {
            color: theme("colors.gray.300"),
            fontWeight: "500",
          },
          h3: {
            color: theme("colors.gray.300"),
            fontWeight: "500",
          },
          h4: {
            color: theme("colors.gray.300"),
            fontWeight: "500",
          },
          blockquote: {
            color: theme("colors.gray.500"),
            borderLeftColor: theme("colors.orange.600"),
          },
          "ol > li::before": {
            color: theme("colors.orange.900"),
          },
          "ul > li::before": {
            backgroundColor: theme("colors.orange.900"),
          },
          hr: {
            borderColor: theme("colors.orange.900"),
          },
          "figure figcaption": {
            color: theme("colors.gray.600"),
          },
          code: {
            color: theme("colors.orange.700"),
          },
          pre: {
            color: theme("colors.gray.400"),
            backgroundColor: theme("colors.gray.800"),
            overflowX: "auto",
          },
          thead: {
            color: theme("colors.gray.400"),
            borderBottomColor: theme("colors.gray.700"),
          },
          "tbody tr": {
            borderBottomColor: theme("colors.gray.700"),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
