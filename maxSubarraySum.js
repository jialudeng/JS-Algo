function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return null
  } else {
    let i = num - 1;
    while (i < arr.length) {
      if (i === num - 1) {
        maxSum = arr.slice(0, num).reduce((sum, value) => {
          sum += value
          return sum
        }, 0)
        tempSum = maxSum
        i++
      } else {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
        i++
      }
    }
    return maxSum
  }
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))