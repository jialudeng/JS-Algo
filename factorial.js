function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }

}