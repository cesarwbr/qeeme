var request = require('request'),
    f2q = require('./f2q');

var bindQeeme = function(mid, data, isCached, res) {
    // to support CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.send(f2q.toQeeme(mid, data, isCached));
};

var qeeme = {
    search: function(mid, opt, res) {
        f2q.search(mid, opt, function(mid, data, isCached) {
            bindQeeme(mid, data, isCached, res);
        });
    }
};

module.exports = qeeme;