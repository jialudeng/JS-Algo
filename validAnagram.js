/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let obj = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
      let codeS = s.charCodeAt(i);
      let codeT = t.charCodeAt(i);
      obj[codeS] === undefined ? obj[codeS] = 1 : obj[codeS]++;
      obj[codeT] === undefined ? obj[codeT] = -1 : obj[codeT]--;
  }
  for (let key in obj) {
      if (obj[key] !== 0) {
          return false;
      }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'))