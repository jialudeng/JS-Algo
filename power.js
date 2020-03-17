function power(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else {
    return base * power(base, exp - 1);
  }
}