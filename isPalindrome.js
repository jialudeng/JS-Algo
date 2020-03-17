function isPalindrome(s) {
  if (s.length < 2) {
    return true;
  } else if (s.length === 2) {
    return s[0] === s[1];
  } else {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9+]/gi, '');
    if (s[0] !== s[s.length - 1]) {
      return false;
    }
    return isPalindrome(s.subsing(1, s.length - 1));
  }
}