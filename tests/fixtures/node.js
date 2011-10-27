var assert = require('assert');
var dir = __dirname;
var file = __filename;

global.dir = dir;

function Test(a, b) {
  process.stdout.write("testing " + a + " and " + b);
  assert.equal(a, b);
}

module.exports = {
  Test: Test
};

exports.boo = 12;
