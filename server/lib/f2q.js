var utils = require('./utils').Utils();
	logger = require('./logger').Logger(),
	freebase = require('freebase'),
	props = require('./map').props,
	mql_person = require('./mql_person.js').person,
	redis = require('redis'),
	client = redis.createClient();

/**
 * A module that fetch information about specific mid
 * @exports search
 * @exports toQeeme
 * @author  Rafael Gomes
 * @author  Cesar William
 * 
 * @todo  Error handlers
 */

client.on("error", function(err) {
	logger.error("[REDIS] Error: " + err);
});

/**
 * Get mid information from freebase public API
 * @param  {string} mid
 * @param  {string} opt
 * @callback callBack
 * @todo  Other options music, movies ... etc
 */
function getFromFreebase(mid, opt, callBack) {
	var url = utils.getBaseUrl();
	switch (opt) {
		case "person":
			mql_person[0].mid = mid;
			break;

		case "animal":
			return "" //TODO
			break;
	}
	freebase.mqlread(mql_person, {}, function(result) {
		var queryResult = result;
		if (!!queryResult.result){
			freebase.notable(mid, {}, function(n) {
				queryResult.result[0].notable = n;
				callBack(queryResult);
			});
		} else {
			logger.error("Error to fetch data for mid: " + mid + " Message: " + result.error.message );
			callBack(queryResult);
		}
	});

}

/** 
 * Search information from specific mid
 * @param  {string} mid
 * @param  {string} opt
 * @callback callBack
 */
exports.search = function search(mid, opt, callBack) {
	client.get('mid:' + mid, function(err, result) {
		if (err || !result) {
			if(err) {
				logger.error('[REDIS] Error getting mid: ' + mid + ' Description: ' + err);
			}
			logger.info("Freebase call mid: " + mid);
			getFromFreebase(mid, opt, function(data) {
				client.set('mid:' + mid, JSON.stringify(data));
				callBack(data);
			});
		} else {
			result = JSON.parse(result);
			if (result.error !== undefined) {
				logger.error("Error to fetch data for mid: " + mid + " Message: " + result.error.message );
			} else {
				logger.info("Cache call mid: " + mid);
			}
			callBack(result);
		}
	});

};

/**
 * Convert freebase json to qeeme format
 * @param  {object} data
 * @return {object}
 */
exports.toQeeme = function toQeeme(data) {
	data = JSON.stringify(data);
	for (var item in props) {
		data = utils.replaceAll(props[item], item, data);
	}
	data = JSON.parse(data);
	return data;
};
