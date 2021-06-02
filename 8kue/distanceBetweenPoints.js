/*
https://www.codewars.com/kata/58dced7b702b805b200000be

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.
*/

function distanceBetweenPoints(a, b) {
   return Math.sqrt(Math.abs(b.x - a.x) ** 2 + Math.abs(b.y - a.y) ** 2);
}