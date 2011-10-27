/*jshint nonew: true */
var a = 0;

function NoNew(param) {
  a += 1;

  return "I'm new at this. ";
}

new NoNew();
