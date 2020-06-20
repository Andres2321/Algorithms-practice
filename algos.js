// ===== Algo #1 =====
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Constraints: (1 <= nums.length <= 1000 - 10) ^ (6 <= nums[i] <= 10) ^ 6;

// ----- pseudocode -----
// iterate though array
// Start at index 1 of array
// add each result to last index number by subtracting one from [i]
// return array

// const runningSum = (nums) => {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] += nums[i - 1];
//   }
//   return nums;
// };
// console.log(runningSum([5, 2, 3, 4, 5]));

// const runningSum = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[0]) {
//       continue
//     } else {
//       nums[i] += nums[i - 1]
//     }
//   }
//   return nums;
// };
// console.log(runningSum([5, 2, 3, 4, 5]));


// ===== Algo #2 =====
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn]

// ----- pseudocode -----
// Iterate through array

// const shuffle = (nums, n) => {
//   const newArray = [];

//   for (let i = 0; i < n; i++) {
//     newArray.push(nums[i]);
//     newArray.push(nums[i + n]);
//   }
//   return newArray;
// };
// console.log(shuffle([2, 5, 1, 3, 4, 7], 3));


// ===== Algo #3 =====
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// ----- pseudocode -----
// Iterate through array
// compare current index to following index

// const smallerNumbersThanCurrent = (nums) => {
//   let newArray = [];

//   for (let i = 0; i < nums.length; i++) {
//     let count = 0
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         count++
//       }
//     }
//     newArray[i]= count
//   }
//   return newArray
//   }

  // ---- alternative solution ---
  // sort array from smallest to largest
  // finding index of array 
  // return array

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// var smallerNumbersThanCurrent = function (nums) {
//   const sortedNums = [...nums].sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = sortedNums.indexOf(nums[i]);
//   }
//   return nums;
// };

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));


// ===== Algo #4 =====
// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number
// of candies among them.Notice that multiple kids can have the greatest number of candies.

// ----- pseudocode -----
// declare max in array
// iterate through array and compare to max variable
// return true or false is condition met

const kidsWithCandies = (candies, extraCandies) => {
  const maxCandy = Math.max(...candies)
  const result = []
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] === maxCandy) {
      result.push(true)
    } else if (candies[i] < maxCandy && candies[i] + extraCandies >= maxCandy) {
      result.push(true);
    } else {
      result.push(false);
    }
  } 
  return result;
}
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
