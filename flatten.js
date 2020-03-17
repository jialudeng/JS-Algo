function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}

// function flatten(arr) {
//   if (arr.length === 1 && !Array.isArray(arr[0])) {
//     return arr;
//   } else if (arr.length === 1 && Array.isArray(arr[0])) {
//     return flatten(arr[0]);
//   } else {
//     if (!Array.isArray(arr[0])) {
//       return arr.slice(0, 1).concat(flatten(arr.slice(1)));
//     } else {
//       return flatten(arr[0]).concat(flatten(arr.slice(1)));
//     }
//   }
// }

console.log(flatten([1, 2, 3, [4, 5] ]))