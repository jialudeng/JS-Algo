function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] * productOfArray(arr.slice(1));
  }
}