// Obect structure containing all algorithms to be displayed with Map
// Name of problem = Key
// First element in array is the problem
// Second element is my solution
// Third element is a basic test
// Fourth element is the most complicated solution I can find on leetcode with deep description of how it differs from my solution
let algos = {
  '3/2/2021-1': [
    'Given an array of numbers, write a function to move all the 0\'s to the end while maintaining the relative order of the non-zero elements',
    `Solution: Var moveZeroes = function(nums) {\n
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
    passes 98% faster & 87% less memory`,
    `Different Solution: Var moveZeroes = function(nums) {\n
      let z = 0\n
      for (let i = 0; i < nums.length; i++) {\n
        if (nums[i] !== 0) {\n
          let tmp = nums[z];\n
          nums[z] = nums[i];\n
          nums[i] = tmp;\n
          z++;\n
        }\n
      }\n
    };\n
  `
  ],
  '3/2/2021-2': [ `In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well.

  At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

  What is the maximum total sum that the height of the buildings can be increased?`
  ,
  `var maxIncreaseKeepingSkyline = function (grid) {
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
  Runtime: 220 ms, faster than 5.68% of JavaScript online submissions for Max Increase to Keep City Skyline.
  Memory Usage: 40 MB, less than 43.67% of JavaScript online submissions for Max Increase to Keep City Skyline.
  `,
  `Another Solution: var maxIncreaseKeepingSkyline = function(grid) {
    var cols = grid[0].map((x,i)=>grid.reduce((a,b)=>Math.max(a,b[i]),0))
    var rows = grid.map(x=>x.reduce((a,b)=>Math.max(a,b)))
    var ret = 0
    for(var i in grid){
        var line = grid[i]
        for(var j in line){
            var block = line[j]
            ret += Math.min(cols[j],rows[i])-block
        }
    }
    return ret
}`],
'3/3/2021-1': [
  `A country is big if it has an area of bigger than 3 million square km or a population of more than 25 million.
  Write a SQL solution to output big countries name, population and area.`,
  `Runtime: 220 ms, faster than 87.37% of MySQL online submissions for Big Countries.
  Memory Usage: 0B, less than 100.00% of MySQL online submissions for Big Countries.`,
  `SELECT name, population, area FROM world
  WHERE population > 25000000 OR area > 3000000`,
  `This solution uses UNION:
  SELECT name, population, area
  FROM World
  WHERE area > 3000000
  UNION
  SELECT name, population, area
  FROM World
  WHERE population > 25000000`
],
'3/3/2021-2': [
  `There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

  You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.`,
  `var largestAltitude = function(gain) {
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
`Runtime: 80 ms, faster than 61.27% of JavaScript online submissions for Find the Highest Altitude.
Memory Usage: 38.9 MB, less than 17.07% of JavaScript online submissions for Find the Highest Altitude.`,
`Spread operator solution: var largestAltitude = function(gain) {
  for(let i=1;i < gain.length;i++) gain[i] += gain[i-1]

  return Math.max(0,...gain)
};
`
]
};
module.exports = algos;