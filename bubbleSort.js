function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i > 0; i--) {
    let noSwaps = true; 
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;  
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(bubbleSort([3, 4, 1, 6, 2]))