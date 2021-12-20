const path = require('path');
const webpack = require('webpack');

const aliasBase = 'src';
const aliases = {
    'src': aliasBase,
    // '@core': `${aliasBase}/App/core`,
    '@hooks': `${aliasBase}/hooks`,
    '@routes': `${aliasBase}/routes`,
    '@components': `${aliasBase}/components`,
    '@services': `${aliasBase}/services`,
};

const resolvedAliases = Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
    webpack: {
        alias: resolvedAliases,
        plugins: [
            new webpack.ProvidePlugin({
                PropTypes: 'prop-types',
                process: 'process/browser',
            }),
        ],
    },
};
