// Obect structure containing all algorithms to be displayed with Map
// Name of problem = Key
// First element in array is the problem
// Second element is my solution
// Third element is a basic test
// Fourth element is the most complicated solution I can find on leetcode with deep description of how it differs from my solution
let algos = {
  'Leet283': [
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
};
module.exports = algos;