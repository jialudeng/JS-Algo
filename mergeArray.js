function mergeArray(arr1, arr2) {
  let result = [];
  while (arr1.length !== 0 && arr2.length !==0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift())
    } else if (arr1[0] > arr2[0]) {
      result.push(arr2.shift())
    } else {
      result.push(arr1.shift())
      result.push(arr2.shift())
    }
  }
  result = result.concat(arr1).concat(arr2);
  return result;
}

console.log(mergeArray([10, 20, 30], [15, 35, 45]))