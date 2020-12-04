const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
  darkMode: false,
  purge: {
    content: ["./src/**/*.{html,svelte}"],
    enabled: !dev,
  },
};
