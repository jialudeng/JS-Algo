function merge(arr1, arr2) {
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

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } 
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([45, 10, 20, 15, 65, 30]))