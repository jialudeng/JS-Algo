function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substring(1)];
  } else {
    return [arr[0][0].toUpperCase() + arr[0].substring(1)].concat(capitalizeFirst(arr.slice(1)))
  }
}

console.log(capitalizeFirst(['car','taco','banana']))