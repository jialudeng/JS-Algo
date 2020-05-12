/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  if (s.length === 0 ) return 0;
  if (k >= s.length) return s.length;
    let start = 0;
  let end = 1;
  let result = 0;
  let counter = 0;
  let maxFrequency = 1;  
  let frequency = 1;
  while (end < s.length && counter <= k && start >= 0) {
      if (s[end] === s[start]) {
          frequency++;
          maxFrequency = Math.max(frequency, maxFrequency);
          result = Math.max(end - start + 1, result);
          end++;
      } else if (s[end] !== s[start]) {
        if (counter === k) {
            start++;
            end = start + 1;
            counter = 0;
            maxFrequency = Math.max(frequency, maxFrequency);
            frequency = 1;
        } else {
          result = Math.max(end - start + 1, result);
          counter++;
          end++;
        }
        
      }
  }
  if (k >= s.length - maxFrequency) return s.length;
  return result;
};


console.log(characterReplacement('ABBBB', 1))