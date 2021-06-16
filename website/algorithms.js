// Obect structure containing all algorithms to be displayed with Map
// Name of problem = Key
// First element in array is the problem
// Second element is my solution
// Third element is a basic test
// Fourth element is the most complicated solution I can find on leetcode with deep description of how it differs from my solution
let algos = {
    'Leetcode #215 Kth Largest Element in an Array':[`Given an integer array nums and an integer k, return the kth largest element in the array.

    Note that it is the kth largest element in the sorted order, not the kth distinct element.

    `,
    `var findKthLargest = function(nums, k) {
        nums = nums.sort((a,b)=>{return b-a});
        return nums[k-1];
    };`,
    `Runtime: 80 ms, faster than 86.81% of JavaScript online submissions for Kth Largest Element in an Array.\n
    Memory Usage: 40.3 MB, less than 37.36% of JavaScript online submissions for Kth Largest Element in an Array.`,'Javascript'],
  'LeetCode #1200 Minimum Absolute Difference':[`Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

  Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

  a, b are from arr
  a < b
  b - a equals to the minimum absolute difference of any two elements in arr
  `,
  `var minimumAbsDifference = function(arr) {

    //sort the array
    //find the smallest difference between two numbers
    //create a variable to hold pairs of values
    //loop through the array again and push all touples with the smallest diff
    //return pairs of values

    arr = arr.sort((a,b)=> {return a-b});
    let smallest = Infinity
    for(let i = 0; i < arr.length -1; i++) {
        if (Math.abs(arr[i] - arr[i+1]) < smallest)
            {
                smallest = Math.abs(arr[i] - arr[i+1])
            }
    }
    let answer = [];
    for(let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i+1]) === smallest)
            {
                answer.push([arr[i], arr[i+1]]);
            }
    }
    return answer;
};`,
`Runtime: 156 ms, faster than 93.75% of JavaScript online submissions for Minimum Absolute Difference.
Memory Usage: 49.5 MB, less than 48.03% of JavaScript online submissions for Minimum Absolute Difference.`,
`Javascript`],
	'LeetCode #1800 Maximum Ascending Subarray Sum':[`Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.`,
	    `var maxAscendingSum = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    //loop through nums
    //if ascending, count total
    //if descending, compare current total to max, replace if larger, start count again
    //return count;
    let highCount = 0;
    let currCount = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if (nums[i-1] < nums[i]) {
            currCount += nums[i];
        } else {
            if (highCount < currCount) {
                highCount = currCount;
            }
            currCount = nums[i];
        }
    }
       if (highCount < currCount) {
                highCount = currCount;
            }
    return highCount;
};`,
	    `Runtime: 80 ms, faster than 51.75% of JavaScript online submissions for Maximum Ascending Subarray Sum.\n
Memory Usage: 38.6 MB, less than 51.10% of JavaScript online submissions for Maximum Ascending Subarray Sum.`,`Javascript`],
	'LeetCode #442 Find All Duplicates in an Array':[`Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.`,
	    `var findDuplicates = function(nums) {
    //loop through nums
    //store values in object
    //if object has 2 occurances, add it to a list of answer nums
    //return answer nums
    let holding = {};
    let answer = [];
    for(let i = 0; i < nums.length; i++) {
        if(holding[nums[i]] === undefined) {
            holding[nums[i]] = 1;
        } else {
            answer.push(nums[i])
        }
    }
    return answer
};`,
	    `Runtime: 120 ms, faster than 64.67% of JavaScript online submissions for Find All Duplicates in an Array.
Memory Usage: 50 MB, less than 31.19% of JavaScript online submissions for Find All Duplicates in an Array.`,
	    `Javascript`],
  'Added LeetCode #480 Sliding Window Median {HARD}':
  [`The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

  For examples, if arr = [2,3,4], the median is 3.
  For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
  You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

  Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.`,
  `var medianSlidingWindow = function(nums, k) {
    //create an array to hold the answers
    let ans = [];
    //loop through the nums array - k + 1 times
    for(let i = 0; i < nums.length - k + 1; i++) {
        let window = [];
        let median;
        for(let j = 0; j < k; j++) {
            window.push(nums[i + j]);
        }
        window.sort(function(a,b){return a - b});
        if (k % 2 !== 0) {
            median = window[Math.floor(window.length/2)];
        } else {
            median = (window[Math.floor(window.length/2)] +
                window[Math.floor(window.length/2) - 1]) / 2;
        }
        ans.push(median);
    }
  return ans;
};`,
  `Runtime: 9436 ms, faster than 5.60% of JavaScript online submissions for Sliding Window Median.\n
  Memory Usage: 45.9 MB, less than 28.80% of JavaScript online submissions for Sliding Window Median.`,
  `Javascript`],
  'LeetCode #1207 Unique Number of Occurrences':[`Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.`,
  `var uniqueOccurrences = function(arr) {
    //create a holding object to record occurances
    //for loop through the array and push values to the object, recording occurances on repeats
    //push occurance values to an array.
    //if occurance value array has no duplicates, return true, else false

        let occurances = {};
    for(let i = 0; i < arr.length; i++) {
        if (occurances[arr[i]] === undefined) {
            occurances[arr[i]] = 1;
        } else {
            occurances[arr[i]] += 1;
        }
    }
    let occuranceVals = [];
    for (let key in occurances) {
        occuranceVals.push(occurances[key]);
    }
    let ans = new Set(occuranceVals).size === occuranceVals.length;
    return ans;
};`,
  `Runtime: 72 ms, faster than 95.63% of JavaScript online submissions for Unique Number of Occurrences.\n
  Memory Usage: 38.9 MB, less than 76.64% of JavaScript online submissions for Unique Number of Occurrences.`,
  `Javascript`],
  'LeetCode #260. Single Number III':[`Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

  You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

  `,
  `var singleNumber = function(nums) {
    //sort first then determine non-duplicates by checking the value after in a for loop
    nums.sort();
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i + 1] === nums[i]){
            i++;
        } else {
            ans.push(nums[i]);
        }
    }
    return ans;
};`,
`Runtime: 88 ms, faster than 55.19% of JavaScript online submissions for Single Number III.\n
Memory Usage: 39.5 MB, less than 84.43% of JavaScript online submissions for Single Number III.`,`Javascript`],
  'LeetCode #965 Univalued Binary Tree':
  [`A binary tree is univalued if every node in the tree has the same value.

  Return true if and only if the given tree is univalued.`,
  `var isUnivalTree = function(root) {
    //take node of initial value
    //traverse tree entirely
    //if all vals match initial val, return true, else false
    let allSame = true
    let val = root.val;

    let recurse = (node) => {
        if (!node) {
            return;
        }
        if(node.val !== val) {
            allSame = false;
            return;
        }
        recurse(node.left);
        recurse(node.right);
    }
    recurse(root);
    return allSame;
};`,
  `Runtime: 80 ms, faster than 63.74% of JavaScript online submissions for Univalued Binary Tree.\n
  Memory Usage: 39.1 MB, less than 24.54% of JavaScript online submissions for Univalued Binary Tree.
  `,
  `Javascript`],
  'LeetCode #491 Average Salary Excluding the Minimum and Maximum Salary':[`Given an array of unique integers salary where salary[i] is the salary of the employee i.

  Return the average salary of employees excluding the minimum and maximum salary.`,
  `var average = function(salary) {
    let total = (salary.reduce(addTogether) - Math.min(...salary) - Math.max(...salary)) / (salary.length-2);
    return total;
};

var addTogether =  (acc, curr) => acc + curr;`,
  `Runtime: 76 ms, faster than 71.79% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.\n
  Memory Usage: 38.3 MB, less than 65.13% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.`,
  `Javascript`],
  'LeetCode #1002 Find Common Characters':[`Given an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

  You may return the answer in any order.

  `,
  `var commonChars = function(words) {
    let common = words[0].split('').filter(char => {
           for (var i = 1; i < words.length; i++) {
               if (!words[i].includes(char)) return false;
               else {
                   words[i] = words[i].replace(char, '')
               }
           }
           return true;
       })
     return common
   };`,
   `Runtime: 80 ms, faster than 96.80% of JavaScript online submissions for Find Common Characters.
   Memory Usage: 41.8 MB, less than 64.80% of JavaScript online submissions for Find Common Characters.`,
   `Javascript`],
  'LeetCode #999 Available Captures for Rook':[`On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.

  When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking.

  Return the number of available captures for the white rook.`,
  `var numRookCaptures = function(board) {
    //locate Rook (R) location
    let rook = [];
    for(var i = 0; i < 8; i++) {
        for( var j = 0; j < 8; j++) {
            if (board[i][j] === "R") {
                rook = [j, i];
            }
        }
    }
    //find collisions and increment if found
    let collisions = 0;
    let findCollisionTop = (x, y) => {
       if(y < 0) {
           return;
       }
        let pos = board[y][x];
       if(pos === 'p'){
           collisions++;
           return;
       }
        if(pos === 'B'){
            return;
        }
        findCollisionTop(x, y - 1);
    }

    let findCollisionRight = (x, y) => {
        if (x > 7) {
            return;
        }
        let pos = board[y][x];
        if(pos === 'p') {
            collisions++;
            return;
        }
        if(pos === 'B') {
            return;
        }
        findCollisionRight(x + 1, y);
    }

    let findCollisionLeft = (x, y) => {
        if (x < 0) {
            return;
        }
        let pos = board[y][x];
        if(pos === 'p') {
            collisions++;
            return;
        }
        if(pos === 'B') {
            return;
        }
        findCollisionLeft(x - 1, y);
    }
    let findCollisionBottom = (x, y) => {
        if(y > 7) {
           return;
       }
        let pos = board[y][x];
       if(pos === 'p'){
           collisions++;
           return;
       }
        if(pos === 'B'){
            return;
        }
        findCollisionBottom(x, y + 1);

    }
    findCollisionTop(rook[0], rook[1]);
    findCollisionRight(rook[0], rook[1]);
    findCollisionLeft(rook[0], rook[1]);
    findCollisionBottom(rook[0], rook[1]);

    return collisions;
};`,
`Runtime: 76 ms, faster than 67.92% of JavaScript online submissions for Available Captures for Rook.
Memory Usage: 38.5 MB, less than 42.14% of JavaScript online submissions for Available Captures for Rook.`,
`Javascript`],
  'LeetCode #509 Fibonacci Number': [`The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,`,
  `public class Solution {
    public int Fib(int n) {
        if (n == 0)
        {
            return 0;
        }
        if (n == 1)
        {
            return 1;
        }
        int[] previousNums = new int[] {0,1};
        int curr = 1;
        while (curr != n)
        {
            int holding = previousNums[0] + previousNums[1];
            previousNums[0] = previousNums[1];
            previousNums[1] = holding;
            curr++;
        }
        return previousNums[1];
    }
}`,
`Runtime: 40 ms, faster than 71.36% of C# online submissions for Fibonacci Number.
Memory Usage: 15.3 MB, less than 35.64% of C# online submissions for Fibonacci Number.`,
`C#`],
  'LeetCode #229 Majority Element II':[
    `Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.`,
  `var majorityElement = function(nums) {
    //create array to hold values that appear more than nums.length/3 times
    let storage = {};
    let vals = [];
    for (let i = 0; i < nums.length; i++) {
        if (storage[nums[i]] === undefined) {
            storage[nums[i]] = 1;
        }else {
            storage[nums[i]]++;
        }
    }
    let majority = nums.length/3;
    for(let key in storage) {
        if (storage[key] > majority) {
            vals.push(key);
        }
    }
    return vals;
};`,
  `Runtime: 80 ms, faster than 90.12% of JavaScript online submissions for Majority Element II.
  Memory Usage: 40.3 MB, less than 76.13% of JavaScript online submissions for Majority Element II.`,
  `Javascript`],
  'LeetCode #596 Classes More Than 5 Students':[`There is a table courses with columns: student and class

  Please list out all classes which have more than or equal to 5 students.`,
  `select class from courses group by class having count(distinct student) >= 5;`,
  `Runtime: 560 ms, faster than 5.00% of MySQL online submissions for Classes More Than 5 Students.\n
  Memory Usage: 0B, less than 100.00% of MySQL online submissions for Classes More Than 5 Students.`,
  `SQL`],
	'LeetCode #374 Guess Number Higher or Lower':[`We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns 3 possible results:

    -1: The number I picked is lower than your guess (i.e. pick < num).
    1: The number I picked is higher than your guess (i.e. pick > num).
    0: The number I picked is equal to your guess (i.e. pick == num).

Return the number that I picked.`,
	`var guessNumber = function(n) {
    if (guess(n) === 0) {
        return n;
    }
    let top = n;
    let bottom = 1;
    let attempt = Math.floor((top + bottom) /2);
    let res = guess(attempt);

    while(res !== 0) {
        if (res === 1) {
            bottom = Math.floor((top + bottom) /2);
            attempt = Math.floor((top + bottom) /2);
            res = guess(Math.floor((top + bottom) /2));
        } else {
            top = Math.floor((top + bottom) /2);
            attempt = Math.floor((top + bottom) /2);
             res = guess(Math.floor((top + bottom) /2));
        }
    }
    return attempt;

};`,
	 `Runtime: 88 ms, faster than 9.64% of JavaScript online submissions for Guess Number Higher or Lower.\n
Memory Usage: 38.5 MB, less than 27.13% of JavaScript online submissions for Guess Number Higher or Lower.`,
	 `Javascript`],
	'LeetCode #367 Valid Perfect Square':[`Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.`,
	`var isPerfectSquare = function(num) {
return (num ** (1/2)) % 1 === 0;
};`,
 `Runtime: 100 ms, faster than 16.84% of JavaScript online submissions for Valid Perfect Square.\n
Memory Usage: 38.3 MB, less than 86.04% of JavaScript online submissions for Valid Perfect Square.`,
`Javascript`],
	'Leetcode #344 Reverse String':[`Write a function that reverses a string. The input string is given as an array of characters s.`,
	`var reverseString = function(s) {
    return s.reverse();

};`,
	`Runtime: 100 ms, faster than 95.99% of JavaScript online submissions for Reverse String.\n
Memory Usage: 45.3 MB, less than 97.39% of JavaScript online submissions for Reverse String.`,
	`Javascript`],
  'LeetCode #290 Word Pattern':[`Given a pattern and a string s, find if s follows the same pattern.

  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.`,
  `var wordPattern = function(pattern, s) {
    //separate pattern and s into arrays of individual strings
    let splitPattern = pattern.split("");
    let splitS = s.split(" ");

    if (splitPattern.length !== splitS.length) {
        return false;
    }

    let values = {};

    //forEach loop through array
        //insert pattern & s combos into an object if the key doesn't exist already.
        //if key exists but is a different combination, return false;

    for (let i = 0; i < splitPattern.length; i++) {
        if (values[splitPattern[i]] === undefined || values[splitPattern[i]] === splitS[i]) {
            values[splitPattern[i]] = splitS[i];
        } else {
            return false;
        }
    }

let uniqPattern = [... new Set(splitPattern)];
let uniqS = [... new Set(splitS)];
if (uniqPattern.length === uniqS.length) {
    return true;
} else {
    return false;
}
};`,
`Runtime: 76 ms, faster than 72.01% of JavaScript online submissions for Word Pattern.\n
Memory Usage: 38.1 MB, less than 91.98% of JavaScript online submissions for Word Pattern.`,
`Javascript`],
	'LeetCode #326 Power of Three': [
`Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.`,
`public class Solution {
    public bool IsPowerOfThree(int n) {
        if (n == 0) {
            return false;
        }
        if (n == 1) {
            return true;
        }
        bool isPower;

        void Recurse(double num){
            if (num == 1) {
                isPower = true;
                return;
            } else if (num < 3) {
                isPower = false;
            } else {
                Recurse(num/3);
            }
        }
        Recurse(Convert.ToDouble(n));

        return isPower;
    }
}`,
`Runtime: 76 ms, faster than 79.11% of C# online submissions for Power of Three.
Memory Usage: 17.4 MB, less than 44.74% of C# online submissions for Power of Three.`,
`C#`],
	'LeetCode #1 Two Sum':[`Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
`public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        //create a loop
        //search for index of num that will hit target.
        //if hit, return array with loop index and the indexOf index
        int[] answer = new int[2];
        for (int i = 0; i < nums.Length; i++) {
            int findSolution = Array.IndexOf(nums, target - nums[i]);
            if (findSolution == i) {findSolution = -1;}
            if (findSolution != -1)
            {
                answer[0] = i;
                answer[1] = findSolution;
                break;
            }
        }
        return answer;

    }
}`,
 `Runtime: 236 ms, faster than 82.66% of C# online submissions for Two Sum.
