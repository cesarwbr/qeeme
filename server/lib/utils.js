exports.fPath = function fPath(obj,path,prefix){
	if(!!prefix)
		return (obj[prefix+"."+path][path]);
	return (obj[path][path]);
}