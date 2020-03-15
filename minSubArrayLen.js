function minSubArrayLen(s, nums) {
  let windowSize = 1;
  while (windowSize < nums.length + 1) {
    let tempSum = sumNums(nums.slice(0, windowSize));
    if (tempSum >= s) {
      return windowSize;
    } 
    for (let i = 1; i < nums.length - windowSize + 1; i++) {
      tempSum = tempSum - nums[i - 1] + nums[i + windowSize - 1]
      if (tempSum >= s) {
        return windowSize;
      }
    } 
    windowSize++;
  }
  return 0;
}

function sumNums(nums) {
  return nums.reduce((sum, num) => {
    sum += num;
    return sum;
  },0)
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))