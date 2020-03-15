function isSubsequence(str1, str2) {
  if (!str1) {
    return true;
  } else if (str1.length >= str2.length && str1 !== str2) {
    return false;
  } else {
    let i = 0;
    for (var j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j] && i < str1.length) {
        i++;
      } if (i === str1.length) {
        return true;
      }
    }
    return false;
  }
}