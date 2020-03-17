function someRecursive(arr, cb) {
  if (arr.length === 1) {
    return cb(arr[0]);
  } else {
    if (!cb(arr[0])) {
      return someRecursive(arr.slice(1), cb);
    } return true;
  }
}