Memory Usage: 31.5 MB, less than 88.96% of C# online submissions for Two Sum.`,
 `C#`],
  'LeetCode #342 Power of Four': [`Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.`,`public class Solution {
    public bool IsPowerOfFour(int n) {
        if (n == 0) {
            return false;
        }
        if (n == 1) {
            return true;
        }
        bool answer = false;

        void Recurse(double num) {
            num = num / 4;
            if (num == 1) {
                answer = true;
            } else
            if (num < 4) {
                answer = false;
            } else {
        Recurse(Convert.ToDouble(num));
            }
        }
        Recurse(n);
        return answer;
    }
}`,
 `Runtime: 32 ms, faster than 100.00% of C# online submissions for Power of Four.
Memory Usage: 15.4 MB, less than 53.52% of C# online submissions for Power of Four.`,
 `C#`],
  'Leetcode #806 Number of Lines To Write String': [`You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.

Return an array result of length 2 where:

    result[0] is the total number of lines.
    result[1] is the width of the last line in pixels.
`,
     `public class Solution {
   public int[] NumberOfLines(int[] widths, string S)
{
		Int32 row = 1;
		Int32 sum = 0;
		Int32 temp = 0;

		Char[] c = S.ToCharArray();
		foreach(Char _c in c)
		{
				temp = widths[_c - 97];
				if (sum + temp > 100)
				{
						row++;
						sum = temp;
				}
				else
				{
						sum += temp;
				}
		}

		return new int[2] { row, sum };
}
}`,
    `Runtime: 380 ms, faster than 8.16% of C# online submissions for Number of Lines To Write String.\n
Memory Usage: 30.4 MB, less than 82.65% of C# online submissions for Number of Lines To Write String.`,
    `C#`],
  'LeetCode #824 Goat Latin': [`A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

    If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
    For example, the word 'apple' becomes 'applema'.

    If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
    For example, the word "goat" becomes "oatgma".

    Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
    For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.

Return the final sentence representing the conversion from S to Goat Latin. `,
   `var toGoatLatin = function(S) {
    let words = S.split(" ");
    let answers = [];
    let i = 1;
    words.forEach((word) => {
        if (word[0].toLowerCase() === 'a' || word[0].toLowerCase() === 'e' || word[0].toLowerCase() === 'i' || word[0].toLowerCase() === 'o' || word[0].toLowerCase() === 'u') {
            word += 'ma';
        } else {
            let letter = word.slice(0, 1);
            word = word.slice(1, word.length)
            word += letter + 'ma';
        }
        word += addA(i);
            i++;
        answers.push(word);
    })
    return answers.join(" ");
};

var addA = function(times){
    let response = '';
    for (var i = 0; i < times; i++){
        response += 'a';
    }
    return response;
}`,
  `Runtime: 80 ms, faster than 63.43% of JavaScript online submissions for Goat Latin.
Memory Usage: 38.4 MB, less than 96.76% of JavaScript online submissions for Goat Latin.`,
  `Javascript`],
  'Leetcode #682 Baseball Game':[`You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

    An integer x - Record a new score of x.
    "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
    "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
    "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

Return the sum of all the scores on the record.`,
  `var calPoints = function(ops) {
    let record = ops.slice();
    for (let i = 1 ; i < ops.length; i++) {
        if ( record[i] === 'C'){
            console.log(record, i)
            record.splice([i - 1], 2);
            i -= 2;
        }
        if (record[i] === 'D'){
            record[i] = record[i-1]*2;
            }
        if (record[i] === '+'){
            record[i] = parseInt(record[i-2]) + parseInt(record[i-1]);
        }

    }
    let big = 0;
    record.reduce((total, score) => {
        big += parseInt(score)}, 0)
    return big;
};`,
   `Runtime: 160 ms, faster than 6.93% of JavaScript online submissions for Baseball Game.
Memory Usage: 47.5 MB, less than 5.82% of JavaScript online submissions for Baseball Game.`,
  `Javascript`],
  'Leetcode #104 Maximum Depth of Binary Tree':[`Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
   `var maxDepth = function(root) {
    let answer = 0;
    if (!root) {
        return 0;
    }
    let recurse = (node, depth)=>{
        if (!node) {
            return;
        }
        if (depth > answer) {
            answer = depth;
        }
      recurse(node.left, depth + 1);
      recurse(node.right, depth + 1);
    }
    recurse(root, 1);
    return answer;
};`,
     `Runtime: 88 ms, faster than 62.26% of JavaScript online submissions for Maximum Depth of Binary Tree. \n
Memory Usage: 41.5 MB, less than 60.10% of JavaScript online submissions for Maximum Depth of Binary Tree.`,`Javascript`],
  'Leetcode #728 Self Dividing Numbers':[` A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible. `,
    `var selfDividingNumbers = function(left, right) {
    let allAnswers = [];
    for(var i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            allAnswers.push(i);
        };
    }
 return allAnswers;
};

