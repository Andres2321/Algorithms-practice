// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Constraints: (1 <= nums.length <= 1000 - 10) ^ (6 <= nums[i] <= 10) ^ 6;

// ----- pseudocode -----
// create new array pointer
// iterate though array
// identify base case. Array reaches length
// use recursion to add index ascending through array
// add each result to new array pointer


const runningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

console.log(runningSum([5, 2, 3, 4, 5]));

const array = [1, 2, 3, 4, 5]

console.log(array[1])