function sameFrequency(num1, num2) {
  let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');
  let obj = {};
  arr1.forEach((value) => {
    if (obj[value] === undefined) {
      obj[value] = 1
    } else {
      obj[value]++
    }
  })
  arr2.forEach((value) => {
    if (obj[value] === undefined) {
      return false
    } else {
      obj[value]--
    }
  })
  for (let key in obj) {
    if (obj[key] !== 0) {
      return false
    }
  }
  return true
}