var isSelfDividing = (num) => {
    let digits = Array.from(String(num), Number);
    let legit = true
    // console.log(digits, num, num % digit);
    digits.forEach((digit) => {
        if (num % digit !== 0 || num === 0){
            legit = false;
            }
    })
    return legit;
}`,
    `Runtime: 84 ms, faster than 67.29% of JavaScript online submissions for Self Dividing Numbers.
Memory Usage: 44.4 MB, less than 15.96% of JavaScript online submissions for Self Dividing Numbers.`],
  'LeetCode #136 Single Number': [`Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?`,
  `var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0];
    let storage = {};
    for(let i = 0; i < nums.length; i++) {
        if (storage[nums[i]] === undefined) {
            storage[nums[i]] = 1;
        } else {
            storage[nums[i]] = 2;
        }
    }

    for(let key in storage) {

        if (storage[key] === 1) {
            return key;
        }
    }
};`,
`Runtime: 100 ms, faster than 38.20% of JavaScript online submissions for Single Number.\n
Memory Usage: 44.2 MB, less than 33.71% of JavaScript online submissions for Single Number.`,'Javascript'],
  'LeetCode #1281 Subtract the Product and Sum of Digits of an Integer':[`Given an integer number n, return the difference between the product of its digits and the sum of its digits.`,
   `var subtractProductAndSum = function(n) {
    let sum = 1;
    let product = 0;
    let separate = JSON.stringify(n).split("");
    for(var i = 0; i < separate.length; i++) {
        sum *= parseInt(separate[i]);
        product += parseInt(separate[i]);
    }
    return sum-product;
};`,
   `Runtime: 84 ms, faster than 15.24% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer. \n
