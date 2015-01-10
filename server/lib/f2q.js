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

var imagesToDownload = [];

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
        if (!!queryResult.result) {
            freebase.notable(mid, {}, function(n) {
                queryResult.result[0].notable = n;
                callBack(queryResult);
            });
        } else {
            logger.error("Error to fetch data for mid: " + mid + " Message: " + result.error.message);
            callBack(queryResult);
        }
    });

}

/** 
 * Search information from specific mid
 * @param  {string} mid
 * @param  {string} opt
 * @callback callBack (toQeeme)
 */
exports.search = function search(mid, opt, callBack) {
    client.get('mid:' + mid, function(err, result) {
        //Verify if exist on Redis 
        if (err || !result) {
            if (err) {
                logger.error('[REDIS] Error getting mid: ' + mid + ' Description: ' + err);
            }
            logger.info("Freebase call mid: " + mid);
            //Get mid info from freebase 
            getFromFreebase(mid, opt, function(data) {
                //client.set('mid:' + mid, JSON.stringify(data));
                callBack(mid,data, false);
            });

        } else {
            //Get data from REDIS cache
            result = JSON.parse(result);
            if (result.error !== undefined) {
                logger.error("Error to fetch data for mid: " + mid + " Message: " + result.error.message);
            } else {
                logger.info("Cache call mid: " + mid);
            }
            callBack(mid, result, true);
        }
    });

};

function addImagesToDownload(images) {
    for(i in images) {
        imagesToDownload.push(images[i].mid);
        images[i].src = utils.getImgUrl(images[i].mid);
    }

}

function findImages(prop) {
    for(item in prop) {
        var imgTag = '/common/topic/image';
        if(prop[item].hasOwnProperty(imgTag)) {
            var images = prop[item][imgTag];
            addImagesToDownload(images);
        }
    }
}

/**
 * Convert freebase json to qeeme format
 * @param  {object} data
 * @return {object}
 */
exports.toQeeme = function toQeeme(mid, data, isCached) {

    console.log("IS CACHED: " + JSON.stringify(isCached));
    if (!isCached) {
        if (data.hasOwnProperty('result')) {
            data = data.result[0];
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    switch(property) {
                        case '/common/topic/image' :
                            var images = data[property];
                            addImagesToDownload(images);
                            break;

                        case '/people/person/parents' :
                            var parents = data[property];
                            findImages(parents);
                            break;

                        case '/people/person/children' :
                            var children = data[property];
                            findImages(children);
                            break;
                    }
                    
                }
            }
        }
        
        console.log("Images to download: " + JSON.stringify(imagesToDownload));

        for (var index in imagesToDownload) {
            utils.downloadImg(imagesToDownload[index]);
        }

    logger.info("Saving on Redis ...");
    client.set('mid:' + mid, JSON.stringify(data));
    }

    return data;
};