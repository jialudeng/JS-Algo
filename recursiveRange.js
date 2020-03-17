function recursiveRange(num) {
  if (num === 0) {
    return 0;
  } else {
    return num + recursiveRange(num - 1);
  }
}