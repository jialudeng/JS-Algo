function linearSearch(arr, num) {
  return arr.reduce((result, number, index) => {
    if (number === num) {
      result = index;
    }
    return result;
  }, -1)
}