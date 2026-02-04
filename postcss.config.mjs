/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // On a ajouté @tailwindcss/ devant postcss
    'autoprefixer': {},
  },
};

export default config;
