function averagePair(arr, avg) {
  let target = avg * 2;
  let front = 0;
  let end = arr.length - 1;
  while (front < end) {
    if (arr[front] + arr[end] === target) {
      return true;
    } else if (arr[front] + arr[end] > target) {
      end--;
    } else if (arr[front] + arr[end] < target) {
      front++;
    }
  }
  return false
}