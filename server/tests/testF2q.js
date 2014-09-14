var assert = require("assert");
var f2q = require("../lib/f2q.js");
var props = require('../lib/map').props;

describe('f2q', function() {
    describe('#search("/m/02mjmr", "person", cb )', function() {
        this.timeout(15000);

        var response = null;

        it('Should return an json object', function(done) {
            f2q.search("/m/02mjmr", "person", function(res) {
                response = res.result[0];
                assert.notEqual("undefined", response);
                done();
            });
        });

        for (var item in props) {
            var property = props[item];
            it('Should have the property ' + property, function() {
                assert(undefined !== response[property]);
            });

        }

    })
})