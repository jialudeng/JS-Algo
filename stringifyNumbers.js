function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof(obj[key]) === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof(obj[key]) === 'object' && !Array.isArray(obj[key])){
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

let obj = {
  a: 2,
  b: {
    c: 4,
    d: true
  }
}