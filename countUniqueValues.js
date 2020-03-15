function countUniqueValues(arr) {
  let i = 0;
  let j = 0;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++
    } else {
      i++
      arr[i] = arr[j]
      j++
    }
  }
  return i + 1
}

console.log(countUniqueValues([-2, -1, -1, 0, 0]))