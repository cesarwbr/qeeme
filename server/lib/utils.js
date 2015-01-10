var gm = require('gm').subClass({
    imageMagick: true
});

var https = require('https');
var fs = require('fs');
var logger = require('./logger').Logger();

var BLUR = 2,
    SIZE = 300;


exports.Utils = function Utils() {

    var base = "https://www.googleapis.com/freebase/v1/";
    var baseUrl    = base + "mqlread?query=";
    var baseImgUrl = base + "image"

    function replaceAll(find, replace, str) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    function getBaseUrl() {
        return baseUrl;
    }

    function getImgUrl(imgMid) {
        if(imgMid !== undefined) {
            return "../client/img/mid_imgs/" + replaceAll("/","_", imgMid) + ".png";
        }
    }

    function handleImg(img, x, y) {
        gm(img).resize(x, y).blur(BLUR,BLUR).autoOrient().write(img, function(err) {
            if (err) {
                logger.error("[IMG]" + err);
            } else {
                logger.info("[IMG] Resized img: " + img);
            }
        });
    }

    function downloadImg(mid) {
        var src     = baseImgUrl + mid + "?maxwidth=1600&maxheight=1600";
        logger.info("Downloading: " + src);

        var imgName = replaceAll("/","_", mid),
            path    = "../client/img/mid_imgs/" + imgName +".png",
            file    = fs.createWriteStream(path);

        var request = https.get(src, function(response) {
            response.pipe(file);
            handleImg(path,SIZE,SIZE);
        });
    }

    return {
        getBaseUrl: getBaseUrl,
        getImgUrl: getImgUrl,
        downloadImg: downloadImg,
        replaceAll: replaceAll
    };
};