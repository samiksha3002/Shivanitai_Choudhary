/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- YAHAN CHANGE HUA HAI
    autoprefixer: {},
  },
};

export default config;