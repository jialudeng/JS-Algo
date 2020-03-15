function lengthOfLongestSubstring(s) {
  let arr = s.split('');
  if (arr.length === 1) {
    return 1;
  } else {
    let windowSize = 1;
    let max = 0;
    // while windowSize is less than or equal to string length
    while (windowSize <= arr.length) {
      for (let i = 0; i < arr.length - windowSize + 1; i++) {
        let tempArr = arr.slice(i, windowSize + i);
        if (checkNoDuplicate(tempArr)) {
          max = windowSize;
        }
      }
      windowSize++;
    }
    return max;
  }
}

function checkNoDuplicate(arr) {
  let sorted = arr.sort();
  let current = 0;
  let next = 1;
  while (next < arr.length) {
    if (sorted[current] === sorted[next]) {
      return false;
    }
    current++;
    next++;
  } return true;
}

console.log(lengthOfLongestSubstring(''))


