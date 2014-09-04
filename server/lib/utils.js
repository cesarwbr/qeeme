exports.fPath = function fPath() {

	var result;
	var map;

	function bind(key) {
		var path = map[key];
		var p = path.split(".");
		if (p.length > 1)
			return (result[p[0] + "." + p[1]][p[1]]);
		return (result[p[0]][p[0]]);
	}

	function fetch(key,detArr){
		var path = map[key];
		var details = "";
		if(detArr){
			for(var item in detArr){
				details+="("+map[detArr[item]]+")";
			}
		}
		return "( "+path+" "+details+" )";
	}

	function setResult(r){
		result = r;
	}

	function setMap(m){
		map = m;
	}

	return {
		bind:bind,
		fetch:fetch,
		setResult:setResult,
		setMap:setMap
	}
}