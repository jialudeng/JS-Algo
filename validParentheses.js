/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let obj = {
      '(': ')',
      '[': ']',
      '{': '}'
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      if (Object.keys(obj).indexOf(s[i]) !== -1) {
          stack.push[s[i]];
      } else {
          let popped = stack.pop();
          if (obj[popped] !== s[i]) {
              return false;
          }   
      }
  }
  return true;
};

console.log(isValid('()'))