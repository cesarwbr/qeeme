var winston = require('winston');

exports.Logger = function Logger() {

	var logger = new (winston.Logger)({
	    exitOnError: false, //don't crash on exception
	    transports: [
	        new (winston.transports.Console)(), //always use the console
	        new (winston.transports.File)({ filename: 'logs/server.log' }) //log everything to the server.log
	    ]
	});

	function info(data) {
		logger.info(data);
	}

	function error(data) {
		logger.error(data);
	}

	return {
		info: info,
		error: error
	};
}

