/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = [];
  for (let i = 0; i < s.length; i++) {
      let code = toLowerCase(s.charCodeAt(i));
      if (isLetter(code)) str.push(code);
  }
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
  }
  return true;
};


var isLetter = function(code) {
  if (((code >= 48) && (code <= 57))  // numbers
  || ((code >= 97) && (code <= 122))) {  // lowercase
      return true
  }
  else {
      return false
  }
}

var toLowerCase = function(code) {
  if (code >= 65 && code <= 90) {
      return code + 32    
  }
  else {
      return code
  }
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))