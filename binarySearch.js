function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] < num) {
      left = mid + 1;
    } else if (arr[mid] > num) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;  
}

console.log(binarySearch([1, 2, 3, 4, 5], 6))