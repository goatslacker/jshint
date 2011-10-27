/*jshint eqnull: true */
var foo;
var bar = null;
var baz;

if (foo == null) {
  // do something
}

if (foo == null || bar == null) {
  // do something
}

baz = (foo == null && bar == null) ? 1 : 0;
