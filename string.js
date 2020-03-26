function wordCountEngine(document) {
  let array = document.replace(/([^\w\s]*)/g, '').toLowerCase().split(' ');
  let obj = {};
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] === undefined) {
      obj[array[i]] = {count: 1, index: i, word: array[i]};
    } else {
      obj[array[i]].count++;
    }
  }
  for (let key in obj) {
    result.push(obj[key])
  }
  result.sort(function(obj1, obj2) {
    if (obj1.count !== obj2.count) {
      return obj1.count - obj2.count
    } else {
      return obj1.index - obj2.index
    }
  })
  return result.map((obj) => [obj.word, obj.count.toString()])
}



console.log(wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!"))