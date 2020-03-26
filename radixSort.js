function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(digitCount(arr[i]), max);
  }
  return max;
}

function redixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0 ; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], k);
      digitBuckets[digit].push(nums[j]);
    }
    nums = [].concat(...digitBuckets)
  }
  return nums;
}

console.log(redixSort([32145, 346, 764, 236, 56657, 43, 6, 23]))