/*jshint sub: true */

var foo = {};
var a;

a = typeof foo["name"];
a = typeof foo["BAR"];
a = typeof foo['bar']['baz'];
a = typeof foo['this'].that['for'].hello.world;
