<<<<<<< HEAD
module.exports = (env = 'dev') => require(`./config/webpack.${env}.config.js`);
=======
module.exports = function (env) {
	if (env === undefined) {
		env = 'dev';
	}
	return require(`./config/webpack.${env}.config.js`);
};
>>>>>>> d2c7d3f9e07f4e2eebc7bd4b3ff23452a523c3c9
