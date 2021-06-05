/*
https://www.codewars.com/kata/5547929140907378f9000039

Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.

*/

function shortcut(string) {
   return string.replace(/[aeiou]/g, '');
}