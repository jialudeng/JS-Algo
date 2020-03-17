function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  } else {
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
  }
}

