/*
https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. 
ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles 
and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and 
John?

Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],
[55,57,58],[55,57,60],[55,58,60],[57,58,60].
The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, 
integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this 
list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or 
equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language.

*/

function chooseBestSum(limit, k, arr) {
   let combinations = k_combinations(arr, k);
   let sums = combinations.map(item => item.reduce((sum, current) => sum + current, 0)).sort((a, b) => a - b);
   if (sums[0] <= limit ) {
      let res = sums.filter(item => item <= limit);
      return res[res.length - 1];
   } else {
      return null;
   }
   

   function k_combinations(arr, k) {
      let i, j, combs, head, tail;

      if (k > arr.length || k <= 0) {
         return [];
      }

      if (k == arr.length) {
         return [arr];
      }

      if (k == 1) {
         combs = [];
         for (i = 0; i < arr.length; i++) {
            combs.push([arr[i]]);
         }
         return combs;
      }

      combs = [];
      for (i = 0; i < arr.length - k + 1; i++) {
         head = arr.slice(i, i + 1);
         tail = k_combinations(arr.slice(i + 1), k - 1);
         for (j = 0; j < tail.length; j++) {
            combs.push(head.concat(tail[j]));
         }
      }
      return combs;
   }
}
