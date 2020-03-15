function checkAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  } else {
    let obj = {};
    str1.split('').forEach(letter => {
      if (obj[letter] === undefined) {
        obj[letter] = 1
      } else {
        obj[letter]++
      }
    })
    str2.split('').forEach(letter => {
      if (obj[letter] === undefined) {
        return false
      } else {
        obj[letter]--
      }
    })
    for (let key in obj) {
      if (obj[key] <= 0) {
        return false
      }
    }
    return true
  }
}

console.log(checkAnagrams('aaz', 'zza'))