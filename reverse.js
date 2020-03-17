function reverse(str) {
  if (str.length === 1) {
    return str[0];
  } else if (str.length === 0) {
    return '';
  } else {
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
  }
}