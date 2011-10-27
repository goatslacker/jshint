/*jshint shadow: false */

var foo = 1;

function Foo() {
  var foo = 2;

  return function () {
    var foo = 3;
  };
}
