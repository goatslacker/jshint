/*jshint onecase: true */
var a = 1;
var b;

switch (a) {
case 1:
  b = 9000;
  break;
default:
  b = 9001;
}

switch (b) {
case 9000:
  a = 0;
}
