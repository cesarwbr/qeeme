exports.Utils = function Utils() {

	var baseUrl = "https://www.googleapis.com/freebase/v1/mqlread?query=";

	function replaceAll(find, replace, str) {
		return str.replace(new RegExp(find, 'g'), replace);
	}

	function getBaseUrl() {
		return baseUrl;
	}

	return {
		getBaseUrl: getBaseUrl,
		replaceAll: replaceAll
	}
}