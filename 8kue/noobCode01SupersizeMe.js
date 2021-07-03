/*
https://www.codewars.com/kata/5709bdd2f088096786000008

Write a function that rearranges an integer into its largest possible value.

Example (Input --> Output)

123456 --> 654321
105 --> 510
12 --> 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

*/

function superSize(num) {
   return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}