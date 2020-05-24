module.exports = (env = 'dev') => require(`./config/webpack.${env}.config.js`);
