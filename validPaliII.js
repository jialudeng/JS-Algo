var validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  let mismatch = false;
  while (end > start) {
      if (s[end] === s[start]) {
          end --;
          start++;
      } else {
          if (!mismatch && s[end] === s[start + 1]) {
              start++;
              mismatch = true;
          } else if (!mismatch && s[start] === s[end - 1]) {
              end--;
              mismatch = true;
          } else {
              return false;
          }
      }
  }
  return true;
};

validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")
validPalindrome("aguokepatgbnvfqmgmlucupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuclmgmqfvnbgtapekouga")
var str = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
let str2 = str.split('').reverse().join('')
console.log(str2)