Memory Usage: 38.5 MB, less than 87.68% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.`,'Javascript'],
  'LeetCode #559 Maximum Depth of N-ary Tree': [`Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
`var maxDepth = function(root) {
   if (!root) {
       return 0;
   }
    let max = 1;

    let searchTree = (node, curr) => {
        if (!node || node.children.length === 0) {
                if (curr > max) {
                max = curr;
            }
        } else {
           node.children.forEach(child => searchTree(child, curr + 1));
        }
    }
    searchTree(root, max);
    return max;
};`,
   `Runtime: 88 ms, faster than 86.23% of JavaScript online submissions for Maximum Depth of N-ary Tree. \n
Memory Usage: 41.6 MB, less than 69.15% of JavaScript online submissions for Maximum Depth of N-ary Tree.`,'Javascript'],
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
    ,'Javascript'],
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
  };`
  ,
  `
  Runtime: 220 ms, faster than 5.68% of JavaScript online submissions for Max Increase to Keep City Skyline. \n
  Memory Usage: 40 MB, less than 43.67% of JavaScript online submissions for Max Increase to Keep City Skyline.
  `,'Javascript'],
'LeetCode #595 Big Countries': [
  `A country is big if it has an area of bigger than 3 million square km or a population of more than 25 million.
  Write a SQL solution to output big countries name, population and area.`,
  `My Solution: SELECT name, population, area FROM world
  WHERE population > 25000000 OR area > 3000000`,
  `Runtime: 220 ms, faster than 87.37% of MySQL online submissions for Big Countries.\n
  Memory Usage: 0B, less than 100.00% of MySQL online submissions for Big Countries.`,'Javascript'
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
Memory Usage: 38.9 MB, less than 17.07% of JavaScript online submissions for Find the Highest Altitude.`,
'Javascript'
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
`,`Time limit exceeded`,'Javascript'],
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
Memory Usage: 40.8 MB, less than 19.62% of JavaScript online submissions for Longest Common Prefix.`,'Javascript'],
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
Memory Usage: 39.2 MB, less than 65.96% of JavaScript online submissions for Maximum Subarray.`,'Javascript'],
'LeetCode #69': [`Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.`,
`var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x))
};`,`Runtime: 88 ms, faster than 95.01% of JavaScript online submissions for Sqrt(x).\n
Memory Usage: 39.8 MB, less than 83.57% of JavaScript online submissions for Sqrt(x).`,'Javascript'],
  'LeetCode #704 Binary Search': [`Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.`,
  `var search = function(nums, target) {
let left = 0
let right = nums.length -1
while (left <= right) {
    let pivot = Math.floor((left+right)/2)
    if (nums[pivot] === target) {
        return pivot;
    }
    if (target < nums[pivot]) {
        right = pivot - 1
    } else {
       left = pivot + 1
    }

}
return -1
};`,
  `Runtime: 80 ms, faster than 80.58% of JavaScript online submissions for Binary Search.\n
  Memory Usage: 42.8 MB, less than 9.15% of JavaScript online submissions for Binary Search.`,'Javascript'],
  'LeetCode #237 Delete Node in a Linked List without head' : [`Write a function to delete a node in a singly-linked list.
