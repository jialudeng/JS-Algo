function areThereDuplicates(...args) {
  let arr = args.sort();
  let i = 0;
  let j = 1;
  if (arr.length < 2) {
    return false
  } else {
    while (j < arr.length) {
      if (arr[i] !== arr[j]) {
        j++;
        i++;
      } else {
        return true
      }
    }
    return false
  }
}