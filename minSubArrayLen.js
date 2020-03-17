// LC 209. Minimum Size Subarray Sum
// I don't understand the binary search solution

// two pointers solution
function minSubArrayLen(s, nums) {
  let start = 0;
  let minLen = nums.length + 1;
  let tempSum = 0;
  for (let i = 0; i < nums.length; i++) {
    tempSum += nums[i]
    while (tempSum >= s) {
      minLen = Math.min(minLen, i - start + 1);
      tempSum -= nums[start++]
    }
  }
  if (minLen > nums.length) {
    return 0
  } return minLen
}



// I came up with the approach #2 brute force
// function minSubArrayLen(s, nums) {
//   let windowSize = 1;
//   while (windowSize < nums.length + 1) {
//     let tempSum = sumNums(nums.slice(0, windowSize));
//     if (tempSum >= s) {
//       return windowSize;
//     } 
//     for (let i = 1; i < nums.length - windowSize + 1; i++) {
//       tempSum = tempSum - nums[i - 1] + nums[i + windowSize - 1]
//       if (tempSum >= s) {
//         return windowSize;
//       }
//     } 
//     windowSize++;
//   }
//   return 0;
// }

// function sumNums(nums) {
//   return nums.reduce((sum, num) => {
//     sum += num;
//     return sum;
//   },0)
// }

console.log(minSubArrayLen(7, []))