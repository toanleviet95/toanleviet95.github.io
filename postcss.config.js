/* eslint-disable global-require */
const plugins = [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
];

module.exports = {
    plugins,
};
