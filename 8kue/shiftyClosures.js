/*
https://www.codewars.com/kata/514aa0dc21607ae236000017

Functional closures can get overly attached. Set them straight!
Why doesn't greet_abe() actually greet Abe?

*/

var name = 'Abe';
var greet_abe = function () {
   return "Hello, " + name + '!';
};

var greet_ben = function () {
   var name = 'Ben';
   return "Hello, " + name + '!';
};