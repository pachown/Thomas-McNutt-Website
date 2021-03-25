// Obect structure containing all algorithms to be displayed with Map
// Name of problem = Key
// First element in array is the problem
// Second element is my solution
// Third element is a basic test
// Fourth element is the most complicated solution I can find on leetcode with deep description of how it differs from my solution
let algos = {
  'LeetCode #283 Move Zeroes': [
    'Given an array of numbers, write a function to move all the 0\'s to the end while maintaining the relative order of the non-zero elements',
    `My Solution: Var moveZeroes = function(nums) {\n
      let count = 0\n
      for (let i = 0; i < nums.length; i++) {\n
        if (nums[i] === 0) {\n
          nums.splice(i, 1)\n
          count++\n
          i -=1\n
        }\n
      }\n
      while (count > 0) {\n
        nums.push(0)\n
        count--\n
      }\n
      return nums\n
    }\n
    `,
    `Test Input = [0,1,0,3,12]\n
    Test Output = [1,3,12,0,0]\n
    passes 98% faster & 87% less memory`
  ],
  'LeetCode #807 Max Increase To Keep City Skylines': [ `In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well.

  At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

  What is the maximum total sum that the height of the buildings can be increased?`
  ,
  `My Solution: var maxIncreaseKeepingSkyline = function (grid) {
    //find maximums from side and top
    let sideView = new Array(grid.length);
    sideView.fill(0);
    let frontView = new Array(grid.length);
    frontView.fill(0);
    let increases = 0;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] > sideView[i]) {
          sideView[i] = grid[i][j];
        }
        if (grid[i][j] > frontView[j]) {
          frontView[j] = grid[i][j];
        }
      }
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] < sideView[i] && grid[i][j] < frontView[j]) {
          grid[i][j]++;
          increases++
          if (i > 0){
            i--;
          }
            j--;
        }
      }
    }
    return increases;
  };

  console.log(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]));`
  ,
  `
  Runtime: 220 ms, faster than 5.68% of JavaScript online submissions for Max Increase to Keep City Skyline. \n
  Memory Usage: 40 MB, less than 43.67% of JavaScript online submissions for Max Increase to Keep City Skyline.
  `],
'LeetCode #595 Big Countries': [
  `A country is big if it has an area of bigger than 3 million square km or a population of more than 25 million.
  Write a SQL solution to output big countries name, population and area.`,
  `My Solution: SELECT name, population, area FROM world
  WHERE population > 25000000 OR area > 3000000`,
  `Runtime: 220 ms, faster than 87.37% of MySQL online submissions for Big Countries.\n
  Memory Usage: 0B, less than 100.00% of MySQL online submissions for Big Countries.`,
],
'LeetCode #1732 Find The Highest Altitude': [
  `There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

  You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.`,
  `My Solution: var largestAltitude = function(gain) {
    let highest = 0;
    let current = 0;
    for (var i = 0; i < gain.length; i++) {
        current += gain[i];
        if (current > highest) {
            highest = current;
        }
    }
    return highest;
};`,
`Runtime: 80 ms, faster than 61.27% of JavaScript online submissions for Find the Highest Altitude.\n
Memory Usage: 38.9 MB, less than 17.07% of JavaScript online submissions for Find the Highest Altitude.`
],
'LeetCode #55 Jump Game': [` Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position.

 Determine if you are able to reach the last index.

 Example #1

 Input: [2,3,1,1,4]
 Output: true
 Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 Example #2

Input: [3,2,1,0,4]
 Output: false
 Explanation: You will always arrive at index 3 no matter what. Its maximum
              jump length is 0, which makes it impossible to reach the last index.`,
`
My Solution: var canJump = function(nums) {
  let traverse = false;

let recurseTraverse = (position) => {
if (position === nums.length - 1) {
  traverse = true;
  return;
}
for (var i = 1; i <= nums[position]; i++) {
  recurseTraverse(position + i)
}
}
recurseTraverse(0);

return traverse;
};
`,`Time limit exceeded`],
'LeetCode #14 Longest Common Prefix': [`Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".`, `   // I - array of strings
// O - longest shared prefix from strings
// C - N/A
// E - no shared prefix, empty array, single string
var longestCommonPrefix = function(strs) {

//if empty array, or array.length = 1 or no matching prefix, return empty string
if (strs.length === 0) {
    return '';
}
//loop through all, starting with the second index. Compare to first until characters are not matching. Then splice the characters that were matching and use that as the comparison for the next index. Cut the comparison string to match the size of smaller elements so the loop logic still works.
let compare = strs[0];

for (var i = 1; i < strs.length; i++) {
    compare = compare.slice(0, strs[i].length)
    for(var j = 0; j < strs[i].length; j++) {
        if (compare[j] !== strs[i][j]) {
            console.log(strs[i][j])
            compare = strs[i].slice(0, j)
            break;
        }
    }
}
//return the remaining comparison once all is done
return compare;
};`, `Runtime: 92 ms, faster than 43.37% of JavaScript online submissions for Longest Common Prefix.\n
Memory Usage: 40.8 MB, less than 19.62% of JavaScript online submissions for Longest Common Prefix.`],
'LeetCode #53 Maximum Subarray': [`Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,
`// I-array of nums
// O-largest sum of contiguous nums
// C-N/A
// E-empty or 1 element
var maxSubArray = function(nums) {
    //if empty return 0
    if (nums.length === 0) {
        return undefined;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    //if single element return element
    let max = nums[0];
    let current;
    //nested for loop in another for loop to find all possibilities
    for (var i = 0; i < nums.length; i++) {
        current = nums[i];
        for (var j = i; j < nums.length; j++) {
            // console.log(current, i, j)
            if (i !== j) {
               current += nums[j]
            }
                if (current > max) {
                max = current;

            }
        }
    }
    //second loop starts looping at the index of the first so its always contiguous.
    //compare current running total to max total and change if larger
    //return max total
    return max;
};`,`Runtime: 220 ms, faster than 6.02% of JavaScript online submissions for Maximum Subarray.\n
Memory Usage: 39.2 MB, less than 65.96% of JavaScript online submissions for Maximum Subarray.`],
'LeetCode #69': [`Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.`,
`var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x))
};`,`Runtime: 88 ms, faster than 95.01% of JavaScript online submissions for Sqrt(x).\n
Memory Usage: 39.8 MB, less than 83.57% of JavaScript online submissions for Sqrt(x).`],
};
module.exports = algos;