You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
It is guaranteed that the node to be deleted is not a tail node in the list.`,
`var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};`,
`Runtime: 88 ms, faster than 68.33% of JavaScript online submissions for Delete Node in a Linked List.
Memory Usage: 40.4 MB, less than 74.28% of JavaScript online submissions for Delete Node in a Linked List.`,'Javascript'],
  'LeetCode #203 Remove Linked List Elements': [`Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.`,
                                                `var removeElements = function(head, val) {
    if (head === null) {
        return head;
    }
   let node = head;
    while (head.val === val) {
        if (head.next === null) {
            head.val = null
            return null;
        }
        head = head.next;
    }

    let recurse = (node) => {
        if (!node) {
            return;
        }
        if (node.next === null) {
            return;
        }
        if (node.next.val === val) {
            node.next = node.next.next
            recurse(node)
        } else {
            recurse(node.next)
        }
    }
    recurse(head);

    return head;
};`,
 `Runtime: 100 ms, faster than 55.45% of JavaScript online submissions for Remove Linked List Elements. \n
Memory Usage: 44.5 MB, less than 5.67% of JavaScript online submissions for Remove Linked List Elements.`,'Javascript'],
'LeetCode #217 Contains Duplicate': [`Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.`,
`var containsDuplicate = function(nums) {
  let uniqs = {};
  for(var i = 0; i < nums.length; i++) {
      if (uniqs[nums[i]] === undefined) {
          uniqs[nums[i]] += 1;
      } else {
          return true;
      }
  }
  return false;
};`,
`Runtime: 92 ms, faster than 56.36% of JavaScript online submissions for Contains Duplicate.\n
Memory Usage: 47.5 MB, less than 11.06% of JavaScript online submissions for Contains Duplicate.`,'Javascript'],
  'LeetCode #292 Nim Game': [`You are playing the following Nim Game with your friend:

Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.`,
`var canWinNim = function(n) {
    return n%4 !== 0
};`,
`Runtime: 68 ms, faster than 95.36% of JavaScript online submissions for Nim Game.\n
Memory Usage: 38.4 MB, less than 44.37% of JavaScript online submissions for Nim Game.`,'Javascript'],
  'LeetCode #100 Same Tree': [`Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.`,
`var isSameTree = function(p, q) {
    //traverse tree the same way with both trees at the same time. If anything isn't identical, return.
    let same = true;

    let searchTree = (pNode, qNode) => {
  console.log(pNode, qNode)
        if (pNode === null && qNode !== null) {
            same = false;
            return;
        }
        if (pNode !== null && qNode === null) {
            same = false;
            return;
        }
        if (pNode === null && qNode === null) {
            return;
        }

        if (pNode.val !== qNode.val) {
            same = false;
            return;
        }
        searchTree(pNode.left, qNode.left);
        searchTree(pNode.right, qNode.right)
    }
    searchTree(p, q);
    return same;
};`,
`Runtime: 100 ms, faster than 5.84% of JavaScript online submissions for Same Tree.\n
Memory Usage: 42.1 MB, less than 6.59% of JavaScript online submissions for Same Tree.`,'Javascript'],
  'Binary Search Find Local Peaks': [`You are given a list of integers nums. Return the index of every peak in the list, sorted in ascending order. An index i is called a peak if`,
                                     `class Solution {
    solve(nums) {
        if(nums.length === 0 || nums.length === 1) {
            return [];
        }
        let peaks = [];
        for(let i = 0; i < nums.length; i++) {
            if (i === 0 && nums[i] > nums[i+1]){
                peaks.push(i);
            } else if (i === nums.length-1 && nums[i] > nums[i-1]){
                peaks.push(i);
            } else if (nums[i-1] < nums[i] && nums[i] > nums[i+1]) {
                peaks.push(i)
            }

        }
        return peaks;

    }
}`,
                                     `ThomasMcNutt solved Find Local Peaks in 17ms in javascript — faster than 93.75%`,'Javascript'],
  'Binary Search Kth Smallest in a Binary Search Tree': [`Given a binary search tree root, and k return the kth (0-indexed) smallest value in root. It is guaranteed that the tree has at least k + 1 nodes.`,
                                                         `class Solution {
    solve(root, k) {
        let vals = [];

        let traverse = (node) => {
            if(!node){
                return;
            }
            vals.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(root);

        vals.sort(function(a,b){return a-b});
        return vals[k];
    }
}`,
`ThomasMcNutt solved Kth Smallest in a Binary Search Tree in 2ms in javascript — faster than 45.45%`,'Javascript'],
'LeetCode #303 Range Sum Query - Immutable' : [`Given an integer array nums, find the sum of the elements between indices left and right inclusive, where (left <= right).`,
`var NumArray = function(nums) {
  this.nums = nums;
};

NumArray.prototype.sumRange = function(left, right) {
  let total = 0;
  for(let i = left; i <= right; i++) {
      total += this.nums[i];
  }
  return total;
};`,`Runtime: 172 ms, faster than 35.61% of JavaScript online submissions for Range Sum Query - Immutable. \n
Memory Usage: 45.6 MB, less than 50.47% of JavaScript online submissions for Range Sum Query - Immutable.`,'Javascript'],
'LeetCode #1154 Day of the Year' : [`Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.`,
`var dayOfYear = function(date) {
  let monthsTotaled = [0, 31, 59, 90, 120, 151, 181, 212,243,273,304,334]
  let month = parseInt(date.slice(5,7)) -1;
  if (month < 10){
      month === date.slice(6,7) - 1;
  }
  let year = parseInt(date.slice(0,5));
  let leapYear = year % 4 === 0 && month > 1 ? true : false;
  if (year % 100 === 0 && year % 400 !== 0) {
      leapYear = false;
  }
  let day = parseInt(date.slice(8));
  day = leapYear ? day += 1 : day;
  return monthsTotaled[month] + day;
};`,
`Runtime: 84 ms, faster than 50.49% of JavaScript online submissions for Day of the Year.\n
Memory Usage: 38.6 MB, less than 87.38% of JavaScript online submissions for Day of the Year.`,'Javascript'],
'LeetCode #1160 Find Words That Can Be Formed by Characters' : [`You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.`,`var countCharacters = function(words, chars) {
  //create length variable
  let len = 0;

  //for loop through the words array
  for( let i = 0; i < words.length; i++) {
      let charsArr = chars.split('');
      for (let j = 0; j < words[i].length; j++) {
          let index = charsArr.indexOf(words[i][j]);
          if(index !== -1) {
              charsArr.splice(index, 1);
          } else {
              break;
          }
          if (j + 1 === words[i].length) {
              console.log(words[i])
              len += words[i].length;
          }
      }
  }
  return len;
};`,
`Runtime: 128 ms, faster than 70.59% of JavaScript online submissions for Find Words That Can Be Formed by Characters. \n
Memory Usage: 46.4 MB, less than 70.29% of JavaScript online submissions for Find Words That Can Be Formed by Characters.`,'Javascript'],
'LeetCode #1496 Path Crossing' : [`Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return True if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. Return False otherwise.`,
`var isPathCrossing = function(path) {
  let visitedPaths = [];
  let currX = 0;
  let currY = 0;

  while (path.length > 0) {
          visitedPaths.push('{currX}{currY}');
      if (path[0] === 'N'){
          currY++;
      }
      if (path[0] === 'S') {
          currY--;
      }
       if (path[0] === 'E') {
          currX++;
      }
       if (path[0] === 'W') {
          currX--;
      }

      path = path.slice(1);
      if(path.length === 0) {
               visitedPaths.push('\${currX}\${currY});
      }
  }

 const paths = [...new Set(visitedPaths)];
 return paths.length !== visitedPaths.length;
};`,
`Runtime: 84 ms, faster than 30.09% of JavaScript online submissions for Path Crossing. \n
Memory Usage: 42.8 MB, less than 18.58% of JavaScript online submissions for Path Crossing.`,'Javascript'],
'LeetCode #383 Ransom Note': [`Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.`,
`var canConstruct = function(ransomNote, magazine) {
  ransomNote = ransomNote.split("");
  magazine =  magazine.split("");

  for(let i = 0; i < ransomNote.length; i++) {
      let index = magazine.indexOf(ransomNote[i]);
      if (index !== -1) {
           magazine.splice(index, 1);
      } else {
          return false;
      }
  }

      return true;
  };`,
  `Runtime: 92 ms, faster than 91.65% of JavaScript online submissions for Ransom Note. \n
  Memory Usage: 42.5 MB, less than 34.61% of JavaScript online submissions for Ransom Note.`,'Javascript'],


};
module.exports = algos;
